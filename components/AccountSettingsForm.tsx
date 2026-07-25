"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AccountSettingsForm({
  initialName,
  initialEmail,
}: {
  initialName: string;
  initialEmail: string;
}) {
  const router = useRouter();
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function saveProfile() {
    setSaving(true);
    setMessage(null);
    const res = await fetch("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    setSaving(false);

    if (!res.ok) {
      setMessage({ type: "error", text: data.error ?? "Could not save changes." });
      return;
    }
    setMessage({ type: "success", text: "Profile updated." });
    router.refresh();
  }

  return (
    <section
      className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10"
      id="account"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary dark:text-secondary-fixed-dim">
          <span className="material-symbols-outlined">account_circle</span>
        </div>
        <div>
          <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Account Settings</h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
            Update your primary login information.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 px-1">
              Full Name
            </label>
            <input
              className="w-full px-4 py-3 bg-surface-container-low dark:bg-inverse-surface/60 border-none rounded-xl focus:ring-2 focus:ring-primary text-body-md font-body-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 px-1">
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 bg-surface-container-low dark:bg-inverse-surface/60 border-none rounded-xl focus:ring-2 focus:ring-primary text-body-md font-body-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {message && (
          <p
            className={`rounded-xl px-4 py-3 font-label-sm text-label-sm ${
              message.type === "success"
                ? "bg-tertiary-fixed/20 text-on-tertiary-fixed-variant"
                : "bg-error-container text-on-error-container"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="flex justify-end pt-4">
          <button
            className="px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:shadow-xl transition-all disabled:opacity-60"
            disabled={saving}
            onClick={saveProfile}
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </section>
  );
}
