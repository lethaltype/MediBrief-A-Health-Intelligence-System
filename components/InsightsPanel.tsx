import type { FindingRecord } from "@/types";

export function InsightsPanel({ findings }: { findings: FindingRecord[] }) {
  const abnormal = findings.filter((f) => f.isAbnormal);

  return (
    <div className="bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl p-card-padding">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-title-lg text-title-lg">Health Intelligence</h3>
        <span
          className="material-symbols-outlined text-primary dark:text-inverse-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_awesome
        </span>
      </div>

      {abnormal.length === 0 ? (
        <div className="p-4 rounded-2xl bg-surface-container-low dark:bg-inverse-surface/60 border border-outline-variant/20 dark:border-inverse-on-surface/10">
          <p className="text-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
            No flagged values yet. Insights will appear here once a report has
            been analyzed.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {abnormal.slice(0, 3).map((finding) => (
            <div
              key={finding.id}
              className="p-4 rounded-2xl bg-error-container/20 border border-error/10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-md text-error bg-white p-1 px-2 rounded-lg border border-error/20">
                  ATTENTION
                </span>
                <span className="material-symbols-outlined text-error">priority_high</span>
              </div>
              <h5 className="font-body-lg font-bold text-on-surface dark:text-inverse-on-surface">{finding.labName}</h5>
              <p className="text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mt-1">
                {finding.value}
                {finding.unit ? ` ${finding.unit}` : ""} is outside the reference
                range{finding.referenceRange ? ` (${finding.referenceRange})` : ""}.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
