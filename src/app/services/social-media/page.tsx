import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Instagram, Facebook, Linkedin, Youtube, Video, Megaphone,
  TrendingUp, Users, Target, BarChart3, ArrowRight, CheckCircle
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, ServiceIcon } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Social Media Marketing — Leading Digital Growth Solutions',
  description:
    'Aixoniq Technologies helps businesses build a powerful online presence through strategic social media marketing, content creation, digital advertising, and brand growth solutions.',
  keywords: [
    'social media marketing agency India',
    'Instagram marketing services',
    'Facebook advertising agency',
    'LinkedIn lead generation',
    'YouTube marketing',
    'social media management',
    'brand awareness campaigns',
    'influencer marketing India',
  ],
};

const services = [
  {
    icon: '📸',
    title: 'Instagram Marketing & Growth',
    desc: 'Build a high-engagement Instagram presence with strategic content, reels, stories, and targeted paid campaigns that attract your ideal audience and convert followers into customers.',
  },
  {
    icon: '👍',
    title: 'Facebook Marketing & Advertising',
    desc: 'Reach millions of potential customers with precision-targeted Facebook ad campaigns. We design, manage, and optimise campaigns that generate leads, sales, and measurable ROI.',
  },
  {
    icon: '💼',
    title: 'LinkedIn Branding & Lead Generation',
    desc: 'Establish authority in your industry on LinkedIn. We help businesses grow their professional network, generate B2B leads, and build thought leadership through strategic content.',
  },
  {
    icon: '▶️',
    title: 'YouTube Marketing',
    desc: 'Grow your YouTube channel with engaging video content, SEO-optimised descriptions, thumbnail design, and paid YouTube ad campaigns that expand your audience and drive traffic.',
  },
  {
    icon: '✏️',
    title: 'Content Creation & Management',
    desc: 'From graphics and carousels to long-form video and blog posts — our creative team produces high-quality, brand-aligned content that resonates with your target audience.',
  },
  {
    icon: '🎬',
    title: 'Reels & Short-Form Video Marketing',
    desc: 'Short-form video is the highest-converting content format today. We create scroll-stopping Reels, Shorts, and TikToks that build brand awareness and drive organic growth.',
  },
  {
    icon: '📣',
    title: 'Social Media Advertising',
    desc: 'Full-funnel paid social campaigns across Instagram, Facebook, LinkedIn, and YouTube. We manage budgets, creatives, targeting, A/B testing, and optimisation for maximum returns.',
  },
  {
    icon: '🏆',
    title: 'Brand Awareness Campaigns',
    desc: 'Position your brand as the go-to choice in your industry. We craft multi-channel awareness campaigns that increase visibility, recall, and credibility with your target market.',
  },
  {
    icon: '🤝',
    title: 'Influencer Marketing Strategies',
    desc: 'Connect with the right influencers in your niche to amplify your brand reach authentically. We manage end-to-end influencer partnerships from discovery to performance reporting.',
  },
  {
    icon: '💬',
    title: 'Community Management',
    desc: 'Build loyal brand communities. Our team manages comments, DMs, and community interactions — keeping your audience engaged and your brand reputation strong across all platforms.',
  },
];

const whyReasons = [
  { title: 'AI-Powered Strategy', desc: 'We use artificial intelligence and data analytics to identify what content performs best for your audience and continuously refine our approach.' },
  { title: 'Customised Campaigns', desc: 'No copy-paste templates. Every strategy is built around your specific business goals, target audience, industry, and competitive landscape.' },
  { title: 'Creative Excellence', desc: 'Our designers and video editors produce premium content that stands out in crowded feeds — visuals that stop the scroll and drive action.' },
  { title: 'Data-Driven Decisions', desc: 'Every campaign decision is backed by real-time performance data. We track, analyse, and optimise continuously to maximise your results.' },
  { title: 'Full Transparency', desc: 'Detailed monthly reports with clear metrics — reach, engagement, leads, conversions, and ROI. You always know exactly where your investment is going.' },
  { title: 'End-to-End Management', desc: 'From strategy and content creation to scheduling, advertising, and community management — we handle everything so you can focus on your business.' },
];

const additionalServices = [
  { icon: '🌐', label: 'Website Development', href: '/services/website-development' },
  { icon: '📱', label: 'Mobile App Development', href: '/services/mobile-app' },
  { icon: '🤖', label: 'AI Solutions & Automation', href: '/services/ai-solutions' },
  { icon: '🛡️', label: 'Cybersecurity Services', href: '/services/cybersecurity' },
  { icon: '📈', label: 'Search Engine Optimisation (SEO)', href: '/services/seo' },
  { icon: '🎯', label: 'Digital Marketing', href: '/services/digital-marketing' },
  { icon: '☁️', label: 'Cloud Solutions', href: '/services/cloud-solutions' },
  { icon: '💻', label: 'Custom Software Development', href: '/services' },
];

const stats = [
  { value: '10x', label: 'Average Reach Growth' },
  { value: '45K+', label: 'Followers Generated' },
  { value: '3.2x', label: 'Avg Engagement Rate' },
  { value: '200+', label: 'Campaigns Delivered' },
];

