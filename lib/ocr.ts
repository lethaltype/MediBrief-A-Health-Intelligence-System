import type { FindingRecord } from "@/types";

export interface OcrResult {
  text: string;
  /** True when this came from the offline fallback rather than a real OCR call. */
  isStub: boolean;
}

const TRANSCRIBE_PROMPT =
  "Transcribe every piece of text visible in this document exactly as it appears — labels, values, units, reference ranges, headers, footnotes, everything. Preserve line breaks. Where a lab result appears as a table or list, output each result on its own line in the form 'Name: value unit (reference range)' when that information is present. Do not summarize, interpret, or omit anything. Output only the transcribed text, nothing else — no preamble, no commentary.";

/**
 * OCR via Gemini's multimodal (vision) capability, reusing the same
 * GEMINI_API_KEY already used for AI summaries. Gemini can read images and
 * PDFs directly as inline data, so this avoids needing a separate paid OCR
 * provider (e.g. Cloud Vision, which requires a billing account even for
 * its free tier).
 *
 * Falls back to a clearly-labeled placeholder if GEMINI_API_KEY isn't set,
 * so the pipeline still runs end-to-end without credentials.
 *
 * Note: inline requests to Gemini are capped around ~20MB — comfortably
 * covers typical lab report photos/PDFs, but very large multi-page PDFs
 * may need the Files API instead (not implemented here).
 */
export async function extractText(
  fileBuffer: Buffer,
  mimeType: string,
  fileName: string
): Promise<OcrResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      text: `[OCR STUB] No OCR provider is configured for MediBrief yet (GEMINI_API_KEY is not set). This is placeholder text standing in for the extracted content of "${fileName}".`,
      isStub: true,
    };
  }

  const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";

  try {
    const base64Content = fileBuffer.toString("base64");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { inline_data: { mime_type: mimeType, data: base64Content } },
                { text: TRANSCRIBE_PROMPT },
              ],
            },
          ],
          generationConfig: {
            temperature: 0,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API returned ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    const text: string =
      data.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text ?? "")
        .join("") ?? "";

    if (!text.trim()) {
      return { text: "No text was detected in this document.", isStub: false };
    }

    return { text, isStub: false };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Gemini OCR failed:", err);
    return {
      text: `[OCR ERROR] Gemini could not process "${fileName}". Details: ${message}`,
      isStub: true,
    };
  }
}

/**
 * Small heuristic parser for "Label: value unit (range)" style lines,
 * e.g. "LDL Cholesterol: 168 mg/dL (Range: <100)". The transcription
 * prompt above nudges Gemini toward this format, but real report layouts
 * vary — worth tuning this once you see real output for your reports.
 */
export function parseFindingsFromText(text: string): Omit<FindingRecord, "id" | "reportId">[] {
  const findings: Omit<FindingRecord, "id" | "reportId">[] = [];
  const lineRegex =
    /^([A-Za-z0-9 /()%-]+):\s*([\d.]+)\s*([A-Za-z/%]+)?\s*(?:\(([^)]*)\))?/gm;

  let match: RegExpExecArray | null;
  while ((match = lineRegex.exec(text)) !== null) {
    const [, labName, value, unit, referenceRange] = match;
    findings.push({
      labName: labName.trim(),
      value: value.trim(),
      unit: unit?.trim() ?? null,
      referenceRange: referenceRange?.trim() ?? null,
      isAbnormal: false, // real abnormal-flagging happens in lib/ai.ts once ranges are trustworthy
    });
  }

  return findings;
}
