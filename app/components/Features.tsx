"use client";

import { motion } from "framer-motion";

const FEATURES: [string, string, string][] = [
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Features() {
  return (
    <section id="features" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Everything you need to run operations
        </h2>
        <p className="mt-2 text-white/70">
          Designed for real-world SME workflows—fast, simple, and AI-powered.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 grid gap-3 md:grid-cols-3"
      >
        {FEATURES.map(([ico, title, desc]) => (
          <motion.article
            key={title}
            variants={item}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-lg"
            >
              {ico}
            </motion.div>

            <h3 className="mt-3 font-bold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-white/70">{desc}</p>

            {/* subtle hover glow */}
            <div className="pointer-events-none mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
