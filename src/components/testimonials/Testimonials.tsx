import { useEffect, useState } from 'react';
import { testimonials } from '@/data/technologies';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// In production, fetch these from the Supabase `testimonials` table instead
// of the static fallback in src/data/technologies.ts.
export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">10 — Trust</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">What clients say.</h2>
          <div className="config-note">Placeholder quotes — connect to Supabase <code>testimonials</code> table for live content.</div>
        </div>

        <div data-reveal className="mt-14 min-h-[260px]">
          <div className="transition-opacity duration-500">
            <p className="font-display text-[24px] md:text-[44px] leading-[1.2] max-w-[22ch]">"{testimonials[index].quote}"</p>
            <div className="mt-6 font-mono text-xs text-text-dim">— {testimonials[index].name}, {testimonials[index].role}</div>
          </div>
          <div className="flex gap-2.5 mt-9">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-signal' : 'w-2 bg-line'}`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
