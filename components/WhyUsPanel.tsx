"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_US } from "@/lib/data";

export default function WhyUsPanel({ limit }: { limit?: number }) {
  const items = limit ? WHY_US.slice(0, limit) : WHY_US;
  const [first, ...rest] = items;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* Left: anchor stat + lead reason, visually distinct from the list */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-void p-9"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(36,81,255,0.35),transparent)]" />
        <div className="absolute -left-1/4 top-0 h-full w-1/2 -rotate-12 bg-beam opacity-20 animate-slash" />
        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-bright">01</span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-white">{first.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{first.detail}</p>
        </div>
      </motion.div>

      {/* Right: dense checklist rather than repeated boxed cards */}
      <ul className="divide-y divide-border">
        {rest.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex gap-4 py-5"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
              <Check size={13} strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
