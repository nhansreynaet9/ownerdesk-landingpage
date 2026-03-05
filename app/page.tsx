import BackgroundGlow from "./components/BackgroundGlow";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-white font-[montserrat]">
      <BackgroundGlow />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <TopBar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Footer year={year} />
      </div>
    </main>
  );
}
