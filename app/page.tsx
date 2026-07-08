import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { INDUSTRIES, PORTFOLIO } from "@/lib/data";
import WhyUsPanel from "@/components/WhyUsPanel";

export const metadata: Metadata = {
  title: "AI Development Company, Software Development & SEO Related Services | Aixoniq",
  description:
    "Aixoniq Technologies is an AI development company and software development company in India delivering ERP, cybersecurity, cloud computing, and SEO related services.",
  keywords: [
    "AI development company",
    "software development company",
    "SEO related services",
    "SEO services India",
    "best SEO company near me",
    "ERP development company",
    "cybersecurity company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aixoniq Technologies — AI, Software & SEO Related Services",
    description:
      "Custom software, AI solutions, ERP development, cybersecurity, and SEO related services for businesses across India.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aixoniq Technologies — AI & Software Development Company",
    description: "Custom software, AI, ERP, cybersecurity, and SEO related services for businesses across India.",
  },
};

const HOME_FAQS = [
  {
    question: "What does Aixoniq Technologies do?",
    answer:
      "Aixoniq Technologies is an AI development company and custom software development company. We build AI solutions, websites, mobile apps, ERP software, and cybersecurity systems for startups, institutions, and enterprises across India.",
  },
  {
    question: "Do you work with clients outside Hyderabad and Maharashtra?",
    answer:
      "Yes. While our team is based in Hyderabad with roots in Gondia, Maharashtra, we deliver software development, cloud computing, and cybersecurity services to clients across India and internationally, working remotely with regular check-ins.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Cost depends on scope — a marketing website, a full ERP system, and an AI-powered platform sit at very different price points. We provide a fixed quote after a short discovery call, based on your actual requirements rather than a generic package.",
  },
  {
    question: "Can you build an ERP system for a college or hospital?",
    answer:
      "Yes. We've built college management systems and hospital management systems covering admissions, attendance, billing, and staff workflows, and we can scope a similar system to your institution's specific processes.",
  },
  {
    question: "Do you provide SEO related services?",
    answer:
      "Yes. Alongside development, we offer SEO related services — technical audits, on-page optimization, local SEO, and content-driven link building — so your website doesn't just launch well, it gets found on Google.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Every engagement includes a maintenance and support plan. We stay reachable after handover to fix issues, apply security patches, and make small iterations as your needs change.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={localBusinessSchema()} />

      <Hero />
      <StatsCounter />

      {/* Services overview */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="What We Build"
          number="01"
          title="A full-stack technology partner, not a single-service vendor"
          description="From AI software development to ERP systems and cybersecurity services, Aixoniq Technologies covers the stack a growing business or institution actually needs."
        />
        <div className="mt-12">
          <ServiceGrid limit={9} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-secondary">View all services</Link>
        </div>
      </section>

      <div className="slash-divider" />

      {/* Why choose us */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Aixoniq"
            number="02"
            title="An AI-first software development company built for reliability"
          />
          <div className="mt-12">
            <WhyUsPanel />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Industries We Serve"
          number="03"
          title="Software built around how your industry actually operates"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                href="/industries"
                key={ind.title}
                className="group rounded-2xl border border-border bg-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-[0_20px_40px_-16px_rgba(11,27,59,0.16)]"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal/15 to-cyan/10 text-royal ring-1 ring-royal/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <p className="mt-3 text-sm font-medium text-navy">{ind.title}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="How We Work"
            number="04"
            title="A development process built to remove surprises"
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Recent Work"
          number="05"
          title="Selected projects across retail, healthcare, and digital services"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <div key={p.title} className="card overflow-hidden !p-0">
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
                <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-royal/10 px-2.5 py-1 text-xs font-medium text-royal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/portfolio" className="btn-secondary">See full portfolio</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHeading eyebrow="Client Feedback" number="06" title="What teams say after working with us" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="shell py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="In Depth"
            number="07"
            title="Choosing an AI development company and software development partner in India"
          />
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate">
            <p>
              Aixoniq Technologies works as an AI development company and custom
              software development company for organizations that need more than
              a template site or an off-the-shelf tool. Whether you are searching
              for a software development company in Hyderabad, an ERP development
              company for your institution, or a cybersecurity company to test
              your existing systems, the underlying question is the same: will
              this team understand how your organization actually runs before
              they start building?
            </p>
            <h3 className="font-display text-lg font-semibold text-navy">
              What an AI company should actually deliver
            </h3>
            <p>
              A great deal gets marketed as artificial intelligence solutions
              today, but the useful version is narrower: a model trained on your
              own data, wired into a workflow your team already uses, monitored
              so it doesn't quietly drift out of accuracy. As an AI software
              development company, we scope generative AI development and
              machine learning solutions around one measurable outcome at a
              time — fewer support tickets, faster document review, a chatbot
              that actually resolves a query instead of deflecting it.
            </p>
            <h3 className="font-display text-lg font-semibold text-navy">
              Custom software and ERP development, sized to the institution
            </h3>
            <p>
              Enterprise software development doesn't need to mean enterprise
              pricing. Our ERP software development work spans college
              management systems, school management systems, and hospital
              management systems — each modeled on the department that will use
              it daily rather than a generic module list. A CRM development
              company or HRMS software vendor selling a fixed product will ask
              you to adapt; we build the ERP development company relationship
              around adapting the software to you instead.
            </p>
            <h3 className="font-display text-lg font-semibold text-navy">
              Cybersecurity, cloud, and the unglamorous work that prevents incidents
            </h3>
            <p>
              As a cybersecurity company, our penetration testing services and
              SOC monitoring exist to find the gap before someone else does. On
              the infrastructure side, our cloud computing services cover AWS
              solutions, Azure solutions, and the cloud migration services that
              move a system without a weekend of downtime. DevOps services keep
              deployments boring, which is exactly what you want them to be.
            </p>
            <h3 className="font-display text-lg font-semibold text-navy">
              SEO related services that get a good website found
            </h3>
            <p>
              A fast, well-built site still needs to be discoverable. Our SEO
              related services cover technical SEO audits, on-page
              optimization, local SEO for Google Maps visibility, keyword
              research, and content-driven link building — the practical work
              behind ranking for the searches your customers are actually
              typing, not just a report full of vanity metrics.
            </p>
            <h3 className="font-display text-lg font-semibold text-navy">
              A technology consulting partner for the next stage of growth
            </h3>
            <p>
              Whether you are an early-stage startup technology partner search,
              or an established business planning a full digital transformation
              company engagement, Aixoniq Technologies scopes the work in
              writing, builds against a shared staging environment, and stays
              reachable long after the invoice is paid. That, more than any
              single feature list, is what separates a best software company
              from one that simply built you a website.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} title="Common questions about working with Aixoniq" />

      <CTASection />
    </>
  );
}
