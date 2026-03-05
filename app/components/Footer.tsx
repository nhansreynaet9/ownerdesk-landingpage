"use client";

import { motion } from "framer-motion";

type FooterProps = { year: number };

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Footer({ year }: FooterProps) {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row"
    >
      <motion.p variants={item}>
        © {year} OwnerDesk. All rights reserved.
      </motion.p>

      <motion.div variants={container} className="flex gap-4">
        <motion.a
          variants={item}
          whileHover={{ scale: 1.08, color: "#ffffff" }}
          href="#features"
        >
          Features
        </motion.a>

        <motion.a
          variants={item}
          whileHover={{ scale: 1.08, color: "#ffffff" }}
          href="#pricing"
        >
          Pricing
        </motion.a>

        <motion.a
          variants={item}
          whileHover={{ scale: 1.08, color: "#ffffff" }}
          href="#cta"
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
