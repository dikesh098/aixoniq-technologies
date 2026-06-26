'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';

export default function ServicesSection() {
  return (
    <Section className="bg-[#050505]" id="services">
      <Container>
        <FadeIn className="mb-14">
          <SectionHeading
            label="What We Do"
            title={<>Everything your business<br />needs to grow</>}
            description="From AI automation to cybersecurity — Aixoniq Technologies delivers end-to-end technology solutions that drive real business outcomes."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.07}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={service.href} className="block h-full group">
                <Card className="h-full flex flex-col hover:border-white/15 transition-all duration-300 group-hover:translate-y-[-2px]">
                  <ServiceIcon emoji={service.icon} className="mb-4" />
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-white/30 group-hover:text-white/60 transition-colors">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <Link href="/services" className="btn-ghost">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
