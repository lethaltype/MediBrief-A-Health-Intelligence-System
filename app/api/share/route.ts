import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { ReportFileRecord } from "@/types";

const shareSchema = z.object({
  reportId: z.string(),
  recipient: z.string().email("Enter a valid recipient email."),
  includeSummary: z.boolean().optional(),
  includeOriginal: z.boolean().optional(),
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const parsed = shareSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const { reportId, recipient, includeSummary, includeOriginal } = parsed.data;

  const report = await prisma.report.findUnique({
    where: { id: reportId },
    include: { summary: true, files: true },
  });

  if (!report || report.userId !== session.user.id) {
    return NextResponse.json({ error: "Report not found." }, { status: 404 });
  }

  const shareLog = await prisma.shareLog.create({
    data: {
      reportId,
      channel: "email",
      recipient,
      status: "pending",
    },
  });

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    // Clearly-marked stub path: no n8n webhook configured yet.
    // Wire N8N_WEBHOOK_URL in .env to send real emails.
    await prisma.shareLog.update({
      where: { id: shareLog.id },
      data: { status: "pending" },
    });

    return NextResponse.json({
      shareLog,
      warning:
        "N8N_WEBHOOK_URL is not configured — the share was logged but not actually delivered.",
    });
  }

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        channel: "email",
        recipient,
        reportId,
        reportTitle: report.title,
        includeSummary,
        includeOriginal,
        summary: includeSummary ? report.summary?.plainLanguageText : undefined,
        fileUrls: includeOriginal
          ? report.files.map((f: ReportFileRecord) => f.storageUrl)
          : undefined,
      }),
    });

    const updated = await prisma.shareLog.update({
      where: { id: shareLog.id },
      data: {
        status: webhookRes.ok ? "sent" : "failed",
        sentAt: webhookRes.ok ? new Date() : null,
      },
    });

    if (!webhookRes.ok) {
      return NextResponse.json({ error: "Delivery failed via n8n." }, { status: 502 });
    }

    return NextResponse.json({ shareLog: updated });
  } catch (err) {
    await prisma.shareLog.update({
      where: { id: shareLog.id },
      data: { status: "failed" },
    });
    console.error("n8n webhook delivery failed:", err);
    return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
  }
}
