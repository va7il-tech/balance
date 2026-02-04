export default function InsightsPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Insights</h1>
        <p className="text-sm text-slate-600">
          Calm analytics based on real daily data, not pressure.
        </p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Daily score trend</h2>
          <p className="mt-2 text-sm text-slate-600">
            Show the last 30 days of daily scores.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Languages practice
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Weekly count of language practice days and a notes history.
          </p>
        </div>
      </section>
    </main>
  );
}
