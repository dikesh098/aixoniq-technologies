import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { PORTFOLIO, TECH_STACK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | Aixoniq Technologies Case Studies",
  description:
    "See recent projects from Aixoniq Technologies, a software development company delivering retail, healthcare, and digital service platforms.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Portfolio", path: "/portfolio" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies from retail, healthcare, and digital services"
          description="A sample of recent custom software development and platform work."
        />
      </section>

      <section className="pb-20">
        <div className="shell grid gap-6 md:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <article key={p.title} className="card overflow-hidden !p-0">
              <div
                className="flex h-28 items-end p-5"
                style={{
                  background: [
                    "linear-gradient(135deg,#0B1B3B,#2451FF)",
                    "linear-gradient(135deg,#0E7C90,#22D3EE)",
                    "linear-gradient(135deg,#1533A8,#4A6CFF)",
                  ][i % 3],
                }}
              >
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <div className="p-7">
                <h2 className="font-display text-lg font-semibold text-navy">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-royal/10 px-2.5 py-1 text-xs font-medium text-royal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="shell">
          <SectionHeading eyebrow="Technologies" title="The stack behind these projects" />
          <div className="mt-8 flex flex-wrap gap-3">
            {TECH_STACK.map((t) => (
              <span key={t} className="rounded-full border border-border bg-paper px-4 py-2 text-sm font-medium text-navy-soft">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want a project like this?" />
    </>
  );
}

