import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Eye, Lock, AlertTriangle, FileSearch, GraduationCap, Cloud, FileCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Cybersecurity Services',
  description: 'Enterprise cybersecurity: penetration testing, vulnerability assessment, SOC monitoring, security audits, and compliance. Aixoniq Technologies protects your business from evolving threats.',
  keywords: ['cybersecurity services India', 'penetration testing', 'vulnerability assessment', 'SOC services', 'security audit', 'compliance'],
};

const services = [
  { icon: AlertTriangle, title: 'Vulnerability Assessment', desc: 'Systematic identification and quantification of security vulnerabilities in your systems, networks, and applications — with detailed risk ratings and remediation plans.' },
  { icon: ShieldCheck, title: 'Penetration Testing', desc: 'Ethical hacking simulations that mimic real-world attacks on your infrastructure, web apps, and APIs to expose weaknesses before malicious actors exploit them.' },
  { icon: FileSearch, title: 'Security Audits', desc: 'Comprehensive review of your security policies, configurations, access controls, and procedures — aligned with ISO 27001, NIST, and other frameworks.' },
  { icon: Eye, title: 'SOC Services', desc: '24/7 Security Operations Centre monitoring with real-time threat detection, incident response, and detailed forensic reporting to protect your business around the clock.' },
  { icon: Lock, title: 'Threat Monitoring', desc: 'Continuous surveillance of your digital environment using SIEM tools to detect anomalies, suspicious behaviour, and potential breaches before they escalate.' },
  { icon: FileCheck, title: 'Compliance Support', desc: 'Navigate complex regulatory landscapes — GDPR, PCI-DSS, ISO 27001, RBI guidelines — with expert compliance advisory and gap analysis services.' },
  { icon: GraduationCap, title: 'Security Awareness Training', desc: 'Empower your employees to be the first line of defence with structured security training, phishing simulations, and best-practice workshops.' },
  { icon: Cloud, title: 'Risk Assessment', desc: 'Holistic evaluation of your organisation\'s security posture, threat landscape, and risk tolerance — with a prioritised roadmap for improvement.' },
];

const stats = [
  { value: '500+', label: 'Vulnerabilities Found' },
  { value: '100%', label: 'Compliance Success Rate' },
  { value: '24/7', label: 'SOC Monitoring' },
  { value: '0', label: 'Post-Audit Breaches' },
];

export default function CybersecurityPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">Cybersecurity Services</p>
            <h1 className="display-xl text-white mb-6">Enterprise-grade security for your business</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Protect your business from evolving cyber threats. Aixoniq Technologies delivers comprehensive security services — penetration testing, SOC monitoring, compliance support, and security awareness — all aligned to global standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get Security Assessment <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/pricing" className="btn-ghost">View Security Packages</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-[#030303] border-y border-white/5 py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <FadeIn key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>{s.value}</div>
                <div className="text-xs text-white/35 uppercase tracking-wider" style={{ fontFamily: 'var(--font-jetbrains)' }}>{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="Security Services" title="Complete cybersecurity coverage" description="From initial vulnerability discovery to ongoing 24/7 monitoring — Aixoniq Technologies protects every layer of your digital environment." center />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.07}>
            {services.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="h-full hover:border-white/15 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-4">
                    <Icon className="text-white/55" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{title}</h3>
                  <p className="text-xs text-white/42 leading-relaxed">{desc}</p>
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
