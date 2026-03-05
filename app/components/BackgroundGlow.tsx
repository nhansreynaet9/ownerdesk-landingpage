"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Indigo Glow */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-500/25 blur-3xl"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-40px] right-[-10%] h-[480px] w-[480px] rounded-full bg-cyan-400/20 blur-3xl"
      />
    </div>
  );
}
