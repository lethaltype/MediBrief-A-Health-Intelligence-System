import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateReportPdf } from "@/lib/pdf";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const { reportId } = await request.json();
  if (!reportId) {
    return NextResponse.json({ error: "reportId is required." }, { status: 400 });
  }

  const report = await prisma.report.findUnique({
    where: { id: reportId },
    include: { findings: true, summary: true },
  });

  if (!report || report.userId !== session.user.id) {
    return NextResponse.json({ error: "Report not found." }, { status: 404 });
  }

  const pdfBytes = await generateReportPdf(
    report,
    session.user.name ?? session.user.email ?? "MediBrief User"
  );

  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${(report.title ?? "report").replace(/[^a-z0-9]/gi, "_")}.pdf"`,
    },
  });
}
