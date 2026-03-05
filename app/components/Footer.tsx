// app/components/Footer.tsx
type FooterProps = { year: number };

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
      <p>© {year} OwnerDesk. All rights reserved.</p>
      <div className="flex gap-4">
        <a className="hover:text-white" href="#features">
          Features
        </a>
        <a className="hover:text-white" href="#pricing">
          Pricing
        </a>
        <a className="hover:text-white" href="#cta">
          Contact
        </a>
      </div>
    </footer>
  );
}
