"use client";

import { motion } from "framer-motion";
import UiMock from "./UiMock";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-[1.1fr,0.9fr] md:py-16">
      {/* LEFT */}
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
        >
          🤖 Built for SMEs in Cambodia
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-black tracking-tight md:text-6xl"
        >
          Ask your business data,
          <span className="bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}
            get instant insight.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base leading-7 text-white/75"
        >
          OwnerDesk is an AI-powered workforce & sales intelligence platform.
          Track attendance and sales in one place—then ask questions in natural
          language to get clear answers fast.
        </motion.p>

        <motion.div
          variants={item}
          id="cta"
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <motion.form
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
            className="flex w-full max-w-xl gap-2 rounded-2xl border border-white/10 bg-white/5 p-2"
            action="#"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-extrabold text-slate-950 hover:opacity-95"
            >
              Join waitlist
            </motion.button>
          </motion.form>

          <motion.a
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            href="#features"
            className="text-sm font-semibold text-white/85 hover:text-white"
          >
            See what you get →
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70"
        >
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
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <UiMock />
      </motion.div>
    </section>
  );
}
