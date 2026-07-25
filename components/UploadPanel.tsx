"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function UploadPanel() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function uploadFile(file: File) {
    setError(null);
    setUploading(true);
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Upload failed. Please try again.");
        setUploading(false);
        return;
      }

      router.refresh();
    } catch {
      setError("Upload failed. Please check your connection and try again.");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <div
      className={`relative overflow-hidden bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl p-8 border-2 border-dashed transition-all cursor-pointer group ${
        dragging ? "border-primary bg-primary/5" : "border-primary/20 hover:border-primary/50"
      }`}
      onClick={() => !uploading && inputRef.current?.click()}
      onDragLeave={() => setDragging(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDrop={handleDrop}
    >
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      <input
        ref={inputRef}
        accept="application/pdf,image/jpeg,image/png"
        className="hidden"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadFile(file);
        }}
      />
      <div className="relative flex flex-col items-center text-center py-10 space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary dark:text-inverse-primary floating">
          <span className="material-symbols-outlined text-[40px]">
            {uploading ? "sync" : "cloud_upload"}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">
            {uploading ? `Uploading ${fileName}…` : "Upload New Medical Report"}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 max-w-md mx-auto">
            Drag and drop your PDF lab results, MRI scans, or prescription
            photos here for instant intelligent analysis.
          </p>
        </div>
        {!uploading && (
          <button
            className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3 rounded-lg font-label-md flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20"
            type="button"
          >
            <span className="material-symbols-outlined">add</span>
            Upload New Report
          </button>
        )}
        {error && (
          <p className="rounded-xl bg-error-container px-4 py-2 font-label-sm text-label-sm text-on-error-container">
            {error}
          </p>
        )}
        <div className="flex gap-4 text-on-surface-variant/60 dark:text-inverse-on-surface/70 font-label-sm">
          <span>Supports: PDF, JPG, PNG</span>
          <span>•</span>
          <span>Max 50MB</span>
        </div>
      </div>
    </div>
  );
}
