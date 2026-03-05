"use client";

import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function HowItWorks() {
  return (
    <section id="how" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          How it works
        </h2>

        <p className="mt-2 text-white/70">
          Three steps to replace manual reports.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 grid gap-3 md:grid-cols-3"
      >
        {STEPS.map(([n, t, d]) => (
          <motion.div
            key={String(n)}
            variants={item}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 font-extrabold"
            >
              {n}
            </motion.div>

            <div>
              <h3 className="font-bold">{t}</h3>

              <p className="mt-1 text-sm leading-6 text-white/70">{d}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
