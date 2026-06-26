import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import { Section, Container, SectionHeading, Card } from '@/components/ui';
import ContactForm from '@/components/forms/ContactForm';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aixoniq Technologies. Book a free consultation, request a quote, or ask us anything about AI, cybersecurity, web development, or digital marketing.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Get In Touch</p>
            <h1 className="display-xl text-white mb-5">Let&apos;s build something great together</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Whether you need a quote, have a question, or want to explore how Aixoniq Technologies can help your business — we are here and ready to talk.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <FadeIn direction="left" className="lg:col-span-3">
              <Card className="border border-white/8">
                <h2 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
                  Send us a message
                </h2>
                <ContactForm />
              </Card>
            </FadeIn>

            {/* Contact info */}
            <FadeIn direction="right" delay={0.15} className="lg:col-span-2 space-y-5">
              {/* Info cards */}
              {[
                { icon: Mail, label: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Phone, label: 'Call Us', value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: MapPin, label: 'Our Office', value: SITE.address, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <Card key={label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-white/70 hover:text-white transition-colors">{value}</a>
                    ) : (
                      <div className="text-sm text-white/70">{value}</div>
                    )}
                  </div>
                </Card>
              ))}

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="flex gap-4 items-center glass-hover transition-all cursor-pointer border border-white/8 hover:border-white/20">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white/50" />
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">WhatsApp</div>
                    <div className="text-sm text-white/70">Chat directly with our team</div>
                  </div>
                </Card>
              </a>

              {/* Response time */}
              <Card className="flex gap-4 items-start border border-white/8">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Response Time</div>
                  <div className="text-sm text-white/70">We typically respond within 2–4 business hours during working days (Mon–Sat, 9AM–7PM IST).</div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
