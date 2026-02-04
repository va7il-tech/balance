"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const trimmedEmail = email.trim();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await signIn("credentials", {
        email: trimmedEmail,
        redirect: false,
        callbackUrl: "/app/dashboard"
      });

      if (response?.error || !response?.ok) {
        setStatus("error");
        return;
      }

      setStatus("idle");
      router.push(response.url ?? "/app/dashboard");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <label className="text-sm font-medium text-slate-700" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === "error") {
            setStatus("idle");
          }
        }}
        className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
        placeholder="you@example.com"
      />
      <button
        type="submit"
        disabled={status === "loading" || trimmedEmail.length === 0}
        className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Signing in..." : "Sign in"}
      </button>
      {status === "error" ? (
        <p className="mt-3 text-xs text-rose-500" role="status" aria-live="polite">
          Sign in failed. Please try again.
        </p>
      ) : null}
    </form>
  );
}
