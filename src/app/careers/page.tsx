import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, Badge } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Aixoniq Technologies — build the future of AI, cybersecurity, and digital technology. Explore open positions and apply today.',
};

const jobs = [
  { title: 'AI/ML Engineer', dept: 'Engineering', location: 'Mumbai / Remote', type: 'Full-time', skills: ['Python', 'LangChain', 'OpenAI', 'FastAPI'], desc: 'Build production AI agents, fine-tune LLMs, and design intelligent automation pipelines for enterprise clients.' },
  { title: 'Full-Stack Developer', dept: 'Engineering', location: 'Mumbai / Remote', type: 'Full-time', skills: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'], desc: 'Build scalable web applications and client-facing products using modern JavaScript/TypeScript stacks.' },
  { title: 'Cybersecurity Analyst', dept: 'Security', location: 'Mumbai', type: 'Full-time', skills: ['Penetration Testing', 'Kali Linux', 'Burp Suite', 'OWASP'], desc: 'Conduct penetration tests, vulnerability assessments, and security audits for clients across industries.' },
  { title: 'Digital Marketing Specialist', dept: 'Marketing', location: 'Mumbai / Remote', type: 'Full-time', skills: ['Google Ads', 'Meta Ads', 'SEO', 'Analytics'], desc: 'Plan and execute performance marketing campaigns across paid and organic channels for diverse client portfolios.' },
  { title: 'Social Media Manager', dept: 'Marketing', location: 'Mumbai / Remote', type: 'Full-time', skills: ['Content Creation', 'Instagram', 'LinkedIn', 'Reels'], desc: 'Manage multi-brand social media presence, create engaging content, and run paid social campaigns.' },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Remote', type: 'Full-time', skills: ['Figma', 'Framer', 'Design Systems', 'Prototyping'], desc: 'Design premium user interfaces and experiences for AI-powered products, enterprise websites, and mobile apps.' },
];

const perks = [
  { emoji: '🏠', title: 'Remote-First Culture', desc: 'Work from anywhere in India. Flexibility is built into how we operate.' },
  { emoji: '📚', title: 'Learning Budget', desc: '₹30,000 annual learning budget for courses, certifications, and conferences.' },
  { emoji: '🚀', title: 'Startup Energy', desc: 'Move fast, take ownership, and see your work directly impact client success.' },
  { emoji: '💰', title: 'Competitive Pay', desc: 'Market-leading salaries with performance bonuses and equity options.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-2xl">
            <p className="label-mono text-[10px] mb-4">Join Our Team</p>
            <h1 className="display-xl text-white mb-5">Build the future with Aixoniq Technologies</h1>
            <p className="text-white/50 text-base leading-relaxed">
              We are looking for talented engineers, designers, marketers, and security experts who want to work on meaningful problems with modern technology. If that sounds like you — let&apos;s talk.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Perks */}
      <Section className="bg-[#030303]">
        <Container>
          <FadeIn className="mb-12 text-center">
            <SectionHeading label="Life at Aixoniq" title="Why join us?" center />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <Card className="text-center h-full">
                  <div className="text-2xl mb-3">{perk.emoji}</div>
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{perk.title}</h3>
                  <p className="text-xs text-white/42 leading-relaxed">{perk.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Open roles */}
      <Section className="bg-[#050505]">
        <Container>
          <FadeIn className="mb-12">
            <SectionHeading label="Open Positions" title={`${jobs.length} open roles`} />
          </FadeIn>
          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {jobs.map((job) => (
              <StaggerItem key={job.title}>
                <Card className="hover:border-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-syne)' }}>{job.title}</h3>
                        <Badge>{job.dept}</Badge>
                        <Badge>{job.type}</Badge>
                      </div>
                      <p className="text-xs text-white/42 leading-relaxed mb-3">{job.desc}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-white/35">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/35">
                          <Clock className="w-3 h-3" /> {job.type}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((s) => (
                            <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/35">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Link href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn-ghost shrink-0 text-xs py-2">
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
