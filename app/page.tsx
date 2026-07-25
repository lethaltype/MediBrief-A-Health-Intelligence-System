import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function SplashPage() {
  const session = await getSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background dark:bg-inverse-surface px-6 text-center">
      <div className="floating mb-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
          <span className="material-symbols-outlined text-4xl">health_metrics</span>
        </div>
      </div>
      <h1 className="font-headline-lg-mobile text-on-background dark:text-inverse-on-surface sm:font-headline-lg">
        MediBrief
      </h1>
      <p className="mt-3 max-w-md font-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
        Understand your medical reports in plain language. Upload, review,
        compare, and share &mdash; securely.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/sign-in"
          className="rounded-full bg-primary px-6 py-3 font-label-md text-on-primary"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="rounded-full border border-outline-variant dark:border-inverse-on-surface/10 px-6 py-3 font-label-md text-on-surface dark:text-inverse-on-surface"
        >
          Create Account
        </Link>
      </div>
    </main>
  );
}
