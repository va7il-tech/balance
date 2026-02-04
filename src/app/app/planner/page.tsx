export default function PlannerPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Planner</h1>
        <p className="text-sm text-slate-600">
          A calm calendar that supports your weekly result without taking over.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-600">
          Add tasks with date, time, priority, and category. Views include Today,
          Tomorrow, This Week, This Month, and History.
        </p>
      </section>
    </main>
  );
}
