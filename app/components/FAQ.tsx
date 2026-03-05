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
  return (
    <section id="faq" className="py-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          FAQ
        </h2>
        <p className="mt-2 text-white/70">Quick answers.</p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {FAQS.map(([q, a]) => (
          <details
            key={q}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <summary className="cursor-pointer list-none font-bold">
              {q}
            </summary>
            <p className="mt-2 text-sm leading-6 text-white/70">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
