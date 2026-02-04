export default function WeeklyReviewPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Weekly review</h1>
        <p className="text-sm text-slate-600">
          One weekly checkpoint to keep urgency from turning into chaos.
        </p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Main result</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track the one result that made the week meaningful.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Not doing list</h2>
          <p className="mt-2 text-sm text-slate-600">
            Keep at least three boundaries that protected your rhythm.
          </p>
        </div>
      </section>
    </main>
  );
}
