import { useState } from 'react';
import { projects } from '@/data/technologies';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Work() {
  const ref = useScrollReveal<HTMLElement>();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">04 — Featured Work</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">Selected case <br />studies.</h2>
        </div>

        <div data-reveal className="flex flex-col mt-14">
          {projects.map((p) => {
            const isOpen = expanded === p.n;
            return (
              <div
                key={p.n}
                data-cursor="view"
                onClick={() => setExpanded(isOpen ? null : p.n)}
                className="group cursor-pointer border-t border-line last:border-b py-11 grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1.4fr_1fr_auto] items-center gap-6"
              >
                <div className="font-mono text-mono text-sm">{p.n}</div>
                <h3 className="text-[24px] md:text-[44px] uppercase transition-transform duration-400 group-hover:translate-x-3 group-hover:text-signal">
                  {p.title}
                </h3>
                <div className="hidden md:block font-mono text-xs text-text-dim uppercase tracking-wide">{p.cat}</div>
                <div className="text-xl text-signal opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">↗</div>

                <div className={`col-span-full overflow-hidden transition-[max-height] duration-500 ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-7">
                    <div>
                      <h4 className="font-mono text-[11px] text-signal uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-sm text-text-dim leading-relaxed">{p.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[11px] text-signal uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-sm text-text-dim leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[11px] text-signal uppercase tracking-wide mb-2">Technologies</h4>
                      <p className="text-sm text-text-dim leading-relaxed">{p.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
