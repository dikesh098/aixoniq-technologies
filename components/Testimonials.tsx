"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.figure
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-void p-9 lg:row-span-2"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(14,165,196,0.28),transparent)]" />
        <div className="relative flex h-full flex-col">
          <Quote className="text-cyan-bright/50" size={32} />
          <blockquote className="mt-5 flex-1 text-balance font-display text-xl font-medium leading-snug text-white">
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-royal-bright to-cyan-bright text-sm font-semibold text-white">
              {initials(featured.name)}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-white">{featured.name}</p>
              <p className="text-ink-muted">{featured.org}</p>
            </div>
          </figcaption>
        </div>
      </motion.figure>

      {rest.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="card"
        >
          <blockquote className="text-[15px] leading-relaxed text-navy-soft">“{t.quote}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal/10 text-xs font-semibold text-royal">
              {initials(t.name)}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-navy">{t.name}</p>
              <p className="text-slate">{t.org}</p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
