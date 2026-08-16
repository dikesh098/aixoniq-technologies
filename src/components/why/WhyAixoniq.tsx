import { useScrollReveal } from '@/hooks/useScrollReveal';

const principles = [
  { num: '01', title: 'Innovation', desc: "We don't just follow technology. We build with what's next." },
  { num: '02', title: 'Engineering', desc: 'Clean architecture, scalable systems, and reliable technology.' },
  { num: '03', title: 'Design', desc: 'Technology should be powerful and beautiful, never one without the other.' },
  { num: '04', title: 'Impact', desc: 'We focus on measurable business outcomes, not vanity metrics.' },
];

export function WhyAixoniq() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="why" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">06 — Why Aixoniq</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">Four principles, <br />every project.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line mt-14">
          {principles.map((p) => (
            <div key={p.num} data-reveal className="bg-panel p-10 md:p-13">
              <div className="font-mono text-xs text-signal">{p.num}</div>
              <h3 className="text-[28px] md:text-[44px] my-4 uppercase">{p.title}</h3>
              <p className="text-text-dim text-[15px] leading-relaxed max-w-[36ch]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
