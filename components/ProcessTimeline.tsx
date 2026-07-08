"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-7">
      {PROCESS.map((p, i) => (
        <motion.li
          key={p.step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="bg-surface p-6"
        >
          <span className="font-mono text-xs text-royal">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-3 font-display text-base font-semibold text-navy">{p.step}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate">{p.detail}</p>
        </motion.li>
      ))}
    </ol>
  );
}
