import UiMock from "./UiMock";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr,0.9fr] md:py-16">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90">
          🤖 Built for SMEs in Cambodia
        </div>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Ask your business data,
          <span className="bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}
            get instant insight.
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
          OwnerDesk is an AI-powered workforce & sales intelligence platform.
          Track attendance and sales in one place—then ask questions in natural
          language to get clear answers fast.
        </p>

        <div
          id="cta"
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <form
            className="flex w-full max-w-xl gap-2 rounded-2xl border border-white/10 bg-white/5 p-2"
            action="#"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-extrabold text-slate-950 hover:opacity-95"
            >
              Join waitlist
            </button>
          </form>

          <a
            href="#features"
            className="text-sm font-semibold text-white/85 hover:text-white"
          >
            See what you get →
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70">
          {[
            "AI answers from your DB",
            "Attendance + Sales in one",
            "Simple reports & insights",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.2)]" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <UiMock />
    </section>
  );
}
