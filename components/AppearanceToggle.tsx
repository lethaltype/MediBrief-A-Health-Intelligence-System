"use client";

import { useEffect, useState } from "react";

export function AppearanceToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("medibrief-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("medibrief-theme", next ? "dark" : "light");
  }

  return (
    <section
      className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10"
      id="appearance"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-inverse-primary">
          <span className="material-symbols-outlined">palette</span>
        </div>
        <div>
          <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Appearance</h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
            Choose how MediBrief looks on this device.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-surface-container-low dark:bg-inverse-surface/60 rounded-2xl">
        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-primary dark:text-inverse-primary mt-1">dark_mode</span>
          <div>
            <p className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Dark Mode</p>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
              Switch between light and dark themes.
            </p>
          </div>
        </div>
        <button
          aria-pressed={dark}
          className={`w-12 h-7 rounded-full transition-colors relative ${
            dark ? "bg-primary" : "bg-outline-variant"
          }`}
          onClick={toggle}
        >
          <span
            className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
              dark ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
