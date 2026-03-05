export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-24 left-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute top-[-40px] right-[-10%] h-[480px] w-[480px] rounded-full bg-cyan-400/20 blur-3xl" />
    </div>
  );
}
