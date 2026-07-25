import { AccountMenu } from "@/components/AccountMenu";

export function TopAppBar({
  userName,
  userTag,
}: {
  userName: string;
  userTag?: string;
}) {
  return (
    <header className="glass-card sticky top-0 z-40 flex justify-between items-center px-gutter py-4 w-full shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant dark:text-inverse-on-surface/70 text-[20px]">
            search
          </span>
          <input
            className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary transition-all"
            placeholder="Search reports, health data, or labs..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-on-surface-variant dark:text-inverse-on-surface/70 hover:bg-surface-container-low dark:bg-inverse-surface/60 p-2 rounded-full transition-all">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
        </button>
        <button className="text-on-surface-variant dark:text-inverse-on-surface/70 hover:bg-surface-container-low dark:bg-inverse-surface/60 p-2 rounded-full transition-all">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="h-8 w-[1px] bg-outline-variant/40 mx-2" />
        <AccountMenu userName={userName} userTag={userTag} />
      </div>
    </header>
  );
}
