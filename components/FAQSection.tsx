"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

export default function FAQSection({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="shell py-20 md:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <SectionHeading eyebrow="FAQ" title={title} align="center" className="mx-auto" />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqs.map((faq, i) => (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-navy">{faq.question}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-slate transition-transform duration-300",
                  openIndex === i && "rotate-180 text-royal"
                )}
              />
            </button>
            <div
              className={cn(
                "grid px-6 text-sm leading-relaxed text-slate transition-all duration-300",
                openIndex === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
