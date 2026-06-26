import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'Full-funnel digital marketing by Aixoniq Technologies — Google Ads, PPC campaigns, lead generation, email marketing, and conversion rate optimisation.',
};

const services = [
  { icon: '🔍', title: 'Google Ads', desc: 'Search, Display, Shopping, and Performance Max campaigns managed by certified Google Ads experts who maximise your ad spend ROI.' },
  { icon: '📊', title: 'PPC Campaigns', desc: 'Pay-per-click campaigns across Google, Bing, and Yahoo — with precise targeting, continuous optimisation, and transparent reporting.' },
  { icon: '🎯', title: 'Lead Generation', desc: 'Multi-channel lead gen funnels combining landing pages, paid ads, email sequences, and CRM integration to fill your sales pipeline.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Automated email sequences, newsletters, and drip campaigns that nurture leads, retain customers, and drive repeat revenue.' },
  { icon: '⚡', title: 'Conversion Rate Optimisation', desc: 'A/B testing, heatmap analysis, and UX improvements that turn more of your existing traffic into paying customers.' },
  { icon: '📣', title: 'Display & Remarketing', desc: 'Stay top-of-mind with targeted display ads and remarketing campaigns that re-engage visitors who did not convert on their first visit.' },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">Digital Marketing</p>
            <h1 className="display-xl text-white mb-6">Marketing that generates measurable revenue</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies runs full-funnel digital marketing campaigns — Google Ads, PPC, email marketing, and conversion optimisation — designed to deliver qualified leads and measurable ROI for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Start a Campaign <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/pricing" className="btn-ghost">View Pricing</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="Digital Marketing Services" title="Full-funnel marketing from click to conversion" center />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {services.map((s) => (
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

      <CTASection />
    </>
  );
}
