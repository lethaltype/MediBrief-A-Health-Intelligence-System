import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ReportActions } from "@/components/ReportActions";
import { MEDICAL_DISCLAIMER } from "@/lib/ai";
import type { ReportWithRelations, ReportRecord, FindingRecord } from "@/types";

export default async function ReportDetailPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  const userId = session!.user.id;

  const report: ReportWithRelations | null = await prisma.report.findUnique({
    where: { id: params.id },
    include: { files: true, findings: true, summary: true },
  });

  if (!report || report.userId !== userId) {
    notFound();
  }

  // Most recent prior report, for a simple compare-with-previous view.
  const previousReport: (ReportRecord & { findings: FindingRecord[] }) | null =
    await prisma.report.findFirst({
      where: { userId, id: { not: report.id }, createdAt: { lt: report.createdAt } },
      orderBy: { createdAt: "desc" },
      include: { findings: true },
    });

  const abnormalFindings = report.findings.filter((f: FindingRecord) => f.isAbnormal);
  const normalFindings = report.findings.filter((f: FindingRecord) => !f.isAbnormal);

  return (
    <div className="space-y-gutter">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">
          {report.title ?? "Untitled Report"}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mt-1">
          Uploaded {new Date(report.createdAt).toLocaleDateString()} &middot; Status:{" "}
          <span className="capitalize">{report.status}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: OCR text + action bar */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-on-surface-variant dark:text-inverse-on-surface/70">description</span>
              <h2 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Extracted Document Text</h2>
            </div>
            {report.files.map((file) => (
              <div key={file.id} className="mb-4 last:mb-0">
                <p className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 mb-2">
                  {file.fileName}
                </p>
                <div className="p-4 bg-surface-container-low dark:bg-inverse-surface/60 rounded-xl whitespace-pre-wrap font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                  {file.ocrText ?? "OCR has not run for this file yet."}
                </div>
              </div>
            ))}
          </div>

          <ReportActions reportId={report.id} />
        </div>

        {/* Right: AI Analysis Panel */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="z-10">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">AI Analysis</h2>
                {report.summary && (
                  <span className="material-symbols-outlined text-primary dark:text-inverse-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                )}
              </div>
              {report.summary ? (
                <>
                  <div className="mt-4 p-5 bg-surface-container-low dark:bg-inverse-surface/60 rounded-2xl border border-outline-variant/20 dark:border-inverse-on-surface/10">
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 leading-relaxed">
                      {report.summary.plainLanguageText}
                    </p>
                  </div>
                  {report.summary.specialistSuggested && (
                    <div className="mt-4 bg-secondary-container/10 p-5 rounded-2xl border border-secondary-container/20">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">medical_services</span>
                        <h3 className="font-title-lg text-title-lg text-on-secondary-container">
                          Specialist Recommendation
                        </h3>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70">
                          Recommended:
                        </span>
                        <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface font-bold">
                          {report.summary.specialistSuggested}
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="mt-4 font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 italic">
                    {MEDICAL_DISCLAIMER}
                  </p>
                </>
              ) : (
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                  Analysis is still in progress for this report.
                </p>
              )}
            </div>
          </div>

          {abnormalFindings.length > 0 && (
            <div className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10 flex flex-col gap-4">
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-error">warning</span>
                Abnormal Values
              </h3>
              <div className="grid gap-3">
                {abnormalFindings.map((finding) => (
                  <div
                    key={finding.id}
                    className="flex justify-between items-center p-4 bg-error-container/20 rounded-2xl border border-error/10"
                  >
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70">{finding.labName}</p>
                      <p className="font-headline-md text-headline-md text-error font-bold">
                        {finding.value}{" "}
                        <span className="text-label-md font-normal">{finding.unit}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-label-sm text-label-sm text-error uppercase font-bold">Flagged</span>
                      {finding.referenceRange && (
                        <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 mt-1">
                          Range: {finding.referenceRange}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {normalFindings.length > 0 && (
            <div className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10 flex flex-col gap-3">
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Findings Within Range</h3>
              <div className="grid gap-2">
                {normalFindings.map((finding) => (
                  <div key={finding.id} className="flex justify-between items-center py-2 border-b border-outline-variant/10 dark:border-inverse-on-surface/10 last:border-0">
                    <span className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">{finding.labName}</span>
                    <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">
                      {finding.value} {finding.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {previousReport && (
            <div className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10 flex flex-col gap-3">
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Compare with Previous</h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Comparing against &ldquo;{previousReport.title}&rdquo; from{" "}
                {new Date(previousReport.createdAt).toLocaleDateString()} —{" "}
                {previousReport.findings.length} findings on file.
              </p>
              <a className="text-primary dark:text-inverse-primary font-label-md hover:underline" href="/history">
                View full trends &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
