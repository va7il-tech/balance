import { SignInForm } from "./sign-in-form";

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-6 py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Welcome back</h1>
        <p className="text-sm text-slate-600">
          Sign in to continue your rhythm. A single email keeps this MVP lightweight.
        </p>
      </div>
      <SignInForm />
      <p className="text-center text-xs text-slate-500">
        By signing in you agree to keep your rhythm data private and personal.
      </p>
    </main>
  );
}
