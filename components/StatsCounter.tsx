"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold tracking-tight text-white md:text-6xl">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-panel py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(36,81,255,0.12),transparent)]" />
      <div className="shell relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative text-center md:border-l md:border-white/[0.06] md:first:border-l-0"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mx-auto mt-3 max-w-[10rem] text-[11px] uppercase tracking-[0.1em] leading-snug text-ink-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
