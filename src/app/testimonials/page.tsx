import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what clients say about Aixoniq Technologies — real results from real businesses across AI, cybersecurity, web development, SEO, and digital marketing.',
};

const testimonials = [
  { name: 'Rahul Mehta', role: 'CTO', company: 'FinNova Solutions', rating: 5, content: 'Aixoniq Technologies built our AI customer support system from scratch. Response times dropped by 70% and our customer satisfaction score hit an all-time high. Their AI engineers genuinely understand enterprise-grade system design — exceptional team.' },
  { name: 'Priya Sharma', role: 'Founder', company: 'GreenLeaf E-commerce', rating: 5, content: 'Their SEO and digital marketing work took our organic traffic from 2,000 to 18,000 monthly visitors in 6 months. Our revenue doubled. The transparency in reporting and the quality of strategy is unlike any other agency I have worked with.' },
  { name: 'Arjun Kapoor', role: 'CISO', company: 'SecureBank India', rating: 5, content: 'The penetration testing team at Aixoniq Technologies found critical vulnerabilities our internal team had missed for years. Their detailed remediation report with CVSS scores was invaluable for our board presentation. True security experts.' },
  { name: 'Sneha Patel', role: 'Head of Marketing', company: 'Urban Nest Realty', rating: 5, content: 'Our social media presence went from near-zero to 45,000 engaged followers in 4 months. Aixoniq Technologies understands brand storytelling and consistently delivers high-quality content. The results speak for themselves.' },
  { name: 'Vikram Singh', role: 'CEO', company: 'LogiTrack Pvt. Ltd.', rating: 5, content: 'The mobile app they built for us handles 10,000+ daily transactions flawlessly. Clean architecture, intuitive UI, and the team was responsive and communicative throughout the entire project. Outstanding delivery.' },
  { name: 'Ananya Rao', role: 'Product Manager', company: 'EduMentor EdTech', rating: 5, content: 'Aixoniq integrated a custom AI tutoring agent into our platform that adapts to each student\'s learning pace. Student engagement increased by 40% within the first month. Their AI expertise is genuinely best-in-class in India.' },
  { name: 'Rohan Desai', role: 'Director', company: 'MedCare Clinics', rating: 5, content: 'We needed a HIPAA-compliant patient portal built to a tight deadline. Aixoniq Technologies delivered on time, under budget, and with zero security incidents in 18 months of production. Highly reliable partner.' },
  { name: 'Kavya Nair', role: 'Marketing Lead', company: 'StartupX SaaS', rating: 5, content: 'Our Google Ads ROAS went from 1.8x to 4.7x in three months after switching to Aixoniq Technologies. They overhauled our entire campaign structure, ad creative, and landing pages. Best marketing investment we have made.' },
  { name: 'Sanjay Kulkarni', role: 'Founder', company: 'CloudScale Infra', rating: 5, content: 'The AWS migration Aixoniq handled was seamless — zero downtime, 42% cost reduction, and our infrastructure is now significantly more scalable and secure. Their DevOps team is top-tier.' },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Client Testimonials</p>
            <h1 className="display-xl text-white mb-5">What our clients say</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Real results from real clients. Aixoniq Technologies is trusted by startups, SMBs, and enterprises across India.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="bg-[#030303] border-y border-white/5 py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((s) => (
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <Card className="h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white/60 text-white/60" />
                    ))}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed flex-1 mb-5">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/80" style={{ fontFamily: 'var(--font-syne)' }}>{t.name}</div>
                      <div className="text-[11px] text-white/35">{t.role}, {t.company}</div>
                    </div>
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
