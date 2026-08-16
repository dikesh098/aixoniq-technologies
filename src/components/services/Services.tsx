import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px] mb-14">
          <span className="eyebrow">01 — What We Build</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">
            An ecosystem, <br />not a service list.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {services.map((s) => (
            <div
              key={s.id}
              data-reveal
              data-cursor="explore"
              className="group relative bg-panel hover:bg-panel-2 transition-colors duration-300 p-9 overflow-hidden"
            >
              <div className="absolute w-36 h-36 rounded-full -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-lg bg-[radial-gradient(circle,rgba(73,240,255,0.35),transparent_70%)]" />
              <div className="font-mono text-[11px] text-mono">{String(s.order_index).padStart(2, '0')}</div>
              <h3 className="text-xl mt-14 mb-3 uppercase">{s.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
