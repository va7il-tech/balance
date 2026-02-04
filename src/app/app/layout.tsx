import Link from "next/link";

const navItems = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/daily", label: "Daily tracker" },
  { href: "/app/planner", label: "Planner" },
  { href: "/app/reviews/weekly", label: "Weekly review" },
  { href: "/app/reviews/monthly", label: "Monthly review" },
  { href: "/app/insights", label: "Insights" },
  { href: "/app/reflection", label: "Reflection" },
  { href: "/app/settings", label: "Settings" }
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-8">
        <aside className="w-56 shrink-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Balance
            </h2>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
