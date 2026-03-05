"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const KPIS = [
  { k: "Sales (MTD)", v: "$4,820", m: "+8% vs last month" },
  { k: "Late arrivals", v: "14", m: "Last 30 days" },
  { k: "Absences", v: "6", m: "Last 30 days" },
];

const ATTENDANCE = [
  {
    t: "Sokha",
    s: "On time",
    d: "08:54",
    c: "bg-cyan-400/15 border-cyan-400/25",
  },
  {
    t: "soulong",
    s: "Late",
    d: "09:18",
    c: "bg-amber-300/15 border-amber-300/25",
  },
  {
    t: "Sreynaet",
    s: "Absent",
    d: "—",
    c: "bg-rose-400/15 border-rose-400/25",
  },
];

const QUICK_ACTIONS = [
  "Top absentees",
  "Most present",
  "Monthly sales summary",
  "Generate report",
];

const BARS = [45, 62, 52, 78, 66, 86];

// Mock conversation data
const CONVERSATIONS = [
  {
    user: "Compare sales this week vs last week.",
    ai: "Sales are up +12%. Top items: Iced Coffee, Noodles. Late arrivals increased in Sales team.",
  },
  {
    user: "Who was late the most in the last 30 days?",
    ai: "Top late staff: sreynaet (6), soulong (4), Lina (3). Want the full list?",
  },
  {
    user: "Show me monthly sales summary",
    ai: "Monthly sales: $4,820. Best day: Friday (+18% vs avg). Top performer: Sokha with $1,240 in sales.",
  },
  {
    user: "Generate attendance report",
    ai: "Attendance rate: 92%. Late arrivals: 14. Absences: 6. Sending PDF to your email...",
  },
];

export default function UiMock() {
  const [messages, setMessages] = useState<
    { text: string; sender: string; id: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [hasStartedChat, setHasStartedChat] = useState(false);

  // Simulate conversation flow
  useEffect(() => {
    if (!hasStartedChat) return;

    const timer = setTimeout(() => {
      const conversation = CONVERSATIONS[currentConversationIndex];

      // USER MESSAGE
      setMessages((prev) => [
        ...prev,
        {
          text: conversation.user,
          sender: "user",
          id: Date.now() + "user",
        },
      ]);

      setIsTyping(true);

      // AI RESPONSE
      setTimeout(() => {
        setIsTyping(false);

        setMessages((prev) => [
          ...prev,
          {
            text: conversation.ai,
            sender: "ai",
            id: Date.now() + "ai",
          },
        ]);

        // NEXT STEP
        if (currentConversationIndex === CONVERSATIONS.length - 1) {
          // WAIT then RESET LOOP
          setTimeout(() => {
            setMessages([]);
            setCurrentConversationIndex(0);
          }, 4000);
        } else {
          setCurrentConversationIndex((prev) => prev + 1);
        }
      }, 1500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentConversationIndex, hasStartedChat]);

  const handleQuickAction = (action: string) => {
    setHasStartedChat(true);
    // Find matching conversation or create generic response
    const conversation = CONVERSATIONS.find((c) =>
      c.user.toLowerCase().includes(action.toLowerCase())
    );

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        text: action,
        sender: "user",
        id: Date.now() + "user",
      },
    ]);

    // Simulate AI typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text:
            conversation?.ai ||
            `Here's the ${action.toLowerCase()} report. Would you like to see more details?`,
          sender: "ai",
          id: Date.now() + "ai",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="mx-auto w-full max-w-xl space-y-6 py-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl"
        />

        <div className="flex items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
          >
            Admin Dashboard
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-1.5 opacity-70"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="h-2.5 w-2.5 rounded-full bg-white/20"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* KPIs Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-3 md:grid-cols-3"
      >
        {KPIS.map((x, i) => (
          <motion.div
            key={x.k}
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-xs text-white/60">{x.k}</p>
            <p className="mt-2 text-xl font-extrabold tracking-tight">{x.v}</p>
            <p className="text-xs text-white/55">{x.m}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Attendance and AI Chat Section */}
      <div className="grid gap-3 md:grid-cols-[0.9fr,1.1fr]">
        {/* Attendance Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-xs font-semibold text-white/70">
              Recent attendance
            </p>
            <span className="text-[11px] text-white/50">Today</span>
          </div>

          <div className="grid grid-cols-3 gap-2 px-4 pb-2 text-[11px] text-white/55">
            <span>Staff</span>
            <span>Status</span>
            <span>Time</span>
          </div>

          {ATTENDANCE.map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 items-center gap-2 border-t border-white/10 px-4 py-3 text-sm"
            >
              <span className="font-semibold">{x.t}</span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${x.c}`}
              >
                {x.s}
              </motion.span>
              <span className="text-white/80">{x.d}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Chat Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2"
            >
              <motion.span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/20">
                🤖
              </motion.span>
              <div>
                <p className="text-sm font-bold leading-tight">OwnerDesk AI</p>
                <p className="text-[11px] text-white/55">
                  Ask anything about attendance & sales
                </p>
              </div>
            </motion.div>
            {/* <motion.span
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.05)",
                  "rgba(34,197,94,0.2)",
                  "rgba(255,255,255,0.05)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/70"
            >
              Connected to DB
            </motion.span> */}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-3 space-y-2 text-sm min-h-[200px]"
          >
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 20 }}
                  className={`w-fit max-w-[92%] ${
                    message.sender === "user" ? "ml-auto" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl px-3 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-indigo-500/25 to-cyan-400/20 text-white/90"
                        : "border border-white/10 bg-slate-950/50 text-white/85"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.03 }}
                      >
                        {message.text.split(" ").map((word, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="inline-block"
                          >
                            {word}{" "}
                          </motion.span>
                        ))}
                      </motion.span>
                    ) : (
                      message.text
                    )}
                  </motion.div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-fit max-w-[92%]"
                >
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2">
                    <motion.div className="flex gap-1" animate="animate">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                          className="w-1 h-1 bg-white/60 rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {messages.length === 0 && !hasStartedChat && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center py-8 text-white/40 text-sm"
              >
                Click any quick action to start chatting with AI
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-3 grid grid-cols-2 gap-2"
          >
            {QUICK_ACTIONS.map((x, i) => (
              <motion.div
                key={x}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleQuickAction(x)}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/80 cursor-pointer"
              >
                {x}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/50 p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex-1 px-2 text-[11px] text-white/50"
            >
              Ask OwnerDesk AI…
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-3 py-1.5 text-[11px] font-extrabold text-slate-950 cursor-pointer"
            >
              Send
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bar Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex h-28 items-end gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2 + i * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(to bottom, #22d3ee, #818cf8)",
              transition: { duration: 0.2 },
            }}
            className="flex-1 rounded-xl bg-gradient-to-b from-cyan-400/90 to-indigo-500/90 cursor-pointer"
          />
        ))}
      </motion.div>

      {/* Extra spacing for scrolling */}
      <div className="h-40" />
    </div>
  );
}
