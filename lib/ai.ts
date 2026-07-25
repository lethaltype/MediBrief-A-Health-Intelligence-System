import type { FindingRecord } from "@/types";

export const MEDICAL_DISCLAIMER =
  "This summary is generated for informational purposes only. It is not a medical diagnosis and does not replace advice from a qualified healthcare professional.";

export interface AnalysisResult {
  plainLanguageText: string;
  specialistSuggested: string | null;
  /** True when this came from the offline fallback rather than a real model call. */
  isStub: boolean;
}

const SYSTEM_PROMPT = `You are a cautious medical-report summarizer for a consumer health app called MediBrief.
Rules you must always follow:
- Explain findings in plain, accessible language for a non-clinical reader.
- Never state a diagnosis. Use phrasing like "may suggest" or "is often associated with", never "you have X".
- Point out which values are outside the given reference range and by roughly how much, in plain terms.
- Suggest at most one general specialist category if relevant (e.g. "cardiologist"), and say why in one sentence.
- Keep the summary under 180 words.
- Do not invent findings that were not provided to you.`;

/**
 * Uses the Google Gemini API when GEMINI_API_KEY is set in the environment.
 * Falls back to a deterministic, clearly-labeled template summary when it
 * is not — so the pipeline is always usable end-to-end in dev without a key,
 * and upgrades automatically once a key is configured.
 *
 * Model name is configurable via GEMINI_MODEL because Gemini model IDs
 * change/retire fairly often — check https://ai.google.dev/gemini-api/docs/models
 * for the current recommended flash-tier model if the default below starts
 * returning 404s.
 */
export async function generateSummary(
  ocrText: string,
  findings: Omit<FindingRecord, "id" | "reportId">[]
): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return fallbackSummary(findings);
  }

  const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";

  try {
    const findingsText = findings.length
      ? findings
          .map(
            (f) =>
              `- ${f.labName}: ${f.value}${f.unit ? ` ${f.unit}` : ""}${
                f.referenceRange ? ` (reference range: ${f.referenceRange})` : ""
              }`
          )
          .join("\n")
      : "No structured findings were extracted.";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Extracted findings:\n${findingsText}\n\nRaw report text (may be partial/OCR noise):\n${ocrText.slice(
                    0,
                    4000
                  )}\n\nRespond with a JSON object only, no other text: {"summary": string, "specialist": string | null}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API returned ${response.status}: ${errText}`);
    }

    const data = await response.json();
    const text: string =
      data.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text ?? "")
        .join("") ?? "";

    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return {
      plainLanguageText: parsed.summary,
      specialistSuggested: parsed.specialist ?? null,
      isStub: false,
    };
  } catch (err) {
    console.error("AI analysis failed, falling back to stub summary:", err);
    return fallbackSummary(findings);
  }
}

function fallbackSummary(findings: Omit<FindingRecord, "id" | "reportId">[]): AnalysisResult {
  const abnormal = findings.filter((f) => f.isAbnormal);

  const plainLanguageText = abnormal.length
    ? `[AI STUB] No AI provider is configured, so this is a placeholder summary. Based on the extracted values, ${abnormal
        .map((f) => f.labName)
        .join(", ")} fell outside the reference range provided and may be worth discussing with a healthcare professional. Connect an LLM API key in lib/ai.ts to replace this with a real analysis.`
    : `[AI STUB] No AI provider is configured, so this is a placeholder summary. No values were flagged as abnormal from the extracted findings. Connect an LLM API key in lib/ai.ts to replace this with a real analysis.`;

  return {
    plainLanguageText,
    specialistSuggested: null,
    isStub: true,
  };
}

/** Flags a finding as abnormal when the value falls outside a "low-high" reference range. */
export function flagAbnormalFindings(
  findings: Omit<FindingRecord, "id" | "reportId">[]
): Omit<FindingRecord, "id" | "reportId">[] {
  return findings.map((f) => {
    const rangeMatch = f.referenceRange?.match(/([\d.]+)\s*-\s*([\d.]+)/);
    const value = parseFloat(f.value);

    if (rangeMatch && !Number.isNaN(value)) {
      const [, low, high] = rangeMatch;
      const isAbnormal = value < parseFloat(low) || value > parseFloat(high);
      return { ...f, isAbnormal };
    }

    return f;
  });
}
