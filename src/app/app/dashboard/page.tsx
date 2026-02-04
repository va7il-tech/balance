export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Your calm overview of rhythm, priorities, and weekly focus.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Today’s score", value: "— / 7" },
          { title: "Current streak", value: "— days" },
          { title: "Weekly average", value: "— / 7" }
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
