import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { UploadPanel } from "@/components/UploadPanel";
import { RecentReportsList } from "@/components/RecentReportsList";
import { InsightsPanel } from "@/components/InsightsPanel";
import { ProcessingPoller } from "@/components/ProcessingPoller";
import type { ReportWithRelations } from "@/types";

export default async function DashboardPage() {
  const session = await getSession();
  const userId = session!.user.id;
  const userName = session!.user.name ?? session!.user.email ?? "there";

  const reports: ReportWithRelations[] = await prisma.report.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { files: true, findings: true, summary: true },
  });

  const processing = reports.filter((r: ReportWithRelations) => r.status === "processing");
  const analyzedCount = reports.filter((r: ReportWithRelations) => r.status === "analyzed").length;
  const allFindings = reports.flatMap((r: ReportWithRelations) => r.findings);
  const pendingAttention = allFindings.filter((f) => f.isAbnormal).length;

  return (
    <>
      <ProcessingPoller isProcessing={processing.length > 0} />

      {/* Hero Section & Summary */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="space-y-2">
          <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">
            Welcome back, {userName.split("@")[0]}.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-inverse-on-surface/70 max-w-2xl">
            {reports.length === 0
              ? "Upload your first medical report to get a plain-language summary and see it here."
              : "Your health intelligence is up to date."}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-xl p-4 flex items-center gap-4 border border-outline-variant/20 dark:border-inverse-on-surface/10">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-inverse-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                analytics
              </span>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary dark:text-inverse-primary">{analyzedCount}</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-inverse-on-surface/70">
                Reports Analyzed
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-xl p-4 flex items-center gap-4 border border-outline-variant/20 dark:border-inverse-on-surface/10">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary dark:text-tertiary-fixed-dim">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                pending_actions
              </span>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-tertiary dark:text-tertiary-fixed-dim">{pendingAttention}</div>
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-inverse-on-surface/70">
                Pending Attention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 space-y-gutter">
          <UploadPanel />

          {processing.map((report) => (
            <div
              key={report.id}
              className="bg-surface-container-low dark:bg-inverse-surface/60 rounded-2xl p-6 border border-primary/10"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary animate-spin">
                    <span className="material-symbols-outlined text-[16px]">sync</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg">Analyzing: {report.title}</h4>
                </div>
              </div>
              <div className="w-full bg-surface-container-highest dark:bg-inverse-surface rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary h-full rounded-full animate-progress" />
              </div>
              <p className="mt-4 text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary dark:text-inverse-primary">info</span>
                Running OCR and AI analysis on this report…
              </p>
            </div>
          ))}

          <RecentReportsList limit={5} reports={reports} />
        </div>

        <div className="lg:col-span-4 space-y-gutter">
          <InsightsPanel findings={allFindings} />
        </div>
      </div>
    </>
  );
}
