'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/animations';
import { Section, Container, SectionHeading } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

const faqs = [
  { q: 'What services does Aixoniq Technologies offer?', a: 'Aixoniq Technologies offers a comprehensive range of technology and digital services including AI solutions & automation, AI chatbot development, website development, mobile app development, cybersecurity (penetration testing, SOC, vulnerability assessment), SEO, digital marketing, social media marketing, and cloud solutions.' },
  { q: 'How long does it take to build a website?', a: 'A standard business website typically takes 3–5 weeks. E-commerce platforms take 6–10 weeks. Custom web applications vary based on complexity and typically range from 8–20 weeks. We provide a detailed timeline during our initial consultation.' },
  { q: 'Do you work with startups as well as large enterprises?', a: 'Yes. Aixoniq Technologies works with businesses of all sizes — from early-stage startups building their first MVP to large enterprises undergoing digital transformation. Our packages are designed to scale with your business.' },
  { q: 'How does your AI chatbot development process work?', a: 'We start with a discovery session to understand your business, use cases, and customer needs. Then we design conversation flows, connect your knowledge base or data, integrate with your preferred platforms (website, WhatsApp, etc.), test thoroughly, and deploy. Full implementation typically takes 3–6 weeks.' },
  { q: 'What is included in your cybersecurity penetration testing?', a: 'Our penetration testing includes reconnaissance, scanning, vulnerability exploitation (in a controlled environment), privilege escalation testing, reporting with CVSS-scored findings, and a detailed remediation guide. We cover web apps, APIs, networks, and mobile apps based on scope.' },
  { q: 'How do you measure results for SEO and digital marketing?', a: 'We track rankings, organic traffic, click-through rates, conversion rates, cost-per-lead, ROAS, and revenue directly attributable to our campaigns. You receive monthly detailed reports with full transparency — no vanity metrics, only what impacts your business.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Yes. All our development projects include a minimum of 1 month of free post-launch support. We also offer ongoing maintenance, hosting management, security updates, performance monitoring, and feature development on retainer plans.' },
  { q: 'What are your payment terms?', a: 'For project-based work, we typically take 50% upfront and 50% upon delivery. For monthly retainer services (SEO, social media, marketing), payment is due at the start of each month. We accept bank transfers, UPI, and all major cards via Razorpay.' },
  { q: 'Can you help with both the technical and marketing aspects of a business?', a: 'Absolutely. That is one of our biggest advantages. Aixoniq Technologies is a full-service technology company — we build your product AND help you grow it through SEO, social media, and digital marketing. You get a single trusted partner for both.' },
  { q: 'How do I get started with Aixoniq Technologies?', a: 'Simply fill out our contact form or book a free consultation call. One of our specialists will reach out within 2–4 hours to discuss your project, understand your goals, and recommend the best approach. There is no obligation and no cost for the initial consultation.' },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-medium text-white/80" style={{ fontFamily: 'var(--font-syne)' }}>{q}</span>
        <ChevronDown className={`w-4 h-4 text-white/35 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/45 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">FAQ</p>
            <h1 className="display-xl text-white mb-5">Frequently asked questions</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Everything you need to know about Aixoniq Technologies, our services, and how we work.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto glass rounded-2xl border border-white/8 px-6 divide-y divide-white/5">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
