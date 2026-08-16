const links = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Solutions' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 bg-void z-[450] flex flex-col justify-center p-10 transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] ${
        open ? '[clip-path:circle(150%_at_92%_5%)]' : '[clip-path:circle(0%_at_92%_5%)]'
      }`}
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="font-display text-[12vw] leading-[1.15] text-text-dim hover:text-signal focus:text-signal block"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
