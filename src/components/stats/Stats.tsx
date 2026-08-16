import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// NOTE: placeholder metrics — replace with verified figures before launch.
const stats = [
  { count: 50, label: 'Projects' },
  { count: 20, label: 'Clients' },
  { count: 10, label: 'Technologies' },
];

function Counter({ target }: { target: number }) {
  const elRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!elRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: elRef.current, start: 'top 85%', once: true,
      onEnter: () => setStarted(true),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!started || !elRef.current) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.6, ease: 'power2.out',
      onUpdate: () => { if (elRef.current) elRef.current.textContent = `${Math.round(obj.v)}+`; },
    });
  }, [started, target]);

  return <div ref={elRef} className="font-display text-[40px] md:text-[64px] text-signal">0</div>;
}

export function Stats() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="stats" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">09 — By The Numbers</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">Digital possibilities, <br />always on.</h2>
          <div className="config-note">Placeholder metrics — swap for verified figures before launch.</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line mt-14">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="bg-panel p-8 md:p-10">
              <Counter target={s.count} />
              <div className="font-mono text-[11px] uppercase tracking-wide text-text-dim mt-2.5">{s.label}</div>
            </div>
          ))}
          <div data-reveal className="bg-panel p-8 md:p-10">
            <div className="font-display text-[40px] md:text-[64px] text-signal">24/7</div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-text-dim mt-2.5">Digital Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
