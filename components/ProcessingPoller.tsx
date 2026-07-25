"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * While a report is still processing (OCR/AI running in the background —
 * see app/api/upload/route.ts), periodically refresh the page so its status
 * updates automatically instead of requiring a manual reload.
 */
export function ProcessingPoller({ isProcessing }: { isProcessing: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (!isProcessing) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 3000);

    return () => clearInterval(interval);
  }, [isProcessing, router]);

  return null;
}
