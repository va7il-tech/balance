export default function MonthlyReviewPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Monthly review</h1>
        <p className="text-sm text-slate-600">
          Look for patterns and decide calmly how next month should feel.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-600">
          Monthly insights include average daily score, trend chart, and habit
          compliance percentages.
        </p>
      </section>
    </main>
  );
}
