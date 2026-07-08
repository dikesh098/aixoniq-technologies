import Link from "next/link";
import { Zap, Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/data";

const FOOTER_SERVICES = SERVICES.slice(0, 6);

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="shell grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-navy">
              <Zap size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold text-ink">Aixoniq Technologies</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            Building Intelligent Futures — AI, software, cybersecurity, and cloud
            systems for institutions and businesses that need it to work the first time.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-ink-muted">
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-cyan-bright" /> aixoniqtechnologies@gmail.com
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={15} className="text-cyan-bright" /> Gondia, Maharashtra, India
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-cyan-bright" /> Available on request via contact form
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-cyan-bright/40 hover:text-cyan-bright"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow-dark mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink-muted hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow-dark mb-4">Services</p>
          <ul className="space-y-2.5">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.title}>
                <Link href="/services" className="text-sm text-ink-muted hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="slash-divider-dark" />

      <div className="shell flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-faint md:flex-row">
        <p>© {new Date().getFullYear()} Aixoniq Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-ink-muted">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink-muted">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
