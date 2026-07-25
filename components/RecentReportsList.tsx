import Link from "next/link";
import type { ReportWithRelations } from "@/types";

const STATUS_STYLES: Record<string, string> = {
  analyzed: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  processing: "bg-secondary-container/20 text-secondary dark:text-secondary-fixed-dim",
  uploaded: "bg-surface-container-highest dark:bg-inverse-surface text-on-surface-variant dark:text-inverse-on-surface/70",
  failed: "bg-error-container text-on-error-container",
};

export function RecentReportsList({
  reports,
  limit,
  title = "Recent Reports",
  showViewAll = true,
}: {
  reports: ReportWithRelations[];
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}) {
  const visible = limit ? reports.slice(0, limit) : reports;

  if (reports.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">{title}</h3>
        </div>
        <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-2xl p-10 text-center border border-dashed border-outline-variant/40 dark:border-inverse-on-surface/10">
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
            No reports yet — upload your first medical report above to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">{title}</h3>
        {showViewAll && (
          <Link className="text-primary dark:text-inverse-primary font-label-md hover:underline" href="/reports">
            View All
          </Link>
        )}
      </div>
      <div className="space-y-3">
        {visible.map((report) => (
          <Link
            key={report.id}
            className="bg-surface-container-lowest dark:bg-inverse-surface rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 border border-transparent transition-all"
            href={`/reports/${report.id}`}
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-secondary-container/10 rounded-xl flex items-center justify-center text-secondary dark:text-secondary-fixed-dim">
                <span className="material-symbols-outlined text-[28px]">biotech</span>
              </div>
              <div>
                <h5 className="font-title-lg text-title-lg group-hover:text-primary dark:text-inverse-primary transition-colors">
                  {report.title ?? "Untitled Report"}
                </h5>
                <div className="flex gap-4 font-label-sm text-on-surface-variant dark:text-inverse-on-surface/70">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    {new Date(report.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">description</span>
                    {report.findings.length} findings
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span
                className={`px-3 py-1 rounded-full font-label-sm capitalize ${
                  STATUS_STYLES[report.status] ?? STATUS_STYLES.uploaded
                }`}
              >
                {report.status}
              </span>
              <span className="material-symbols-outlined text-on-surface-variant dark:text-inverse-on-surface/70 group-hover:text-primary dark:text-inverse-primary transition-colors">
                chevron_right
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
