"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthBackground, AuthFooter } from "@/components/AuthChrome";

export default function SignUpPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        email,
        password,
        confirm_password: confirmPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setLoading(false);
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      // Account was created but auto sign-in failed — send to sign in.
      router.push("/sign-in");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <AuthBackground />

      <main className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-[520px]">
          <div className="glass-card bg-surface-container-lowest dark:bg-inverse-surface rounded-3xl w-full p-card-padding md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface mb-2">
                Create Account
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Join the next generation of clinical intelligence.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 block px-1"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline dark:text-inverse-on-surface/50">
                    <span className="material-symbols-outlined text-body-lg">person</span>
                  </div>
                  <input
                    className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface dark:text-inverse-on-surface"
                    id="fullname"
                    name="fullname"
                    placeholder="Jane Doe"
                    required
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 block px-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline dark:text-inverse-on-surface/50">
                    <span className="material-symbols-outlined text-body-lg">mail</span>
                  </div>
                  <input
                    className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface dark:text-inverse-on-surface"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 block px-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline dark:text-inverse-on-surface/50">
                      <span className="material-symbols-outlined text-body-lg">lock</span>
                    </div>
                    <input
                      className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface dark:text-inverse-on-surface"
                      id="password"
                      minLength={8}
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant dark:text-inverse-on-surface/70 block px-1"
                    htmlFor="confirm_password"
                  >
                    Confirm
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline dark:text-inverse-on-surface/50">
                      <span className="material-symbols-outlined text-body-lg">verified_user</span>
                    </div>
                    <input
                      className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface dark:text-inverse-on-surface"
                      id="confirm_password"
                      minLength={8}
                      name="confirm_password"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-container/5 rounded-2xl p-4 flex gap-4 items-start border border-primary/10">
                <span className="material-symbols-outlined text-primary dark:text-inverse-primary text-[20px] mt-0.5">
                  shield_lock
                </span>
                <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 leading-relaxed">
                  MediBrief encrypts your medical data at rest and in transit.
                  This informational tool does not replace professional
                  medical care.
                </p>
              </div>

              {error && (
                <p className="rounded-xl bg-error-container px-4 py-3 font-label-sm text-label-sm text-on-error-container">
                  {error}
                </p>
              )}

              <button
                className="w-full bg-primary hover:bg-primary-container text-on-primary font-title-lg text-title-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
                disabled={loading}
                type="submit"
              >
                {loading ? "Creating account…" : "Create Account"}
                {!loading && <span className="material-symbols-outlined text-title-lg">arrow_forward</span>}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant dark:border-inverse-on-surface/10 flex flex-col items-center gap-4">
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Already have a MediBrief account?
                <Link className="text-primary dark:text-inverse-primary font-bold hover:underline ml-1" href="/sign-in">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
