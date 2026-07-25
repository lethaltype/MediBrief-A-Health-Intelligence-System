import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { waitUntil } from "@vercel/functions";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { saveFile, validateFile } from "@/lib/storage";
import { extractText, parseFindingsFromText } from "@/lib/ocr";
import { generateSummary, flagAbnormalFindings } from "@/lib/ai";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const validationError = validateFile(file);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // 1. Create the report + persist the file. This part is fast (DB write +
  // storage write), so it's fine to keep it in the request/response cycle.
  const report = await prisma.report.create({
    data: {
      userId: session.user.id,
      title: file.name,
      status: "processing",
    },
  });

  const { url, buffer: fileBuffer } = await saveFile(file);

  const reportFile = await prisma.reportFile.create({
    data: {
      reportId: report.id,
      fileName: file.name,
      fileType: file.type,
      storageUrl: url,
    },
  });

  // 2. Run OCR + AI analysis in the background instead of blocking the
  // response on it. Both are real network calls to Gemini now and can take
  // several seconds combined — without this, the upload request itself
  // would hang the whole time, the UI would just show a spinner, and the
  // "processing" progress card would never actually get a chance to render
  // (the report would already be "analyzed" by the time the response came
  // back). Returning early lets the dashboard show real progress and poll
  // until it's done.
  //
  // waitUntil (from @vercel/functions) tells Vercel's serverless runtime to
  // keep this function alive until the promise settles, even though the
  // response has already been sent — without it, Vercel can freeze/kill
  // the function shortly after responding and cut this off mid-flight. It
  // also works transparently in local dev / any normal Node server (where
  // the process just stays alive on its own), so this is safe everywhere.
  waitUntil(
    processReportInBackground(report.id, reportFile.id, fileBuffer, file.type, file.name).catch(
      (err) => {
        console.error("Unhandled error in background report processing:", err);
      }
    )
  );

  return NextResponse.json({ report }, { status: 201 });
}

async function processReportInBackground(
  reportId: string,
  reportFileId: string,
  fileBuffer: Buffer,
  fileType: string,
  fileName: string
) {
  try {
    const ocrResult = await extractText(fileBuffer, fileType, fileName);

    await prisma.reportFile.update({
      where: { id: reportFileId },
      data: { ocrText: ocrResult.text },
    });

    const rawFindings = parseFindingsFromText(ocrResult.text);
    const flaggedFindings = flagAbnormalFindings(rawFindings);

    if (flaggedFindings.length > 0) {
      await prisma.finding.createMany({
        data: flaggedFindings.map((f) => ({ ...f, reportId })),
      });
    }

    const analysis = await generateSummary(ocrResult.text, flaggedFindings);

    await prisma.summary.create({
      data: {
        reportId,
        plainLanguageText: analysis.plainLanguageText,
        specialistSuggested: analysis.specialistSuggested,
      },
    });

    await prisma.report.update({
      where: { id: reportId },
      data: { status: "analyzed" },
    });
  } catch (err) {
    console.error("Background report analysis failed:", err);
    await prisma.report.update({
      where: { id: reportId },
      data: { status: "failed" },
    });
  }
}
