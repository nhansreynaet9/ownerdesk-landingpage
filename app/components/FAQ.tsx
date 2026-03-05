"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
  [
    "Is OwnerDesk only for big companies?",
    "No—OwnerDesk is designed for SMEs that want something simple and fast.",
  ],
  [
    "What data can the AI answer from?",
    "Attendance, staff lists, and sales records stored in your database (with role-based access).",
  ],
  [
    "Is it web or mobile?",
    "Web-first is fastest for SMEs. Mobile can be added later.",
  ],
  [
    "How is data security handled?",
    "We use access roles/permissions and plan multi-company separation for SaaS.",
  ],
  [
    "Do I need to be technical to use it?",
    "No. You can just ask questions like “Who was late this week?” and get clear answers.",
  ],
  [
    "Can I export reports?",
    "Yes—export is included in paid plans, and more automation is planned.",
  ],
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <motion.section
      id="faq"
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl">
        <motion.h2
          className="text-2xl font-extrabold tracking-tight md:text-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          FAQ
        </motion.h2>
        <motion.p
          className="mt-2 text-white/70"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Quick answers to common questions.
        </motion.p>
      </div>

      <motion.div
        className="mt-6 grid gap-3 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {FAQS.map(([q, a], index) => {
          const isOpen = openItems.includes(q);

          return (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 cursor-pointer"
              onClick={() => toggleItem(q)}
            >
              <div className="flex items-center justify-between">
                <motion.h3
                  className="font-bold text-sm md:text-base"
                  animate={{ color: isOpen ? "#fff" : "rgba(255,255,255,0.9)" }}
                >
                  {q}
                </motion.h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="w-5 h-5 flex items-center justify-center text-white/60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 500, damping: 30 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 500, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="mt-3 text-sm leading-6 text-white/70"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                    >
                      {a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
