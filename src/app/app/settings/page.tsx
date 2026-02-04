export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-600">
          Manage profile, timezone, and authentication preferences.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-600">
          Configure your timezone to keep daily records aligned with your rhythm.
        </p>
      </section>
    </main>
  );
}
