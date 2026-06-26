import type { Metadata } from 'next';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aixoniq Technologies — our mission, vision, values, and the team behind India\'s next-generation technology company.',
};

const values = [
  { icon: Target, title: 'Mission', desc: 'To help businesses of every size accelerate growth through intelligent technology, AI-powered automation, cybersecurity, and data-driven digital strategies.' },
  { icon: Eye, title: 'Vision', desc: 'To become India\'s most trusted technology partner — known for delivering enterprise-grade solutions that create measurable, lasting impact.' },
  { icon: Heart, title: 'Values', desc: 'Innovation, transparency, quality, and client success drive every decision we make. We treat every project as if it were our own business.' },
  { icon: Users, title: 'Team', desc: 'A diverse team of AI engineers, security experts, developers, designers, and marketers — united by a passion for solving hard problems with smart technology.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">About Aixoniq Technologies</p>
            <h1 className="display-xl text-white mb-6">
              We build what the future runs on.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Aixoniq Technologies is a next-generation technology company headquartered in India.
              We specialize in AI solutions, cybersecurity, web &amp; app development, and digital marketing —
              helping businesses compete in a rapidly evolving digital world.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Story */}
      <Section className="bg-[#030303]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <SectionHeading
                label="Our Story"
                title="Built by builders, for businesses"
                description="Aixoniq Technologies was founded with a single conviction: that access to intelligent, enterprise-grade technology should not be exclusive to large corporations."
              />
              <div className="mt-6 space-y-4 text-sm text-white/50 leading-relaxed">
                <p>
                  We started by helping startups build their first digital products. As our clients grew, so did our capabilities — expanding into AI automation, penetration testing, cloud infrastructure, and performance marketing.
                </p>
                <p>
                  Today, Aixoniq Technologies serves clients across FinTech, healthcare, e-commerce, real estate, and education — delivering solutions that are intelligent, secure, and built to scale.
                </p>
                <p>
                  Every project we take on is an opportunity to push the boundaries of what technology can do for a business. That is the Aixoniq Technologies standard.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '150+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '50+', label: 'Enterprise Clients' },
                  { value: '5+', label: 'Years Experience' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-6 text-center border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/35 uppercase tracking-wider" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading
              label="What Drives Us"
              title="Mission, Vision & Values"
              center
            />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
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
