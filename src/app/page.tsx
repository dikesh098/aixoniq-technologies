import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AISection from '@/components/sections/AISection';
import CyberSection from '@/components/sections/CyberSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE.name} — Building Intelligent Futures`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AISection />
      <CyberSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
