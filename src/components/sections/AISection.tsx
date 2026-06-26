'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, Zap, Database } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';

const aiFeatures = [
  { icon: Bot, title: 'AI Chatbots', desc: 'Intelligent conversational agents that handle customer support 24/7, qualify leads, and automate responses.' },
  { icon: Workflow, title: 'AI Automation', desc: 'Streamline repetitive workflows using AI — reduce costs and free your team to focus on high-value work.' },
  { icon: Zap, title: 'AI Agents', desc: 'Autonomous agents that research, analyze, and execute multi-step tasks with minimal human oversight.' },
  { icon: Database, title: 'Business AI Integration', desc: 'Embed AI capabilities directly into your existing systems, apps, and business processes.' },
];

export default function AISection() {
  return (
    <Section className="bg-[#030303] relative overflow-hidden" id="ai-solutions">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <SectionHeading
              label="AI Solutions"
              title={<>AI-powered tools that<br />transform operations</>}
              description="Aixoniq Technologies builds custom AI solutions — chatbots, agents, and automation pipelines — that cut costs, increase efficiency, and create competitive advantages."
            />
            <div className="mt-8 space-y-3">
              {['AI Chatbot Development', 'Generative AI Applications', 'AI Knowledge Bases', 'Custom AI Workflows'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/services/ai-solutions" className="btn-primary">
                Explore AI Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Right — Feature cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {aiFeatures.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <Card className="h-full">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-white/60" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                    {title}
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
