import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import WhyUsPanel from "@/components/WhyUsPanel";
import { ShieldCheck, Target, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Aixoniq Technologies | AI & Software Company India",
  description:
    "Aixoniq Technologies is an AI company and IT company in India building software, ERP, and cybersecurity systems. Learn our mission, values, and story.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: Target, title: "Outcome first", detail: "We scope every engagement around a measurable result, not a feature checklist." },
  { icon: ShieldCheck, title: "Security by default", detail: "Every system is reviewed for security at design time, not patched after launch." },
  { icon: Compass, title: "Honest timelines", detail: "We tell you the real date, and we tell you early if it moves." },
  { icon: Sparkles, title: "AI where it earns its place", detail: "We add intelligence where it measurably helps — not as a marketing feature." },
];

const TIMELINE = [
  { year: "Year 1", detail: "Founded as a small studio serving digital agency and government-adjacent clients across Gondia and Nagpur." },
  { year: "Year 2", detail: "Expanded into ERP development for education and healthcare institutions." },
  { year: "Year 3", detail: "Built out AI and cybersecurity practice areas alongside core software development." },
  { year: "Today", detail: "A full-stack technology partner for startups, institutions, and enterprises across India." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="shell pb-20 pt-10 md:pb-28">
        <SectionHeading
          eyebrow="About Aixoniq"
          title="An AI development company built on getting the fundamentals right"
          description="Aixoniq Technologies is a software development company and AI company delivering custom software, ERP platforms, cybersecurity, and cloud computing services — with the same engineers scoping and building every project."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="card">
            <h2 className="font-display text-xl font-semibold text-navy">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              To give startups, institutions, and enterprises technology that
              matches the ambition of Apple, Microsoft, or Accenture — at a
              scope and price that fits where they actually are today.
            </p>
          </div>
          <div className="card">
            <h2 className="font-display text-xl font-semibold text-navy">Our vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              A future where every institution we work with runs on software
              that was designed around its people, not the other way around —
              intelligent by default, secure by design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHeading eyebrow="Core Values" title="What guides how we build" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-border bg-paper p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal/15 to-cyan/10 text-royal ring-1 ring-royal/10">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{v.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <SectionHeading eyebrow="Our Story" title="How Aixoniq got here" />
        <ol className="mt-12 space-y-6 border-l border-border pl-6">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-royal bg-surface" />
              <p className="eyebrow !text-royal">{t.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate">{t.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHeading eyebrow="Why Aixoniq" title="Why clients choose to stay with us" />
          <div className="mt-12">
            <WhyUsPanel limit={5} />
          </div>
        </div>
      </section>

      <CTASection title="Want to work with us?" description="Tell us about your institution or business — we'll tell you honestly if we're the right fit." />
    </>
  );
}
