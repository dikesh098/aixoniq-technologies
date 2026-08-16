import { useScrollReveal } from '@/hooks/useScrollReveal';

const nodes = [
  { n: 'INPUT', t: 'Customer Request' },
  { n: 'AI', t: 'Processing' },
  { n: 'AUTOMATION', t: 'Business Action' },
  { n: 'OUTPUT', t: 'Result' },
];

export function Automation() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="automation" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">03 — AI Automation</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">From request <br />to result.</h2>
        </div>
        <div data-reveal className="flex items-center flex-wrap mt-14">
          {nodes.map((node, i) => (
            <div key={node.n} className="contents">
              <div data-cursor="explore" className="flex-1 min-w-[150px] border border-line p-6 font-mono hover:border-signal hover:bg-panel transition-colors duration-300">
                <div className="text-[10px] text-mono tracking-wide">{node.n}</div>
                <div className="font-display text-lg text-text mt-2.5 uppercase">{node.t}</div>
              </div>
              {i < nodes.length - 1 && (
                <div className="w-9 text-center text-signal text-lg flex-shrink-0 max-md:w-full max-md:rotate-90 max-md:py-1.5">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
