import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Website Development',
  description: 'Professional website development by Aixoniq Technologies — corporate sites, e-commerce, landing pages, and custom web applications built with modern tech stacks.',
};

const services = [
  { icon: '🏢', title: 'Corporate Websites', desc: 'Premium, brand-aligned corporate websites that build trust, establish authority, and convert visitors into clients.' },
  { icon: '🏪', title: 'E-commerce Websites', desc: 'High-converting online stores built with Shopify, WooCommerce, or custom solutions — optimised for sales and user experience.' },
  { icon: '🎯', title: 'Landing Pages', desc: 'Conversion-focused landing pages designed to maximise leads, sign-ups, and sales from your paid and organic traffic.' },
  { icon: '🌐', title: 'Business Websites', desc: 'Professional multi-page business websites that showcase your services, team, and credentials to drive enquiries.' },
  { icon: '🎨', title: 'Portfolio Websites', desc: 'Stunning portfolio sites for creatives, agencies, and professionals — built to impress and win clients.' },
  { icon: '⚙️', title: 'Custom Web Applications', desc: 'Complex, scalable web apps — SaaS platforms, dashboards, portals, and internal tools — built with React, Next.js, and Node.js.' },
];

const techStack = ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'AWS', 'Stripe', 'Razorpay'];

export default function WebDevPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">Website Development</p>
            <h1 className="display-xl text-white mb-6">Websites that work as hard as you do</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies builds fast, secure, and conversion-optimised websites using modern technology stacks. From corporate sites to complex web applications — we deliver pixel-perfect, production-ready results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/portfolio" className="btn-ghost">View Our Work</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="Web Services" title="Every type of website, built to the highest standard" center />
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

      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="text-center mb-10">
            <SectionHeading label="Tech Stack" title="Built on modern, battle-tested technology" center />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/3 text-xs text-white/55">{tech}</span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
