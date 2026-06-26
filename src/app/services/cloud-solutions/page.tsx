import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Cloud Solutions',
  description: 'Cloud migration, architecture, DevOps, and managed services by Aixoniq Technologies. AWS, GCP, and Azure expertise for scalable, secure infrastructure.',
};

const services = [
  { icon: '☁️', title: 'Cloud Migration', desc: 'Seamlessly migrate your on-premise infrastructure to AWS, GCP, or Azure with zero downtime and full data integrity.' },
  { icon: '🏗️', title: 'Cloud Architecture', desc: 'Design and implement scalable, fault-tolerant cloud architectures following best practices for performance and cost-efficiency.' },
  { icon: '🔄', title: 'DevOps & CI/CD', desc: 'Automate your development pipeline with Docker, Kubernetes, GitHub Actions, and Terraform — ship faster with confidence.' },
  { icon: '📊', title: 'Cloud Monitoring', desc: 'Real-time observability, alerting, and performance monitoring using CloudWatch, Datadog, and Grafana to keep systems healthy.' },
  { icon: '🔒', title: 'Cloud Security', desc: 'IAM configuration, security group management, encryption, and compliance hardening to keep your cloud infrastructure secure.' },
  { icon: '💰', title: 'Cost Optimisation', desc: 'Identify and eliminate cloud waste. We audit your usage and implement right-sizing, reserved instances, and savings plans.' },
];

export default function CloudSolutionsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">Cloud Solutions</p>
            <h1 className="display-xl text-white mb-6">Scalable cloud infrastructure built for growth</h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies provides end-to-end cloud solutions — migration, architecture, DevOps automation, and managed services — on AWS, GCP, and Azure. Build infrastructure that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get Cloud Assessment <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/pricing" className="btn-ghost">View Packages</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="Cloud Services" title="Everything your cloud needs" center />
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
