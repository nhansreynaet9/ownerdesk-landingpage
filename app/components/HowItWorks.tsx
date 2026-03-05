const STEPS = [
  [
    "01",
    "Set up your business",
    "Create staff accounts, roles, and basic settings in minutes.",
  ],
  [
    "02",
    "Track attendance & sales",
    "Record daily attendance and sales—everything stays organized in one system.",
  ],
  [
    "03",
    "Ask AI for insights",
    "Use natural language to get answers, comparisons, and summaries instantly.",
  ],
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          How it works
        </h2>
        <p className="mt-2 text-white/70">
          Three steps to replace manual reports.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {STEPS.map(([n, t, d]) => (
          <div
            key={String(n)}
            className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 font-extrabold">
              {n}
            </div>
            <div>
              <h3 className="font-bold">{t}</h3>
              <p className="mt-1 text-sm leading-6 text-white/70">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
