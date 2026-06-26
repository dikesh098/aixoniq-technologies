'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import { Section, Container } from '@/components/ui';
import { SITE } from '@/lib/constants';

export default function CTASection() {
  return (
    <Section className="bg-[#050505]" id="cta">
      <Container>
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/4 via-white/2 to-transparent p-10 md:p-16 text-center">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-50" />
            {/* Glow */}
            <div className="absolute inset-0 spotlight" />

            <div className="relative z-10">
              <p className="label-mono text-[10px] mb-4">Get Started</p>
              <h2 className="display-lg text-white mb-5 max-w-3xl mx-auto">
                Ready to build something intelligent?
              </h2>
              <p className="text-white/45 text-base max-w-xl mx-auto mb-10">
                Book a free strategy call with Aixoniq Technologies. We&apos;ll understand your business goals and recommend the right solution — no pressure, no jargon.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
