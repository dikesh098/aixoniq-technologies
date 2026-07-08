import type { Metadata } from "next";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { SOLUTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "ERP & Enterprise Solutions | Aixoniq Technologies",
  description:
    "Education ERP, hospital ERP, and AI-powered enterprise solutions from Aixoniq Technologies — an ERP development company serving India.",
  alternates: { canonical: "/solutions" },
};

const SOLUTION_FAQS = [
  {
    question: "Can an education ERP integrate with our existing admission process?",
    answer:
      "Yes. We map your current admission and fee workflow first, then build the admission portal and student portal to match it rather than forcing a generic flow.",
  },
  {
    question: "Is the hospital ERP compliant with data protection requirements?",
    answer:
      "We design patient data handling with access controls, audit logs, and encryption in line with applicable data protection practices for healthcare records.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Featured Solutions"
          title="Purpose-built systems for education, healthcare, and operations"
          description="Beyond one-off software development, Aixoniq Technologies packages proven ERP software development into ready-to-adapt solutions."
        />
      </section>

      <section className="pb-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {SOLUTIONS.map((sol) => (
            <div key={sol.category} className="card flex flex-col">
              <h2 className="font-display text-lg font-semibold text-navy">{sol.category}</h2>
              <p className="mt-2 text-sm text-slate">{sol.description}</p>
              <ul className="mt-5 space-y-2.5">
                {sol.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-soft">
                    <Check size={15} className="mt-0.5 shrink-0 text-royal" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={SOLUTION_FAQS} />
      <CTASection title="Have a system you want rebuilt properly?" />
    </>
  );
}
