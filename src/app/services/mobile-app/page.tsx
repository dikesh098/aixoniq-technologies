import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description: 'Native iOS, Android, and cross-platform app development by Aixoniq Technologies. Flutter, React Native, and startup MVP development.',
};

const services = [
  { icon: '🤖', title: 'Android Development', desc: 'Native Android applications built with Kotlin and Jetpack Compose — performant, scalable, and designed for the Google Play Store.' },
  { icon: '🍎', title: 'iOS Development', desc: 'Native iOS apps built with Swift and SwiftUI — delivering premium user experiences on iPhone and iPad.' },
  { icon: '🔀', title: 'Cross-Platform Apps', desc: 'Single codebase, dual platform. We build cross-platform apps that feel native on both iOS and Android.' },
  { icon: '💙', title: 'Flutter Apps', desc: 'Beautiful, high-performance Flutter apps with pixel-perfect UI, smooth animations, and fast development cycles.' },
  { icon: '⚛️', title: 'React Native Apps', desc: 'JavaScript-powered native apps using React Native — ideal for teams with existing React web development experience.' },
  { icon: '🚀', title: 'Startup MVP Development', desc: 'Launch fast, learn fast. We build lean, scalable MVPs in 8–12 weeks to validate your idea and attract investors.' },
];

export default function MobileAppPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">Mobile App Development</p>
            <h1 className="display-xl text-white mb-6">Apps that users love, businesses rely on</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies builds native and cross-platform mobile applications for iOS and Android. From startup MVPs to enterprise-grade apps — we deliver quality, speed, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Build Your App <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/portfolio" className="btn-ghost">View App Projects</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="App Services" title="Every platform, every use case" center />
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
