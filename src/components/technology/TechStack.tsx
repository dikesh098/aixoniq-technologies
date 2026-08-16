import { technologies } from '@/data/technologies';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TechStack() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="stack" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">05 — Technology</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">Built on a modern <br />stack.</h2>
        </div>
        <div data-reveal className="flex flex-wrap gap-2.5 mt-11">
          {technologies.map((t) => (
            <span key={t} className="font-mono text-[11px] uppercase tracking-wide border border-line px-3.5 py-2 rounded-full text-text-dim">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
