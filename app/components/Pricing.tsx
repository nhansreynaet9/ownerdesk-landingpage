export default function Pricing() {
  return (
    <section id="pricing" className="py-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Simple pricing
        </h2>
        <p className="mt-2 text-white/70">
          Start small. Upgrade when you grow.
        </p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {/* Starter */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-bold">Starter</h3>
          <p className="mt-2 text-3xl font-black">
            Free{" "}
            <span className="text-sm font-semibold text-white/60">
              for 3 months
            </span>
          </p>
          <p className="mt-1 text-sm text-white/60">
            Then <span className="font-bold text-white">$5</span>/mo
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Up to 5 staff</li>
            <li>• Attendance tracking</li>
            <li>• Basic sales records</li>
            <li>• Limited AI queries</li>
          </ul>

          <a
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 font-extrabold text-slate-950"
          >
            Join waitlist
          </a>
        </div>

        {/* Pro */}
        <div className="relative rounded-3xl border border-cyan-300/25 bg-white/10 p-6 shadow-2xl shadow-black/40">
          <div className="absolute right-4 top-4 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-white/90">
            Most popular
          </div>
          <h3 className="font-bold">Pro</h3>
          <p className="mt-2 text-3xl font-black">
            $19{" "}
            <span className="text-sm font-semibold text-white/60">/ mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Up to 50 staff</li>
            <li>• Attendance + sales reports</li>
            <li>• AI insights & comparisons</li>
            <li>• Export data</li>
          </ul>
          <a
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 font-extrabold text-slate-950"
          >
            Get early access
          </a>
        </div>

        {/* Team */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-bold">Team</h3>
          <p className="mt-2 text-3xl font-black">
            $49{" "}
            <span className="text-sm font-semibold text-white/60">/ mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Unlimited staff</li>
            <li>• Multi-role access</li>
            <li>• Advanced analytics</li>
            <li>• Priority support</li>
          </ul>
          <a
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-bold text-white hover:bg-white/10"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
