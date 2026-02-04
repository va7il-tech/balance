import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ReflectionPage() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    return (
      <main className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">Reflection table</h1>
          <p className="text-sm text-slate-600">
            Sign in to keep your reflection rows private and editable.
          </p>
        </header>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      reflections: {
        orderBy: { createdAt: "asc" }
      }
    }
  });

  const rows = user?.reflections ?? [];

  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Reflection table</h1>
        <p className="text-sm text-slate-600">
          Compare without shame. This is awareness, not pressure.
        </p>
      </header>
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3">Person</th>
              <th className="px-4 py-3">Languages (level &amp; usage)</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr className="border-t border-slate-200">
                <td className="px-4 py-6 text-slate-600" colSpan={2}>
                  Add rows to compare calmly and keep the focus on awareness.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.label}</td>
                  <td className="px-4 py-3 text-slate-600">{row.note}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
