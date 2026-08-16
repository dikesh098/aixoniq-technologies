import { useEffect, useRef, useState } from 'react';
import { processSteps } from '@/data/process';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const ref = useScrollReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const steps = trackRef.current.querySelectorAll<HTMLElement>('[data-step]');
    const triggers: ScrollTrigger[] = [];
    steps.forEach((step, i) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: step, start: 'top 60%', end: 'bottom 40%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      );
    });
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section id="process" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">07 — Process</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">A journey with <br />six stages.</h2>
        </div>
        <div ref={trackRef} className="mt-14">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              data-step
              className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-6 py-8 border-t last:border-b border-line items-start"
            >
              <div className={`font-display text-3xl transition-colors duration-400 ${activeIndex === i ? 'text-signal' : 'text-mono'}`}>
                {step.number}
              </div>
              <div>
                <h3 className="text-[22px] md:text-[34px] uppercase mb-2">{step.title}</h3>
                <p className="text-text-dim text-sm max-w-[52ch] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
