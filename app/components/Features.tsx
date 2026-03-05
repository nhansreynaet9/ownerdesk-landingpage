const FEATURES = [
  [
    "🕒",
    "Attendance tracking",
    "Punch-in/out logs, late tracking, absences, and weekly summaries.",
  ],
  [
    "🧾",
    "Sales tracking",
    "Record sales by item, quantity, amount, and date—organized and searchable.",
  ],
  [
    "🤖",
    "AI Q&A assistant",
    "Ask questions like “Who is most late?” or “Compare sales by month.”",
  ],
  [
    "📊",
    "Reports & insights",
    "Top late staff, most present, trends, and simple performance snapshots.",
  ],
  [
    "🔐",
    "Roles & permissions",
    "Admin/manager/staff access controls for safer data sharing.",
  ],
  [
    "⚡",
    "Fast setup for SMEs",
    "No spreadsheets, no complicated onboarding—start tracking in minutes.",
  ],
];

export default function Features() {
  return (
    <section id="features" className="py-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Everything you need to run operations
        </h2>
        <p className="mt-2 text-white/70">
          Designed for real-world SME workflows—fast, simple, and AI-powered.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {FEATURES.map(([ico, title, desc]) => (
          <article
            key={String(title)}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-lg">
              {ico}
            </div>
            <h3 className="mt-3 font-bold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-white/70">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
