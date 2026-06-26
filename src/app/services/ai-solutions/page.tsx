import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'AI Solutions & Automation',
  description: 'Custom AI chatbots, agents, automation pipelines, and business AI integration. Aixoniq Technologies builds intelligent systems that transform how your business operates.',
  keywords: ['AI development company India', 'AI chatbot development', 'AI automation services', 'business AI integration', 'generative AI applications'],
};

const services = [
  { icon: '🤖', title: 'AI Chatbots', desc: 'Intelligent conversational assistants that handle customer queries, qualify leads, and provide 24/7 support — trained on your business knowledge.' },
  { icon: '⚡', title: 'AI Agents', desc: 'Autonomous AI agents that can browse the web, analyse data, write reports, and execute multi-step workflows with minimal human input.' },
  { icon: '🔄', title: 'AI Automation', desc: 'Eliminate repetitive manual tasks using AI-powered workflows. Connect your tools, automate processes, and save hundreds of hours per month.' },
  { icon: '✨', title: 'Generative AI Applications', desc: 'Custom apps powered by GPT-4, Claude, Gemini, and other LLMs — for content generation, document processing, and intelligent Q&A systems.' },
  { icon: '🏢', title: 'Business AI Integration', desc: 'Embed AI capabilities into your existing CRM, ERP, website, or app. We build the connectors and pipelines that make AI work inside your workflow.' },
  { icon: '🎧', title: 'AI Customer Support Systems', desc: 'End-to-end AI support systems that triage tickets, draft responses, escalate complex issues, and reduce support costs dramatically.' },
  { icon: '📚', title: 'AI Knowledge Bases', desc: 'Build internal or customer-facing knowledge bases powered by AI — so your team and customers get instant, accurate answers.' },
  { icon: '📊', title: 'AI Analytics', desc: 'Turn raw data into actionable insights with AI-powered dashboards, anomaly detection, and predictive analytics tailored to your industry.' },
  { icon: '🛠️', title: 'Custom AI Solutions', desc: 'Have a unique problem? We design bespoke AI systems from scratch — from model selection and fine-tuning to deployment and monitoring.' },
];

const benefits = [
  'Reduce operational costs by up to 60%',
  'Provide 24/7 customer support without extra headcount',
  'Automate repetitive workflows and eliminate human error',
  'Make faster, smarter decisions with AI-powered insights',
  'Scale operations without proportional cost increases',
  'Gain competitive advantage through AI-first innovation',
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="label-mono text-[10px] mb-4">AI Solutions & Automation</p>
            <h1 className="display-xl text-white mb-6">
              AI-powered systems that transform your business
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Aixoniq Technologies builds custom AI solutions — chatbots, autonomous agents, and intelligent automation pipelines — that cut costs, increase efficiency, and create measurable competitive advantages for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get AI Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost">View AI Packages</Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading label="AI Services" title="Everything AI, built for your business" center />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <SectionHeading label="AI Benefits" title="Why AI is the smartest investment you can make" />
              <div className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm text-white/55">
                    <CheckCircle className="w-4 h-4 text-white/40 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Start Your AI Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-4">
                {[
                  { label: 'Use Case', items: ['E-commerce: AI product recommendations & support bot', 'Healthcare: Appointment scheduling & symptom checker', 'FinTech: Fraud detection & intelligent document processing', 'HR: Resume screening & candidate shortlisting agent'] },
                ].map(({ label, items }) => (
                  <Card key={label}>
                    <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>Real-World AI Use Cases</h4>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li key={item} className="text-xs text-white/50 flex gap-2">
                          <span className="text-white/25">→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
