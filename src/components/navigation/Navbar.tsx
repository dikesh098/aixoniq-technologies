import { useEffect, useState } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Solutions' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

interface NavbarProps {
  onToggleMobile: () => void;
  mobileOpen: boolean;
}

export function Navbar({ onToggleMobile, mobileOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 w-full z-[500] flex items-center justify-between px-6 md:px-16 opacity-0 -translate-y-4 transition-[padding,background,backdrop-filter,border-color] duration-400 border-b border-transparent ${
        scrolled ? 'py-4 bg-void/70 backdrop-blur-md border-line' : 'py-7'
      }`}
    >
      <a href="#hero" className="font-display text-lg font-semibold tracking-wide flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_12px_#49F0FF]" />
        AIXONIQ
      </a>

      <ul className="hidden md:flex gap-9">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="magnetic text-sm text-text-dim hover:text-text transition-colors relative group">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <a href="#contact" className="btn btn-primary magnetic hidden md:inline-flex"><span>Let's Talk</span></a>
        <button
          aria-label="Toggle menu"
          onClick={onToggleMobile}
          className="md:hidden relative w-8 h-5 z-[600]"
        >
          <span className={`absolute left-0 top-0 w-full h-px bg-text transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-text transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 bottom-0 w-full h-px bg-text transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
