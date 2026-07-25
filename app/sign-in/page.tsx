"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthBackground, AuthFooter } from "@/components/AuthChrome";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError(
        result.error === "CredentialsSignin"
          ? "Invalid email or password."
          : result.error
      );
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <AuthBackground />

      <main className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-[440px]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg mb-4 text-on-primary">
              <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">MediBrief</h1>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mt-2">
              Health Intelligence System
            </p>
          </div>

          <div className="glass-card bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant/30 dark:border-inverse-on-surface/10 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <h2 className="font-title-lg text-title-lg text-on-surface dark:text-inverse-on-surface">Welcome back</h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
                Enter your credentials to access your health intelligence dashboard.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase tracking-wider block"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-outline dark:text-inverse-on-surface/50 pointer-events-none">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </span>
                  <input
                    className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-outline-variant dark:border-inverse-on-surface/10 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-outline/50 dark:text-inverse-on-surface/50"
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

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase tracking-wider block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="font-label-md text-label-md text-primary dark:text-inverse-primary hover:underline transition-all"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-outline dark:text-inverse-on-surface/50 pointer-events-none">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </span>
                  <input
                    className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-outline-variant dark:border-inverse-on-surface/10 rounded-xl py-3.5 pl-12 pr-12 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-outline/50 dark:text-inverse-on-surface/50"
                    id="password"
                    name="password"
                    placeholder="••••••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline dark:text-inverse-on-surface/50 hover:text-on-surface dark:text-inverse-on-surface transition-colors"
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  checked={remember}
                  className="h-5 w-5 rounded border-outline-variant dark:border-inverse-on-surface/10 text-primary dark:text-inverse-primary focus:ring-primary transition-all"
                  id="remember"
                  name="remember"
                  type="checkbox"
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label
                  className="ml-3 font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 cursor-pointer"
                  htmlFor="remember"
                >
                  Remember this device for 30 days
                </label>
              </div>

              {error && (
                <p className="rounded-xl bg-error-container px-4 py-3 font-label-sm text-label-sm text-on-error-container">
                  {error}
                </p>
              )}

              <button
                className="w-full bg-primary text-on-primary py-4 px-6 rounded-xl font-title-lg text-title-lg hover:bg-surface-tint active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-60"
                disabled={loading}
                type="submit"
              >
                {loading ? "Signing in…" : "Login to Dashboard"}
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-outline-variant/30" />
              <span className="font-label-sm text-label-sm text-outline dark:text-inverse-on-surface/50 uppercase tracking-widest">
                Authorized Access Only
              </span>
              <div className="h-[1px] flex-grow bg-outline-variant/30" />
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary-container/10 rounded-2xl border border-primary-container/20">
              <span className="material-symbols-outlined text-primary dark:text-inverse-primary text-[20px]">verified_user</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 leading-relaxed">
                This session is protected by encryption in transit. Unauthorized
                access is strictly prohibited under medical privacy laws.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
              New to the MediBrief network?{" "}
              <Link className="font-bold text-primary dark:text-inverse-primary hover:underline ml-1" href="/sign-up">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </main>

      <AuthFooter />
    </div>
  );
}
