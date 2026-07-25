"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export function AccountMenu({
  userName,
  userTag,
}: {
  userName: string;
  userTag?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-3 hover:bg-surface-container-low dark:bg-inverse-surface/60 p-1 pr-3 rounded-full transition-all"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden bg-surface-container-highest dark:bg-inverse-surface flex items-center justify-center text-on-surface-variant dark:text-inverse-on-surface/70">
          <span className="material-symbols-outlined text-[20px]">person</span>
        </div>
        <div className="hidden md:flex flex-col items-start">
          <span className="font-label-md text-on-surface dark:text-inverse-on-surface">{userName}</span>
          {userTag && <span className="text-[10px] text-on-surface-variant dark:text-inverse-on-surface/70">{userTag}</span>}
        </div>
        <span className="material-symbols-outlined text-on-surface-variant dark:text-inverse-on-surface/70">expand_more</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest dark:bg-inverse-surface rounded-2xl shadow-lg border border-outline-variant/20 dark:border-inverse-on-surface/10 py-2 z-50">
          <div className="px-4 py-2 border-b border-outline-variant/10 dark:border-inverse-on-surface/10 mb-1">
            <p className="text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 uppercase tracking-wider">Account</p>
          </div>
          <Link
            className="flex items-center gap-3 px-4 py-2 text-body-md text-on-surface dark:text-inverse-on-surface hover:bg-surface-container-low dark:bg-inverse-surface/60 transition-colors"
            href="/settings"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            Profile Settings
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-2 text-body-md text-on-surface dark:text-inverse-on-surface hover:bg-surface-container-low dark:bg-inverse-surface/60 transition-colors"
            href="/settings"
          >
            <span className="material-symbols-outlined text-[20px]">security</span>
            Privacy &amp; Security
          </Link>
          <div className="h-[1px] bg-outline-variant/10 my-1" />
          <button
            className="w-full flex items-center gap-3 px-4 py-2 text-body-md text-error hover:bg-error-container/10 transition-colors"
            onClick={() => signOut({ callbackUrl: "/sign-in" })}
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
