"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

/**
 * Icon components can't be passed as serialized props from a Server
 * Component, so this client component reads directly from the data
 * module and is filtered here via plain string/number props instead.
 */
export default function ServiceGrid({
  limit,
  group,
}: {
  limit?: number;
  group?: string;
}) {
  let services = SERVICES;
  if (group) services = services.filter((s) => s.group === group);
  if (limit) services = services.slice(0, limit);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
            className="card group relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] scale-x-0 bg-gradient-to-r from-royal to-cyan-bright transition-transform duration-300 group-hover:scale-x-100" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal/15 to-cyan/10 text-royal ring-1 ring-royal/10">
              <Icon size={21} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-navy">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
