import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Aixoniq Technologies delivers AI, cybersecurity, and digital solutions across FinTech, healthcare, e-commerce, education, real estate, and more.',
};

const industries = [
  { emoji: '🏦', name: 'FinTech & Banking', desc: 'AI fraud detection, secure payment systems, regulatory compliance, and digital banking interfaces for financial institutions and FinTech startups.', services: ['AI Solutions', 'Cybersecurity', 'Web Development'] },
  { emoji: '🏥', name: 'Healthcare & MedTech', desc: 'HIPAA-compliant patient platforms, AI diagnostic tools, telemedicine apps, and healthcare data management systems.', services: ['Mobile Apps', 'AI Solutions', 'Web Development'] },
  { emoji: '🛒', name: 'E-commerce & Retail', desc: 'High-converting online stores, AI product recommendations, inventory management, and omnichannel marketing campaigns.', services: ['Web Development', 'SEO', 'Digital Marketing'] },
  { emoji: '🎓', name: 'EdTech & Education', desc: 'Learning management systems, AI tutoring agents, student portals, and educational content marketing for schools and EdTech platforms.', services: ['AI Solutions', 'Web Development', 'Social Media'] },
  { emoji: '🏠', name: 'Real Estate & PropTech', desc: 'Property listing platforms, AI-powered lead generation, virtual tour integrations, and local SEO for real estate agencies.', services: ['Web Development', 'SEO', 'Social Media'] },
  { emoji: '🏭', name: 'Manufacturing & Industry', desc: 'ERP integrations, IoT data dashboards, business automation, and B2B digital marketing for manufacturing companies.', services: ['Cloud Solutions', 'AI Solutions', 'Web Development'] },
  { emoji: '✈️', name: 'Hospitality & Travel', desc: 'Booking platforms, AI concierge chatbots, review management, and tourism marketing campaigns for hotels and travel businesses.', services: ['AI Solutions', 'Digital Marketing', 'Web Development'] },
  { emoji: '🚚', name: 'Logistics & Supply Chain', desc: 'Real-time tracking apps, route optimisation systems, fleet management dashboards, and operational automation for logistics companies.', services: ['Mobile Apps', 'Cloud Solutions', 'AI Solutions'] },
  { emoji: '⚖️', name: 'Legal & Compliance', desc: 'Secure document management portals, AI contract analysis tools, and compliance tracking systems for law firms and legal departments.', services: ['Web Development', 'AI Solutions', 'Cybersecurity'] },
  { emoji: '🎬', name: 'Media & Entertainment', desc: 'Content delivery platforms, social media growth, YouTube marketing, and audience analytics for creators and media companies.', services: ['Social Media', 'Web Development', 'Digital Marketing'] },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Industries We Serve</p>
            <h1 className="display-xl text-white mb-5">Technology solutions for every industry</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Aixoniq Technologies brings deep domain expertise to every sector — delivering AI, cybersecurity, and digital solutions that understand your industry&apos;s unique challenges and compliance requirements.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.07}>
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <Card className="h-full flex gap-5 hover:border-white/15 transition-all">
                  <div className="text-3xl shrink-0">{ind.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{ind.name}</h3>
                    <p className="text-sm text-white/42 leading-relaxed mb-4">{ind.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.services.map((s) => (
                        <span key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/3 text-white/45">{s}</span>
                      ))}
                    </div>
                  </div>
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
