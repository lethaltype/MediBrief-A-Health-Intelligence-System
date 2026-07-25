import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { FindingRecord, ReportRecord, SummaryRecord } from "@/types";
import { MEDICAL_DISCLAIMER } from "@/lib/ai";

type ReportForExport = ReportRecord & { findings: FindingRecord[]; summary: SummaryRecord | null };

const PRIMARY = rgb(0 / 255, 104 / 255, 95 / 255);
const TEXT = rgb(11 / 255, 28 / 255, 48 / 255);
const MUTED = rgb(61 / 255, 73 / 255, 71 / 255);
const ERROR = rgb(186 / 255, 26 / 255, 26 / 255);

export async function generateReportPdf(report: ReportForExport, userName: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page = doc.addPage([612, 792]); // US Letter
  let y = 742;
  const margin = 56;
  const lineHeight = 16;

  function ensureSpace(needed: number) {
    if (y - needed < margin) {
      page = doc.addPage([612, 792]);
      y = 742;
    }
  }

  function drawText(
    text: string,
    { size = 11, f = font, color = TEXT, gap = lineHeight }: { size?: number; f?: typeof font; color?: typeof TEXT; gap?: number } = {}
  ) {
    const maxWidth = 612 - margin * 2;
    const words = text.split(" ");
    let line = "";

    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      const width = f.widthOfTextAtSize(testLine, size);
      if (width > maxWidth && line) {
        ensureSpace(gap);
        page.drawText(line, { x: margin, y, size, font: f, color });
        y -= gap;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      ensureSpace(gap);
      page.drawText(line, { x: margin, y, size, font: f, color });
      y -= gap;
    }
  }

  // Header
  drawText("MediBrief", { size: 22, f: bold, color: PRIMARY, gap: 28 });
  drawText(`Report: ${report.title ?? "Untitled Report"}`, { size: 14, f: bold, gap: 20 });
  drawText(`Generated for ${userName} on ${new Date().toLocaleDateString()}`, {
    size: 10,
    color: MUTED,
    gap: 24,
  });

  // AI Summary
  if (report.summary) {
    drawText("AI Summary", { size: 13, f: bold, color: PRIMARY, gap: 18 });
    drawText(report.summary.plainLanguageText, { gap: 14 });
    if (report.summary.specialistSuggested) {
      drawText(`Suggested specialist: ${report.summary.specialistSuggested}`, {
        size: 10,
        color: MUTED,
        gap: 20,
      });
    } else {
      y -= 8;
    }
  }

  // Findings
  if (report.findings.length > 0) {
    drawText("Findings", { size: 13, f: bold, color: PRIMARY, gap: 18 });
    for (const finding of report.findings) {
      const label = `${finding.labName}: ${finding.value}${finding.unit ? ` ${finding.unit}` : ""}${
        finding.referenceRange ? ` (reference: ${finding.referenceRange})` : ""
      }`;
      drawText(label, {
        size: 10.5,
        color: finding.isAbnormal ? ERROR : TEXT,
        gap: 14,
      });
    }
    y -= 8;
  }

  // Disclaimer
  ensureSpace(60);
  drawText("Disclaimer", { size: 11, f: bold, color: MUTED, gap: 14 });
  drawText(MEDICAL_DISCLAIMER, { size: 9, color: MUTED, gap: 12 });

  return doc.save();
}
