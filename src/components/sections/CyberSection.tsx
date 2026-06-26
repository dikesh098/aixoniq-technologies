'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Eye, Lock, AlertTriangle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';

const secFeatures = [
  { icon: ShieldCheck, title: 'Penetration Testing', desc: 'Simulate real-world attacks to find vulnerabilities before malicious actors do.' },
  { icon: Eye, title: 'SOC Monitoring', desc: '24/7 Security Operations Center providing continuous threat detection and response.' },
  { icon: Lock, title: 'Vulnerability Assessment', desc: 'Systematic scanning and analysis of your infrastructure for security weaknesses.' },
  { icon: AlertTriangle, title: 'Risk Assessment', desc: 'Comprehensive evaluation of your security posture with actionable remediation plans.' },
];

export default function CyberSection() {
  return (
    <Section className="bg-[#050505] relative overflow-hidden" id="cybersecurity">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {secFeatures.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <Card className="h-full">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center mb-4">
                      <Icon className="text-white/60" style={{ width: '18px', height: '18px' }} />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                      {title}
                    </h4>
                    <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" className="order-1 lg:order-2">
            <SectionHeading
              label="Cybersecurity"
              title={<>Enterprise-grade<br />security solutions</>}
              description="Protect your business from evolving cyber threats. Aixoniq Technologies delivers comprehensive security services — from penetration testing and compliance to real-time SOC monitoring."
            />
            <div className="mt-6 space-y-2">
              {['Security Audits & Compliance', 'Threat Monitoring & Response', 'Security Awareness Training', 'Cloud Security Assessment'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/services/cybersecurity" className="btn-primary">
                Explore Security Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