export default function SocialMediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

        <Container className="relative z-10">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-px bg-white/30" />
              <span className="label-mono text-[10px]">Social Media Marketing</span>
              <div className="w-4 h-px bg-white/30" />
            </div>
            <h1 className="display-xl text-white mb-6 max-w-4xl">
              Leading Social Media Marketing &amp; Digital Growth Solutions
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-10">
              Aixoniq Technologies helps businesses build a powerful online presence through
              strategic social media marketing, content creation, digital advertising, and brand
              growth solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Start Growing Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Stats ── */}
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

      {/* ── About the Service ── */}
      <Section className="bg-[#050505]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <SectionHeading
                label="What We Do"
                title="Strategic social media that drives real growth"
                description="Our team specialises in creating high-performing social media campaigns that increase brand visibility, improve customer engagement, generate qualified leads, and drive measurable business growth."
              />
              <div className="mt-6 space-y-3 text-sm text-white/50 leading-relaxed">
                <p>
                  We combine creativity, technology, artificial intelligence, and data-driven strategies
                  to help businesses achieve exceptional results across social media platforms.
                </p>
                <p>
                  Our experts develop customised marketing strategies tailored to your business goals,
                  target audience, and industry requirements — not generic templates.
                </p>
              </div>

              {/* Platform badges */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Youtube, label: 'YouTube' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/8 text-xs text-white/60">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <Card className="border border-white/8">
                <h3 className="text-base font-semibold text-white mb-5" style={{ fontFamily: 'var(--font-syne)' }}>
                  What you get with Aixoniq Technologies
                </h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated social media strategist',
                    'Monthly content calendar & scheduling',
                    'Custom graphics, reels, and copywriting',
                    'Paid ad campaign management',
                    'Real-time performance dashboards',
                    'Community management & engagement',
                    'Monthly detailed performance reports',
                    'Influencer sourcing & coordination',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/55">
                      <CheckCircle className="w-4 h-4 text-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Services Grid ── */}
      <Section className="bg-[#030303]" id="services">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading
              label="Our Social Media Marketing Services"
              title="Everything you need to dominate social media"
              description="From Instagram growth to LinkedIn lead generation — Aixoniq Technologies provides a complete suite of social media services built to deliver measurable results."
              center
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full hover:border-white/15 transition-all duration-300">
                  <ServiceIcon emoji={service.icon} className="mb-4" />
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/42 leading-relaxed">{service.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Grow Your Business ── */}
      <Section className="bg-[#050505]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <SectionHeading
                label="Grow Your Business"
                title="Social media is your most powerful growth channel"
              />
              <div className="mt-6 space-y-4 text-sm text-white/50 leading-relaxed">
                <p>
                  Social media is one of the most powerful tools for reaching new customers, building
                  trust, and increasing sales. Our team helps businesses leverage modern marketing
                  techniques to maximise reach, engagement, and conversions.
                </p>
                <p>
                  Whether you are a startup, small business, growing company, or enterprise
                  organisation, we provide scalable social media marketing solutions designed to
                  deliver long-term success.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, label: 'Reach More Customers' },
                  { icon: Users, label: 'Build Brand Trust' },
                  { icon: Target, label: 'Generate Qualified Leads' },
                  { icon: BarChart3, label: 'Increase Sales Revenue' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-xs text-white/50 glass rounded-lg p-3">
                    <Icon className="w-4 h-4 text-white/40 shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-4">
                {[
                  { platform: 'Instagram', metric: 'Avg reach growth', value: '10x in 90 days', icon: '📸' },
                  { platform: 'LinkedIn', metric: 'B2B lead generation', value: '3x more qualified leads', icon: '💼' },
                  { platform: 'Facebook', metric: 'Ad campaign ROAS', value: '4.2x average return', icon: '👍' },
                  { platform: 'YouTube', metric: 'Subscriber growth', value: '500% in 6 months', icon: '▶️' },
                ].map((item) => (
                  <Card key={item.platform} className="flex items-center gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs text-white/35 mb-0.5">{item.platform} · {item.metric}</div>
                      <div className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-syne)' }}>{item.value}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Why Choose Aixoniq Technologies ── */}
      <Section className="bg-[#030303]" id="why-us">
        <Container>
          <FadeIn className="mb-14 text-center">
            <SectionHeading
              label="Why Choose Aixoniq Technologies"
              title="Creativity meets technology meets results"
              description="At Aixoniq Technologies, we combine creativity, technology, artificial intelligence, and data-driven strategies to help businesses achieve exceptional results across social media platforms."
              center
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyReasons.map((r) => (
              <StaggerItem key={r.title}>
                <Card className="h-full flex gap-4">
                  <CheckCircle className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{r.title}</h3>
                    <p className="text-xs text-white/42 leading-relaxed">{r.desc}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Complete Digital Growth Solutions ── */}
      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="mb-12 text-center">
            <SectionHeading
              label="Complete Digital Growth Solutions"
              title="More than social media — full digital transformation"
              description="In addition to social media marketing, Aixoniq Technologies provides a complete range of technology and digital services to help your business grow at every level."
              center
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
            {additionalServices.map((s) => (
              <StaggerItem key={s.label}>
                <Link href={s.href} className="block group">
                  <Card className="text-center hover:border-white/15 transition-all duration-300 group-hover:translate-y-[-2px]">
                    <div className="text-2xl mb-3">{s.icon}</div>
                    <div className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
                      {s.label}
                    </div>
                    <div className="mt-2 text-white/25 group-hover:text-white/50 transition-colors">
                      <ArrowRight className="w-3 h-3 mx-auto" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Results-Driven Mission ── */}
      <Section className="bg-[#030303]">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/4 via-white/2 to-transparent p-10 md:p-14">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 spotlight" />
              <div className="relative z-10 max-w-3xl">
                <p className="label-mono text-[10px] mb-4">Results-Driven Marketing</p>
                <h2 className="display-lg text-white mb-5">
                  Partner with Aixoniq Technologies — transform your digital presence
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  Our mission is to help businesses attract more customers, increase online visibility,
                  strengthen brand authority, and achieve sustainable growth through innovative technology
                  and marketing solutions. Partner with Aixoniq Technologies and transform your digital
                  presence with strategies built for measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/pricing" className="btn-ghost">
                    View Our Packages
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
