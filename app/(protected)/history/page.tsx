import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TrendChart, type TrendPoint } from "@/components/TrendChart";
import type { ReportRecord, FindingRecord } from "@/types";

export default async function HistoryPage() {
  const session = await getSession();
  const userId = session!.user.id;

  const reports: (ReportRecord & { findings: FindingRecord[] })[] = await prisma.report.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
    include: { findings: true },
  });

  // Group findings by lab name across every report, in chronological order,
  // so repeated tests (e.g. "LDL Cholesterol") can be charted as a trend.
  const trendsByLab = new Map<string, { unit: string | null; points: TrendPoint[] }>();

  for (const report of reports) {
    for (const finding of report.findings) {
      const numericValue = parseFloat(finding.value);
      if (Number.isNaN(numericValue)) continue;

      const existing = trendsByLab.get(finding.labName);
      const point: TrendPoint = {
        date: new Date(report.createdAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        }),
        value: numericValue,
      };

      if (existing) {
        existing.points.push(point);
      } else {
        trendsByLab.set(finding.labName, { unit: finding.unit, points: [point] });
      }
    }
  }

  // Only chart labs that appear more than once — a single point isn't a trend.
  const repeatedLabs = Array.from(trendsByLab.entries()).filter(([, v]) => v.points.length > 1);

  return (
    <div className="space-y-gutter">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">History &amp; Trends</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mt-1">
          How your repeated lab values have changed across {reports.length} report
          {reports.length === 1 ? "" : "s"}.
        </p>
      </div>

      {repeatedLabs.length === 0 ? (
        <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl p-10 text-center border border-dashed border-outline-variant/40 dark:border-inverse-on-surface/10">
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
            {reports.length < 2
              ? "Upload at least two reports with a repeated lab test to see trends here."
              : "None of your findings share a lab name across reports yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {repeatedLabs.map(([labName, { unit, points }]) => (
            <TrendChart key={labName} labName={labName} points={points} unit={unit} />
          ))}
        </div>
      )}
    </div>
  );
}
