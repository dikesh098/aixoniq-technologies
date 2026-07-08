import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve | Aixoniq Technologies",
  description:
    "Aixoniq Technologies delivers software for education, healthcare, government, finance, retail, and more across India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Industries"
          title="Software shaped by how each industry actually works"
          description="A generic system fits no one well. Here's how we adapt for the sectors we serve most."
        />
      </section>

      <section className="pb-24">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="card">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal/15 to-cyan/10 text-royal ring-1 ring-royal/10">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-navy">{ind.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{ind.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection title="Don't see your industry?" description="We scope new domains regularly — tell us what you run." />
    </>
  );
}
