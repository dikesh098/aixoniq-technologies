import { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { CustomCursor } from '@/components/cursor/CustomCursor';
import { Hero } from '@/components/hero/Hero';
import { Services } from '@/components/services/Services';
import { AISection } from '@/components/ai/AISection';
import { Automation } from '@/components/automation/Automation';
import { Work } from '@/components/projects/Work';
import { TechStack } from '@/components/technology/TechStack';
import { WhyAixoniq } from '@/components/why/WhyAixoniq';
import { Process } from '@/components/process/Process';
import { About } from '@/components/about/About';
import { Stats } from '@/components/stats/Stats';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <Navbar mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((o) => !o)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div id="boot-logo" className="fixed inset-0 z-[2000] bg-void flex items-center justify-center font-display text-[15px] tracking-[0.4em]">
        <span id="boot-logo-text" className="opacity-0">AIXONIQ</span>
      </div>

      <main>
        <Hero />
        <Services />
        <AISection />
        <Automation />
        <Work />
        <TechStack />
        <WhyAixoniq />
        <Process />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
