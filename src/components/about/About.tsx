import { useScrollReveal } from '@/hooks/useScrollReveal';

const words = [
  { text: 'AI', top: '8%', left: '4%', delay: '0s' },
  { text: 'SOFTWARE', top: '38%', left: '38%', delay: '1.4s' },
  { text: 'DESIGN', top: '6%', left: '58%', delay: '2.6s' },
  { text: 'CLOUD', top: '66%', left: '10%', delay: '3.4s' },
  { text: 'AUTOMATION', top: '72%', left: '56%', delay: '.7s' },
];

export function About() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40 bg-panel">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">08 — About Aixoniq</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">
            We turn ideas into <br />intelligent digital <br />experiences.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 mt-11 items-start">
          <p data-reveal className="text-lg md:text-2xl leading-snug text-text-dim">
            Aixoniq Technologies combines <strong className="text-text font-medium">AI</strong>, software engineering,
            design, and modern cloud technologies to help businesses build products that are faster, smarter, and
            ready for the future.
          </p>
          <div data-reveal className="relative h-44 md:h-80" aria-hidden="true">
            {words.map((w) => (
              <span
                key={w.text}
                style={{ top: w.top, left: w.left, animationDelay: w.delay }}
                className="absolute font-mono text-[13px] tracking-[0.15em] text-text-dim border border-line px-4 py-2 rounded-full animate-[drift_9s_ease-in-out_infinite]"
              >
                {w.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
