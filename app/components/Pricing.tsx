"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Simple pricing
        </h2>
        <p className="mt-2 text-white/70">
          Start small. Upgrade when you grow.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 grid gap-3 md:grid-cols-3"
      >
        {/* Starter */}
        <motion.div
          variants={card}
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
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

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 font-extrabold text-slate-950 hover:opacity-95"
          >
            Join waitlist
          </motion.a>
        </motion.div>

        {/* Pro */}
        <motion.div
          variants={card}
          whileHover={{ y: -6, scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative rounded-3xl border border-cyan-300/25 bg-white/10 p-6 shadow-2xl shadow-black/40"
        >
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute right-4 top-4 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-white/90"
          >
            Most popular
          </motion.div>

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

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-4 py-2 font-extrabold text-slate-950 hover:opacity-95"
          >
            Get early access
          </motion.a>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={card}
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
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

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#cta"
            className="mt-5 inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-bold text-white hover:bg-white/10"
          >
            Talk to us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
