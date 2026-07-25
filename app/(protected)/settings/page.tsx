import { getSession } from "@/lib/auth";
import { AccountSettingsForm } from "@/components/AccountSettingsForm";
import { AppearanceToggle } from "@/components/AppearanceToggle";

export default async function SettingsPage() {
  const session = await getSession();
  const name = session!.user.name ?? "";
  const email = session!.user.email ?? "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Navigation summary */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-surface-container-lowest dark:bg-inverse-surface p-6 rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10">
          <div className="mb-6">
            <h2 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface mb-1">Configuration</h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
              Manage your account and privacy preferences.
            </p>
          </div>
          <nav className="space-y-1">
            <a className="flex items-center gap-3 p-3 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md transition-all" href="#account">
              <span className="material-symbols-outlined">manage_accounts</span> Account Settings
            </a>
            <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low dark:bg-inverse-surface/60 text-on-surface-variant dark:text-inverse-on-surface/70 font-label-md text-label-md transition-all" href="#notifications">
              <span className="material-symbols-outlined">notifications_active</span> Notifications
            </a>
            <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low dark:bg-inverse-surface/60 text-on-surface-variant dark:text-inverse-on-surface/70 font-label-md text-label-md transition-all" href="#privacy">
              <span className="material-symbols-outlined">security</span> Privacy &amp; Security
            </a>
            <a className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low dark:bg-inverse-surface/60 text-on-surface-variant dark:text-inverse-on-surface/70 font-label-md text-label-md transition-all" href="#appearance">
              <span className="material-symbols-outlined">palette</span> Appearance
            </a>
          </nav>
        </div>
      </div>

      {/* Right: Settings sections */}
      <div className="lg:col-span-8 space-y-8 pb-10">
        <AccountSettingsForm initialEmail={email} initialName={name} />

        <section className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10" id="notifications">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary dark:text-tertiary-fixed-dim">
              <span className="material-symbols-outlined">notifications_active</span>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Notification Preferences</h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Choose how you receive health updates and reminders.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-4 font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 border-b border-outline-variant/20 dark:border-inverse-on-surface/10 pb-4 px-2">
              <div className="col-span-1">Notification Type</div>
              <div className="text-center">Email</div>
              <div className="text-center">Push</div>
              <div className="text-center">SMS</div>
            </div>
            {[
              { name: "Report Analysis", desc: "AI-generated lab insights" },
              { name: "Doctor Reminders", desc: "Upcoming appointments" },
              { name: "Health Intel Tips", desc: "Personalized wellness tips" },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-4 items-center p-2 hover:bg-surface-container-low dark:bg-inverse-surface/60 transition-colors rounded-xl">
                <div className="col-span-1">
                  <p className="font-label-md text-label-md">{row.name}</p>
                  <p className="text-[11px] text-on-surface-variant dark:text-inverse-on-surface/70">{row.desc}</p>
                </div>
                <div className="flex justify-center"><input className="w-5 h-5" defaultChecked type="checkbox" /></div>
                <div className="flex justify-center"><input className="w-5 h-5" defaultChecked type="checkbox" /></div>
                <div className="flex justify-center"><input className="w-5 h-5" type="checkbox" /></div>
              </div>
            ))}
            <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 pt-2">
              Notification delivery is not yet wired to a backend — these
              toggles are visual placeholders pending the notification
              service.
            </p>
          </div>
        </section>

        <section className="bg-surface-container-lowest dark:bg-inverse-surface p-card-padding rounded-3xl shadow-sm border border-outline-variant/10 dark:border-inverse-on-surface/10" id="privacy">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-error-container/20 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Privacy &amp; Security</h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Control your data and authentication methods.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface-container-low dark:bg-inverse-surface/60 rounded-2xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary dark:text-inverse-primary mt-1">vibration</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Two-Factor Authentication</p>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                    Not yet available — planned for a future release.
                  </p>
                </div>
              </div>
              <input className="w-5 h-5" disabled type="checkbox" />
            </div>
          </div>
        </section>

        <AppearanceToggle />
      </div>
    </div>
  );
}
