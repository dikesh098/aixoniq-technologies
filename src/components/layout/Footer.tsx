import Link from 'next/link';
import { Zap, Twitter, Linkedin, Instagram, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SITE, SERVICES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display text-white font-800 text-base" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}>
                  Aixoniq
                </span>
                <p className="text-[9px] text-white/30 leading-none" style={{ fontFamily: 'var(--font-jetbrains)', letterSpacing: '0.12em' }}>
                  TECHNOLOGIES
                </p>
              </div>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
              Building Intelligent Futures. We help businesses accelerate growth through AI, cybersecurity, and intelligent technology solutions.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {SITE.phone}
              </a>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5" />
                {SITE.address}
              </div>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: SITE.socials.twitter, label: 'Twitter' },
                { icon: Linkedin, href: SITE.socials.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: SITE.socials.instagram, label: 'Instagram' },
                { icon: Github, href: SITE.socials.github, label: 'GitHub' },
                { icon: Youtube, href: SITE.socials.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-white/40 hover:text-white/80 transition-colors">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Industries', href: '/industries' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Testimonials', href: '/testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h3 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Legal
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl border border-white/8 bg-white/2">
              <p className="text-xs text-white/50 mb-3">Ready to get started?</p>
              <Link href="/contact" className="btn-primary text-xs py-2 px-4 w-full justify-center">
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} Aixoniq Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            AI. Innovation. Impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
