"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/reports", label: "Reports", icon: "description" },
  { href: "/history", label: "History", icon: "history" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export function SideNavRail({
  userName,
  memberSince,
}: {
  userName: string;
  memberSince?: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface dark:bg-inverse-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col py-gutter items-center overflow-hidden z-50 group">
      <div className="mb-10 flex items-center w-full px-6 gap-4">
        <div className="min-w-[32px] h-[32px] bg-primary rounded-lg flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined text-[20px]">medical_services</span>
        </div>
        <span className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          MediBrief
        </span>
      </div>

      <nav className="flex flex-col w-full gap-2 px-3">
        {NAV_ITEMS.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              className={
                active
                  ? "flex items-center gap-4 py-3 px-3 rounded-xl border-l-4 border-primary text-primary dark:text-inverse-primary bg-primary-container/10 transition-all duration-300"
                  : "flex items-center gap-4 py-3 px-3 rounded-xl text-on-surface-variant dark:text-inverse-on-surface/70 opacity-70 hover:bg-surface-container-high dark:bg-inverse-surface transition-all duration-300"
              }
              href={item.href}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
        <button
          className="flex items-center gap-4 py-3 px-3 rounded-xl text-error opacity-70 hover:bg-error-container/10 transition-all duration-300"
          onClick={() => signOut({ callbackUrl: "/sign-in" })}
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Sign Out
          </span>
        </button>
      </nav>

      <div className="mt-auto w-full px-6 group-hover:px-4 transition-all">
        <div className="flex items-center gap-3 py-4 border-t border-outline-variant/30 dark:border-inverse-on-surface/10">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-highest dark:bg-inverse-surface flex items-center justify-center text-on-surface-variant dark:text-inverse-on-surface/70">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
          <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="font-label-md text-on-surface dark:text-inverse-on-surface truncate">{userName}</span>
            {memberSince && (
              <span className="text-[10px] text-on-surface-variant dark:text-inverse-on-surface/70">{memberSince}</span>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
