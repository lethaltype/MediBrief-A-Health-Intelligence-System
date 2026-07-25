"use client";

import { useState } from "react";
import { ShareModal } from "@/components/ShareModal";

export function ReportActions({ reportId }: { reportId: string }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  async function downloadPdf() {
    setDownloading(true);
    try {
      const res = await fetch("/api/export/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId }),
      });
      if (!res.ok) throw new Error("Export failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "medibrief-report.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("Could not generate the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
      <div className="bg-surface-container-lowest dark:bg-inverse-surface p-6 rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-tint active:scale-95 transition-all"
            onClick={() => setShareOpen(true)}
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            Send to Doctor
          </button>
          <button
            className="border border-primary text-primary dark:text-inverse-primary px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-primary-container/10 active:scale-95 transition-all disabled:opacity-60"
            disabled={downloading}
            onClick={downloadPdf}
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            {downloading ? "Preparing…" : "Download PDF"}
          </button>
        </div>
        <button
          className="text-on-surface-variant dark:text-inverse-on-surface/70 font-label-md text-label-md flex items-center gap-2 hover:text-primary dark:text-inverse-primary transition-colors"
          onClick={() => setShareOpen(true)}
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
          Share Report
        </button>
      </div>

      <ShareModal open={shareOpen} reportId={reportId} onClose={() => setShareOpen(false)} />
    </>
  );
}
