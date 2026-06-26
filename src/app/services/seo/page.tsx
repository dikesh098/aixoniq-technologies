import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'SEO Services — Rank on Google\'s First Page',
  description: 'Want your business to appear on Google\'s first page? Aixoniq Technologies helps businesses increase visibility, improve search rankings, drive qualified traffic, and generate more leads through advanced SEO strategies.',
  keywords: ['SEO agency India', 'search engine optimisation', 'Google first page ranking', 'local SEO', 'technical SEO', 'keyword research'],
};

const seoServices = [
  { icon: '🔍', title: 'Keyword Research', desc: 'In-depth analysis of high-intent keywords your customers are searching for — identifying opportunities to outrank competitors and attract qualified traffic.' },
  { icon: '⚙️', title: 'Technical SEO', desc: 'Full technical audits covering site speed, Core Web Vitals, crawlability, indexing, structured data, and mobile optimisation to ensure Google can rank your site.' },
  { icon: '📍', title: 'Local SEO', desc: 'Dominate local search results. We optimise your Google Business Profile, build local citations, and implement geo-targeted strategies that drive foot traffic and local leads.' },
  { icon: '📄', title: 'On-Page SEO', desc: 'Strategic optimisation of every page — meta titles, descriptions, headings, internal linking, content depth, and user experience signals that boost your rankings.' },
  { icon: '🔗', title: 'Off-Page SEO', desc: 'High-authority backlink building through digital PR, guest posting, and link acquisition strategies that increase your domain authority and search visibility.' },
  { icon: '🏗️', title: 'Schema Markup', desc: 'Implement structured data across your site to win rich snippets, knowledge panels, and enhanced SERP features that increase click-through rates dramatically.' },
  { icon: '📊', title: 'Core Web Vitals', desc: 'Optimise LCP, FID, and CLS scores to meet Google\'s page experience standards — improving both rankings and user satisfaction simultaneously.' },
  { icon: '🗺️', title: 'Google Business Optimisation', desc: 'Complete setup and ongoing optimisation of your Google Business Profile to maximise local visibility, reviews, and calls from nearby customers.' },
  { icon: '✍️', title: 'Content Marketing', desc: 'SEO-driven content strategy and creation — blog posts, landing pages, and pillar content that ranks, educates, and converts your target audience.' },
];

const packages = [
  {
    name: 'Starter SEO',
    price: '₹15,000',
    period: '/month',
    features: ['10 Target Keywords', 'On-Page Optimisation', 'Technical SEO Audit', 'Monthly Report', 'Google Business Setup', 'Basic Link Building'],
    popular: false,
  },
  {
    name: 'Growth SEO',
    price: '₹35,000',
    period: '/month',
    features: ['30 Target Keywords', 'Full On-Page & Technical SEO', 'Advanced Link Building', 'Content Creation (4 posts)', 'Schema Markup', 'Local SEO', 'Bi-weekly Reports', 'Core Web Vitals Optimisation'],
    popular: true,
  },
  {
    name: 'Enterprise SEO',
    price: 'Custom',
    period: '',
    features: ['Unlimited Keywords', 'Full Technical SEO', 'Aggressive Link Building', 'Weekly Content Creation', 'E-commerce SEO', 'International SEO', 'Dedicated SEO Manager', 'Weekly Strategy Calls'],
    popular: false,
  },
];

export default function SEOPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">SEO Services</p>
            <h1 className="display-xl text-white mb-6">
              Want your business on Google&apos;s first page?
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies helps businesses increase visibility, improve search rankings, drive qualified traffic, and generate more leads through advanced SEO strategies built for sustainable, long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get Free SEO Audit <ArrowRight className="w-4 h-4" /></Link>
              <Link href="#packages" className="btn-ghost">View SEO Packages</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="SEO Services" title="Advanced SEO strategies that rank and convert" center />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {seoServices.map((s) => (
              <StaggerItem key={s.title}>
                <Card className="h-full hover:border-white/15 transition-all">
                  <ServiceIcon emoji={s.icon} className="mb-4" />
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h3>
                  <p className="text-xs text-white/42 leading-relaxed">{s.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Packages */}
      <Section className="bg-[#050505]" id="packages">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="SEO Packages" title="Transparent pricing, measurable results" center />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div className={`relative rounded-2xl border p-6 h-full flex flex-col ${pkg.popular ? 'border-white/25 bg-white/5' : 'border-white/8 bg-white/2'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-[10px] font-semibold" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>{pkg.price}</span>
                    <span className="text-sm text-white/35">{pkg.period}</span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-white/55">
                        <CheckCircle className="w-3.5 h-3.5 text-white/40 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={pkg.popular ? 'btn-primary justify-center' : 'btn-ghost justify-center'}>
                    Get Started
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
