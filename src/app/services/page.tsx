import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Aixoniq Technologies\' full range of services — AI solutions, cybersecurity, web & app development, SEO, digital marketing, and cloud solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="label-mono text-[10px] mb-4">What We Offer</p>
            <h1 className="display-xl text-white mb-6">
              End-to-end technology solutions
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Aixoniq Technologies delivers a comprehensive suite of technology and digital services — all under one roof, all built to enterprise standards.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <Link href={service.href} className="block h-full group">
                  <Card className="h-full flex flex-col hover:border-white/15 transition-all duration-300 group-hover:-translate-y-1">
                    <ServiceIcon emoji={service.icon} className="mb-5" />
                    <h3 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/42 leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>
                    <span className="flex items-center gap-1.5 text-xs text-white/30 group-hover:text-white/60 transition-colors">
                      Explore service <ArrowRight className="w-3 h-3" />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
