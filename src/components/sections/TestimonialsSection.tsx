'use client';

import { Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';

const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'CTO',
    company: 'FinNova Solutions',
    content: 'Aixoniq Technologies built our AI customer support system from scratch. Response times dropped by 70% and our customer satisfaction score hit an all-time high. Exceptional team.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'GreenLeaf E-commerce',
    content: 'Their SEO and digital marketing work took our organic traffic from 2,000 to 18,000 monthly visitors in 6 months. Our revenue doubled. I cannot recommend them highly enough.',
    rating: 5,
  },
  {
    name: 'Arjun Kapoor',
    role: 'CISO',
    company: 'SecureBank India',
    content: 'The penetration testing team at Aixoniq found critical vulnerabilities our internal team had missed for years. Their detailed remediation report was invaluable. True security experts.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Head of Marketing',
    company: 'Urban Nest Realty',
    content: 'Our social media presence went from near-zero to 45,000 engaged followers in 4 months. Aixoniq Technologies understands brand storytelling and delivers consistent results.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'CEO',
    company: 'LogiTrack Pvt. Ltd.',
    content: 'The mobile app they built for us handles 10,000+ daily transactions flawlessly. Clean architecture, great UI, and the team was responsive throughout. Outstanding delivery.',
    rating: 5,
  },
  {
    name: 'Ananya Rao',
    role: 'Product Manager',
    company: 'EduMentor EdTech',
    content: 'Aixoniq integrated a custom AI tutoring agent into our platform. Student engagement increased by 40% within the first month. Their AI expertise is genuinely best-in-class.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-[#030303]" id="testimonials">
      <Container>
        <FadeIn className="mb-14 text-center">
          <SectionHeading
            label="Client Testimonials"
            title={<>Trusted by businesses<br />across India</>}
            description="Real results, real clients. Here is what companies say after working with Aixoniq Technologies."
            center
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="h-full flex flex-col">
                {/* Stars */}
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
                    <div className="text-sm font-medium text-white/80" style={{ fontFamily: 'var(--font-syne)' }}>
                      {t.name}
                    </div>
                    <div className="text-[11px] text-white/35">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
