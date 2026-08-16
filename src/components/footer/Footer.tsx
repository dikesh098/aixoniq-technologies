export function Footer() {
  return (
    <footer className="px-6 md:px-20 pt-14 pb-10">
      <div className="flex justify-between flex-wrap gap-8 pb-10">
        <div>
          <a href="#hero" className="font-display text-lg font-semibold">AIXONIQ</a>
          <p className="text-text-dim text-[13px] mt-3.5 max-w-[32ch]">Intelligent digital products for the next generation.</p>
        </div>
        <div className="flex gap-12 flex-wrap">
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-wide mb-3.5">Company</h4>
            <a href="#about" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">About</a>
            <a href="#work" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">Work</a>
            <a href="#process" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">Process</a>
          </div>
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-wide mb-3.5">Solutions</h4>
            <a href="#services" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">AI &amp; Automation</a>
            <a href="#services" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">Web &amp; Mobile</a>
            <a href="#services" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">Cloud &amp; Design</a>
          </div>
          <div>
            <h4 className="font-mono text-[11px] text-text-dim uppercase tracking-wide mb-3.5">Connect</h4>
            <a href="#contact" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">Contact</a>
            <a href="mailto:hello@aixoniq.tech" className="block text-sm text-text-dim hover:text-signal py-1 transition-colors">hello@aixoniq.tech</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-3 pt-6 border-t border-line font-mono text-[11px] text-mono">
        <span>© {new Date().getFullYear()} Aixoniq Technologies. All rights reserved.</span>
        <span>Building the digital future.</span>
      </div>
    </footer>
  );
}
