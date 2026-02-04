import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Balance
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
          Build a calm daily rhythm, not another to-do list.
        </h1>
        <p className="text-lg text-slate-600">
          Balance is a personal rhythm & self-control platform. It centers on three
          priorities, intentional “not doing,” and a short daily checkpoint that keeps
          you grounded.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Daily rhythm",
            description: "2-minute daily tracker that keeps chaos out."
          },
          {
            title: "Weekly clarity",
            description: "Review what worked, what broke rhythm, and what you won’t do."
          },
          {
            title: "Calm insights",
            description: "See patterns without pressure, guilt, or hustle language."
          }
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
          </div>
        ))}
      </section>
      <div>
        <Link
          className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          href="/auth/sign-in"
        >
          Start with today’s rhythm
        </Link>
      </div>
    </main>
  );
}
