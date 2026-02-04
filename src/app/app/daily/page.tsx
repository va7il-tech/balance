export default function DailyTrackerPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Daily tracker</h1>
        <p className="text-sm text-slate-600">
          A two-minute checkpoint to keep your rhythm calm and intentional.
        </p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Morning checkpoint</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Wake time</li>
            <li>No messenger for 45 minutes</li>
            <li>3 priorities written</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Evening checkpoint</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Shutdown done + notes</li>
            <li>Sport done + duration</li>
            <li>Reading, English, and language practice notes</li>
            <li>“Said no to” reflection</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
