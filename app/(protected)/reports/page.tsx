import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RecentReportsList } from "@/components/RecentReportsList";
import type { ReportWithRelations } from "@/types";

export default async function ReportsPage() {
  const session = await getSession();
  const userId = session!.user.id;

  const reports: ReportWithRelations[] = await prisma.report.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { files: true, findings: true, summary: true },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">All Reports</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mt-1">
          Every report you've uploaded, most recent first.
        </p>
      </div>
      <RecentReportsList reports={reports} showViewAll={false} title="All Reports" />
    </div>
  );
}
