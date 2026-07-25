"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ShareModal({
  reportId,
  open,
  onClose,
}: {
  reportId: string;
  open: boolean;
  onClose: () => void;
}) {
  const [recipient, setRecipient] = useState("");
  const [recipientTouched, setRecipientTouched] = useState(false);
  const [includeSummary, setIncludeSummary] = useState(true);
  const [includeOriginal, setIncludeOriginal] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const isValidEmail = EMAIL_REGEX.test(recipient.trim());
  const showFormatWarning = recipientTouched && recipient.trim().length > 0 && !isValidEmail;

  async function send() {
    setRecipientTouched(true);

    if (!recipient.trim()) {
      setError("Enter a recipient email first.");
      return;
    }
    if (!isValidEmail) {
      setError("That doesn't look like a valid email address.");
      return;
    }
    setError(null);
    setSending(true);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportId,
          recipient,
          includeSummary,
          includeOriginal,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Could not send. Please try again.");
        setSending(false);
        return;
      }

      setSent(true);
    } catch {
      setError("Could not send. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  function reset() {
    setSent(false);
    setRecipient("");
    setRecipientTouched(false);
    setError(null);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(11, 28, 48, 0.4)", backdropFilter: "blur(8px)" }}
    >
      <div className="glass-card relative w-full max-w-lg bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl shadow-2xl overflow-hidden">
        {sent ? (
          <div className="flex flex-col items-center justify-center text-center p-10">
            <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-primary dark:text-inverse-primary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-2">
              Report Sent Successfully
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mb-8">
              Your health intelligence has been securely shared with the recipient.
            </p>
            <button
              className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-colors"
              onClick={reset}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">
                  Share Health Intelligence
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                  Securely transmit your data via email.
                </p>
              </div>
              <button
                className="p-2 text-on-surface-variant dark:text-inverse-on-surface/70 hover:bg-surface-container dark:bg-inverse-surface rounded-full transition-colors"
                onClick={onClose}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 uppercase tracking-wider">
                  Recipient Email
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant dark:text-inverse-on-surface/70">
                    alternate_email
                  </span>
                  <input
                    className={`w-full pl-12 pr-4 py-4 bg-surface-container-low dark:bg-inverse-surface/60 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none font-body-md ${
                      showFormatWarning
                        ? "border-error focus:ring-error"
                        : "border-outline-variant/30 dark:border-inverse-on-surface/10 focus:ring-primary"
                    }`}
                    placeholder="you@example.com"
                    type="email"
                    value={recipient}
                    onBlur={() => setRecipientTouched(true)}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
                {showFormatWarning && (
                  <p className="flex items-center gap-1.5 pl-1 font-label-sm text-label-sm text-error">
                    <span className="material-symbols-outlined text-[16px]">error</span>
                    That doesn&apos;t look like a valid email address.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 uppercase tracking-wider">
                  Message Preview
                </label>
                <div className="p-4 bg-surface-container-low dark:bg-inverse-surface/60 border border-outline-variant/30 dark:border-inverse-on-surface/10 rounded-xl">
                  <p className="font-body-md text-body-md italic text-on-surface-variant dark:text-inverse-on-surface/70">
                    &ldquo;Hi, I&apos;m sharing my latest health report from MediBrief for your
                    review.&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 uppercase tracking-wider">
                  Attachments
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl cursor-pointer hover:bg-surface-container-low dark:bg-inverse-surface/60 transition-colors">
                    <span className="font-body-md text-body-md flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary dark:text-tertiary-fixed-dim">psychology</span>
                      Include AI Summary
                    </span>
                    <input
                      checked={includeSummary}
                      className="w-6 h-6 rounded border-outline dark:border-inverse-on-surface/20 text-primary dark:text-inverse-primary focus:ring-primary"
                      type="checkbox"
                      onChange={(e) => setIncludeSummary(e.target.checked)}
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl cursor-pointer hover:bg-surface-container-low dark:bg-inverse-surface/60 transition-colors">
                    <span className="font-body-md text-body-md flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">description</span>
                      Include Original Report
                    </span>
                    <input
                      checked={includeOriginal}
                      className="w-6 h-6 rounded border-outline dark:border-inverse-on-surface/20 text-primary dark:text-inverse-primary focus:ring-primary"
                      type="checkbox"
                      onChange={(e) => setIncludeOriginal(e.target.checked)}
                    />
                  </label>
                </div>
              </div>

              {error && (
                <p className="rounded-xl bg-error-container px-4 py-3 font-label-sm text-label-sm text-on-error-container">
                  {error}
                </p>
              )}

              <div className="pt-4">
                <button
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary text-on-primary rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-60"
                  disabled={sending}
                  onClick={() => send()}
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  {sending ? "Sending…" : "Send via Email"}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/20 dark:border-inverse-on-surface/10 flex items-center gap-3">
              <span className="material-symbols-outlined text-[16px] text-primary dark:text-inverse-primary">encrypted</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70">
                Delivery is logged and routed through your configured sharing
                integration.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
