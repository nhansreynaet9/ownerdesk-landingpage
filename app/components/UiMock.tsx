const KPIS = [
  { k: "Sales (MTD)", v: "$4,820", m: "+8% vs last month" },
  { k: "Late arrivals", v: "14", m: "Last 30 days" },
  { k: "Absences", v: "6", m: "Last 30 days" },
];

const ATTENDANCE = [
  {
    t: "Sokha",
    s: "On time",
    d: "08:54",
    c: "bg-cyan-400/15 border-cyan-400/25",
  },
  {
    t: "Dara",
    s: "Late",
    d: "09:18",
    c: "bg-amber-300/15 border-amber-300/25",
  },
  {
    t: "Sreynaet",
    s: "Absent",
    d: "—",
    c: "bg-rose-400/15 border-rose-400/25",
  },
];

const QUICK_ACTIONS = [
  "Top absentees",
  "Most present",
  "Monthly sales summary",
  "Generate report",
];

const BARS = [45, 62, 52, 78, 66, 86];

export default function UiMock() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />

        <div className="flex items-center justify-between">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
            Admin Dashboard
          </div>
          <div className="flex gap-1.5 opacity-70">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {KPIS.map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-xs text-white/60">{x.k}</p>
              <p className="mt-2 text-xl font-extrabold tracking-tight">
                {x.v}
              </p>
              <p className="text-xs text-white/55">{x.m}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[0.9fr,1.1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-xs font-semibold text-white/70">
                Recent attendance
              </p>
              <span className="text-[11px] text-white/50">Today</span>
            </div>

            <div className="grid grid-cols-3 gap-2 px-4 pb-2 text-[11px] text-white/55">
              <span>Staff</span>
              <span>Status</span>
              <span>Time</span>
            </div>

            {ATTENDANCE.map((x) => (
              <div
                key={x.t}
                className="grid grid-cols-3 items-center gap-2 border-t border-white/10 px-4 py-3 text-sm"
              >
                <span className="font-semibold">{x.t}</span>
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${x.c}`}
                >
                  {x.s}
                </span>
                <span className="text-white/80">{x.d}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/20">
                  🤖
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight">
                    OwnerDesk AI
                  </p>
                  <p className="text-[11px] text-white/55">
                    Ask anything about attendance & sales
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/70">
                Connected to DB
              </span>
            </div>

            <div className="mt-3 space-y-2 text-sm">
              <div className="w-fit max-w-[92%] rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white/85">
                Compare sales this week vs last week.
              </div>
              <div className="ml-auto w-fit max-w-[92%] rounded-2xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/20 px-3 py-2 text-white/90">
                Sales are up <span className="font-extrabold">+12%</span>. Top
                items: Iced Coffee, Noodles. Late arrivals increased in Sales
                team.
              </div>

              <div className="w-fit max-w-[92%] rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white/85">
                Who was late the most in the last 30 days?
              </div>
              <div className="ml-auto w-fit max-w-[92%] rounded-2xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/20 px-3 py-2 text-white/90">
                Top late staff: <span className="font-semibold">Dara (6)</span>,
                Sokha (4), Lina (3). Want the full list?
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {QUICK_ACTIONS.map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/80"
                >
                  {x}
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/50 p-2">
              <div className="flex-1 px-2 text-[11px] text-white/50">
                Ask OwnerDesk AI…
              </div>
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-1.5 text-[11px] font-extrabold text-slate-950">
                Send
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex h-28 items-end gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-xl bg-gradient-to-b from-cyan-400/90 to-indigo-500/90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
