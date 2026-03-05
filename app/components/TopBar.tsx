"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false); // md breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-30 mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 backdrop-blur"
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/logo.png"
            alt="OwnerDesk Logo"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <div className="font-semibold tracking-tight text-white">
            OwnerDesk
          </div>
        </a>

        {/* Desktop Nav */}
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

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            View pricing
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#cta"
            className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-extrabold text-slate-950 hover:opacity-95"
          >
            Get early access
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </motion.svg>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* overlay */}
            <motion.div
              className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* panel */}
            <motion.div
              className="fixed left-1/2 top-20 z-30 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/90 p-3 backdrop-blur"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <nav className="flex flex-col gap-1 text-sm">
                {[
                  ["Features", "#features"],
                  ["How it works", "#how"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                ].map(([label, href], i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-white/85 hover:bg-white/10 hover:text-white"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-2 grid gap-2">
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  View pricing
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href="#cta"
                  className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-3 text-center text-sm font-extrabold text-slate-950 hover:opacity-95"
                  onClick={() => setOpen(false)}
                >
                  Get early access
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
