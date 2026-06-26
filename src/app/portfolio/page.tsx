import type { Metadata } from 'next';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, Badge } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio — Our Work',
  description: 'Explore Aixoniq Technologies\' portfolio — AI projects, cybersecurity assessments, websites, mobile apps, SEO results, and digital marketing campaigns.',
};

const projects = [
  { title: 'FinNova AI Support Bot', category: 'AI Solutions', tags: ['OpenAI', 'Next.js', 'Supabase'], desc: 'Built a 24/7 AI customer support agent for a FinTech company — reducing support tickets by 70% and achieving 94% user satisfaction score.', result: '70% ticket reduction' },
  { title: 'SecureBank Penetration Test', category: 'Cybersecurity', tags: ['OWASP', 'Kali Linux', 'Burp Suite'], desc: 'Full-scope penetration test for a private bank. Discovered 12 critical vulnerabilities including SQL injection and privilege escalation paths — all remediated before public audit.', result: '12 critical vulns found' },
  { title: 'GreenLeaf E-commerce Platform', category: 'Web Development', tags: ['Next.js', 'Shopify', 'Stripe'], desc: 'Complete e-commerce rebuild with AI-powered product recommendations and advanced checkout flows. Conversion rate increased by 3.4x post-launch.', result: '3.4x conversion rate' },
  { title: 'Urban Nest Social Media Growth', category: 'Social Media Marketing', tags: ['Instagram', 'Facebook', 'Reels'], desc: 'Grew a real estate brand from 1,200 to 47,000 Instagram followers in 4 months using targeted reels, influencer partnerships, and paid campaigns.', result: '47K followers in 4 months' },
  { title: 'LogiTrack Mobile App', category: 'Mobile Development', tags: ['Flutter', 'Firebase', 'Google Maps'], desc: 'Cross-platform logistics tracking app for 10,000+ daily users. Real-time GPS tracking, driver management, and automated customer notifications.', result: '10K+ daily active users' },
  { title: 'EduMentor SEO Campaign', category: 'SEO', tags: ['Technical SEO', 'Content', 'Link Building'], desc: 'Took an EdTech platform from page 4 to position 1 for 28 high-intent keywords in 6 months. Organic traffic increased from 3K to 22K monthly visits.', result: '633% traffic increase' },
  { title: 'MedCare Appointment Platform', category: 'Web Development', tags: ['React', 'Node.js', 'PostgreSQL'], desc: 'HIPAA-compliant patient appointment and telemedicine platform serving 50 clinics across Maharashtra with real-time availability and video consultations.', result: '50 clinics served' },
  { title: 'StartupX Google Ads Campaign', category: 'Digital Marketing', tags: ['Google Ads', 'PPC', 'CRO'], desc: 'Managed ₹5L/month Google Ads budget for a SaaS startup. Achieved 4.7x ROAS with CPL reduced from ₹1,200 to ₹280 through aggressive optimisation.', result: '4.7x ROAS achieved' },
  { title: 'CloudScale AWS Migration', category: 'Cloud Solutions', tags: ['AWS', 'Docker', 'Terraform'], desc: 'Migrated a 12-service legacy monolith to AWS ECS microservices architecture. Reduced infrastructure costs by 42% while improving uptime to 99.97%.', result: '42% cost reduction' },
];

const categories = ['All', 'AI Solutions', 'Cybersecurity', 'Web Development', 'Mobile Development', 'Social Media Marketing', 'SEO', 'Digital Marketing', 'Cloud Solutions'];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Our Work</p>
            <h1 className="display-xl text-white mb-5">Projects that speak for themselves</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Real projects, real results. Explore how Aixoniq Technologies has helped businesses across industries grow, secure, and scale with intelligent technology.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          {/* Category filter (static display) */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span key={cat} className={`px-3 py-1.5 rounded-full text-xs cursor-pointer transition-all border ${cat === 'All' ? 'bg-white text-black border-white' : 'border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'}`}>
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <Card className="h-full flex flex-col hover:border-white/15 transition-all">
                  {/* Category + result */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge>{project.category}</Badge>
                    <span className="text-[10px] text-white/35 font-mono" style={{ fontFamily: 'var(--font-jetbrains)' }}>{project.result}</span>
                  </div>
                  {/* Mock visual */}
                  <div className="w-full h-32 rounded-xl bg-white/3 border border-white/5 mb-4 flex items-center justify-center">
                    <span className="text-white/15 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>project preview</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{project.title}</h3>
                  <p className="text-xs text-white/42 leading-relaxed flex-1 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/35">{tag}</span>
                    ))}
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
