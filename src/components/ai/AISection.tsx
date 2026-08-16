import { NeuralNetwork } from './NeuralNetwork';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const concepts = ['Machine Learning', 'Generative AI', 'AI Agents', 'Automation', 'Predictive Analytics', 'Computer Vision', 'NLP'];

export function AISection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id="ai-section" ref={ref} className="section border-t border-line px-6 md:px-20 py-20 md:py-40 bg-panel">
      <div className="max-w-[1400px] mx-auto">
        <div data-reveal className="flex flex-col gap-5 max-w-[900px]">
          <span className="eyebrow">02 — Intelligence Layer</span>
          <h2 className="text-[32px] md:text-[5.4vw] lg:text-[72px] uppercase">Intelligence, <br />engineered.</h2>
        </div>
        <div data-reveal><NeuralNetwork /></div>
        <div data-reveal className="flex flex-wrap gap-2.5 mt-7">
          {concepts.map((c) => (
            <span key={c} className="font-mono text-[11px] uppercase tracking-wide border border-line px-3.5 py-2 rounded-full text-text-dim">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
