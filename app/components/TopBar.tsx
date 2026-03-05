import Image from "next/image";

export default function TopBar() {
  return (
    <header className="sticky top-3 z-20 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 backdrop-blur">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="OwnerDesk Logo"
          width={36}
          height={36}
          className="rounded-xl"
        />
        <div className="font-semibold tracking-tight">OwnerDesk</div>
      </div>

      <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
        <a className="hover:text-white" href="#features">
          Features
        </a>
        <a className="hover:text-white" href="#how">
          How it works
        </a>
        <a className="hover:text-white" href="#pricing">
          Pricing
        </a>
        <a className="hover:text-white" href="#faq">
          FAQ
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#pricing"
          className="hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 md:inline-flex"
        >
          View pricing
        </a>
        <a
          href="#cta"
          className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-extrabold text-slate-950 hover:opacity-95"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
