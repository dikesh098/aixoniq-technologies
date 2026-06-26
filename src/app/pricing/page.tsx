import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for all Aixoniq Technologies services — AI solutions, website development, cybersecurity, SEO, and digital marketing packages.',
};

const categories = [
  {
    name: 'Website Development',
    plans: [
      { name: 'Starter', price: '₹25,000', period: 'one-time', features: ['5-page website', 'Mobile responsive', 'Basic SEO setup', 'Contact form', '1 month support'], popular: false },
      { name: 'Business', price: '₹60,000', period: 'one-time', features: ['Up to 15 pages', 'CMS integration', 'Advanced SEO', 'Payment gateway', 'Analytics setup', '3 months support'], popular: true },
      { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited pages', 'Custom web app', 'Advanced integrations', 'Priority support', 'SLA guarantee', 'Dedicated manager'], popular: false },
    ],
  },
  {
    name: 'Social Media Marketing',
    plans: [
      { name: 'Starter', price: '₹12,000', period: '/month', features: ['2 platforms', '12 posts/month', 'Basic graphics', 'Monthly report', 'Community management'], popular: false },
      { name: 'Growth', price: '₹25,000', period: '/month', features: ['4 platforms', '30 posts/month', 'Premium graphics + reels', 'Ad campaigns (₹10K budget)', 'Bi-weekly reports', 'Influencer outreach'], popular: true },
      { name: 'Enterprise', price: 'Custom', period: '', features: ['All platforms', 'Unlimited content', 'Large ad budget management', 'Dedicated social team', 'Real-time dashboard', 'Weekly strategy calls'], popular: false },
    ],
  },
  {
    name: 'AI Solutions',
    plans: [
      { name: 'AI Starter', price: '₹40,000', period: 'one-time', features: ['Basic AI chatbot', 'Up to 5 intents', 'WhatsApp integration', 'Dashboard access', '1 month support'], popular: false },
      { name: 'AI Business', price: '₹1,20,000', period: 'one-time', features: ['Advanced AI agent', 'Custom knowledge base', 'CRM integration', 'Multi-platform deployment', 'Analytics dashboard', '3 months support'], popular: true },
      { name: 'AI Enterprise', price: 'Custom', period: '', features: ['Full AI system build', 'Custom model fine-tuning', 'Enterprise integrations', 'Dedicated AI engineer', 'SLA & uptime guarantee', 'Ongoing optimisation'], popular: false },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Transparent Pricing</p>
            <h1 className="display-xl text-white mb-5">Simple, honest pricing</h1>
            <p className="text-white/50 text-base leading-relaxed">
              No hidden fees. No lock-in contracts. Every package is tailored to deliver maximum value — and we always offer a free consultation before you commit.
            </p>
          </FadeIn>
        </Container>
      </section>

      {categories.map((cat) => (
        <Section key={cat.name} className="bg-[#030303] first:bg-[#030303]">
          <Container>
            <FadeIn className="mb-12 text-center">
              <SectionHeading label="Pricing" title={cat.name} center />
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {cat.plans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <div className={`relative rounded-2xl border p-6 h-full flex flex-col transition-all ${plan.popular ? 'border-white/25 bg-white/5' : 'border-white/8 bg-white/2'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-[10px] font-semibold" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>{plan.price}</span>
                      <span className="text-sm text-white/35">{plan.period}</span>
                    </div>
                    <ul className="space-y-2.5 flex-1 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-xs text-white/55">
                          <CheckCircle className="w-3.5 h-3.5 text-white/40 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`${plan.popular ? 'btn-primary' : 'btn-ghost'} justify-center`}>
                      Get Started <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      ))}

      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="text-center">
            <p className="text-white/40 text-sm mb-4">All prices are exclusive of GST. Custom enterprise pricing available for large projects.</p>
            <Link href="/contact" className="btn-ghost">
              Need a custom quote? Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
