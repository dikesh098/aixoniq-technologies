import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { SERVICES, SERVICE_GROUPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "SEO Related Services, Software Development & AI Services | Aixoniq Technologies",
  description:
    "Explore SEO related services, AI, custom software, ERP, cybersecurity, and cloud computing services from Aixoniq Technologies — a software development company serving India.",
  keywords: [
    "SEO related services",
    "SEO services",
    "SEO company",
    "local SEO services",
    "software development services",
    "AI services",
  ],
  alternates: { canonical: "/services" },
};

const SERVICE_FAQS = [
  {
    question: "Which service should I start with?",
    answer:
      "Most engagements start with a discovery call where we identify the highest-impact problem — often a slow manual process, weak search visibility, or an outdated system — and scope a first phase around it.",
  },
  {
    question: "What SEO related services does Aixoniq offer?",
    answer:
      "Our SEO related services include technical SEO audits, on-page optimization, local SEO for Google Maps visibility, keyword research, content strategy, and link building — aimed at getting your business found on Google.",
  },
  {
    question: "Do you provide ongoing DevOps and cloud support?",
    answer:
      "Yes. Our cloud computing services cover AWS solutions and Azure solutions, including cloud migration services and ongoing DevOps support after your system is live.",
  },
  {
    question: "Can penetration testing be a standalone engagement?",
    answer:
      "Yes. Our penetration testing services and SOC services can run independently of any development work, and typically conclude with a prioritized remediation report.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {SERVICES.slice(0, 6).map((s) => (
        <JsonLd key={s.title} data={serviceSchema({ name: s.title, description: s.description, path: "/services" })} />
      ))}
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Services"
          title="AI, software, ERP, and cybersecurity services under one roof"
          description="Aixoniq Technologies is a full-stack software development company — from artificial intelligence solutions to enterprise software development, cloud computing services, and cybersecurity."
        />
      </section>

      {SERVICE_GROUPS.map((group, i) => (
        <section key={group} className={i % 2 === 0 ? "bg-surface py-16 md:py-20" : "py-16 md:py-20"}>
          <div className="shell">
            <h2 className="font-display text-2xl font-semibold text-navy">{group}</h2>
            <div className="mt-8">
              <ServiceGrid group={group} />
            </div>
          </div>
        </section>
      ))}

      <FAQSection faqs={SERVICE_FAQS} />
      <CTASection title="Not sure which service fits?" description="Describe your problem, not the product — we'll recommend the right scope." />
    </>
  );
}
