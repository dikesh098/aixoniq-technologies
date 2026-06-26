'use client';

import { CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, Badge } from '@/components/ui';
import { TECHNOLOGIES } from '@/lib/constants';

const reasons = [
  { title: 'AI-First Approach', desc: 'We embed artificial intelligence into every solution we build — giving clients a measurable competitive edge.' },
  { title: 'Full-Stack Expertise', desc: 'From frontend design to backend infrastructure, cybersecurity to marketing — one team, total ownership.' },
  { title: 'Enterprise-Grade Quality', desc: 'We deliver production-ready systems built to scale, secured to the highest standards, and optimized for performance.' },
  { title: 'Transparent Delivery', desc: 'Weekly progress updates, clear milestones, and open communication — no surprises, just results.' },
  { title: 'Rapid Turnaround', desc: 'Agile sprints and proven processes mean faster time-to-market without compromising on quality.' },
  { title: 'Dedicated Support', desc: 'Your dedicated team is with you post-launch — monitoring, updating, and continuously improving your product.' },
];

export default function WhyUsSection() {
  return (
    <>
      {/* Why Choose Us */}
      <Section className="bg-[#030303]" id="why-us">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading
              label="Why Aixoniq Technologies"
              title={<>The partner that delivers<br />real results</>}
              description="Businesses choose Aixoniq Technologies because we combine deep technical expertise with strategic thinking — and we measure success by your growth."
              center
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <Card className="h-full flex gap-4">
                  <CheckCircle className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                      {r.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed">{r.desc}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Technologies */}
      <Section className="bg-[#050505]" id="technologies">
        <Container>
          <FadeIn className="mb-12 text-center">
            <SectionHeading
              label="Technologies We Use"
              title="Built on the best stack"
              description="Aixoniq Technologies works with modern, battle-tested technologies across every layer — from AI models to cloud infrastructure."
              center
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {TECHNOLOGIES.map((tech) => (
                <Badge key={tech.name} className="px-3 py-1.5 text-xs">
                  {tech.name}
                  <span className="ml-1.5 text-white/20">·</span>
                  <span className="ml-1 text-white/30 text-[10px]">{tech.category}</span>
                </Badge>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
