import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations';
import { Section, Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Aixoniq Technologies Terms and Conditions — the rules and guidelines governing use of our website and services.',
};

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using the Aixoniq Technologies website (aixoniq.com) or any of our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.',
    },
    {
      title: '2. Services',
      content: 'Aixoniq Technologies provides technology and digital services including AI solutions, website development, mobile app development, cybersecurity services, SEO, digital marketing, social media marketing, and cloud solutions. The scope, deliverables, timelines, and pricing for each engagement are defined in individual project agreements or service contracts.',
    },
    {
      title: '3. Payment Terms',
      content: 'Payment terms are as specified in your project agreement or invoice. For project-based work, a 50% advance payment is required before work commences, with the remaining 50% due upon delivery. Monthly retainer services are billed at the start of each billing cycle. All payments are non-refundable unless otherwise specified in writing. Prices are exclusive of applicable GST.',
    },
    {
      title: '4. Intellectual Property',
      content: 'Upon receipt of full payment, Aixoniq Technologies assigns ownership of all custom deliverables (code, designs, content) created specifically for your project. We retain the right to display completed work in our portfolio unless explicitly agreed otherwise. Third-party components, libraries, and tools used in projects remain subject to their respective licences.',
    },
    {
      title: '5. Confidentiality',
      content: 'Both parties agree to keep confidential any proprietary information, business data, or trade secrets shared during the course of the engagement. This obligation survives the termination of any agreement. We do not sell or share your business information with third parties except as required to deliver our services.',
    },
    {
      title: '6. Warranties & Disclaimers',
      content: 'Aixoniq Technologies warrants that services will be performed with reasonable skill and care. We do not guarantee specific outcomes such as search engine rankings, social media follower counts, or revenue figures, as these depend on factors outside our control. Our website and services are provided "as is" without warranties of any kind beyond those expressly stated.',
    },
    {
      title: '7. Limitation of Liability',
      content: 'To the maximum extent permitted by applicable law, Aixoniq Technologies shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability in any circumstance shall not exceed the total fees paid by you for the specific service giving rise to the claim.',
    },
    {
      title: '8. Cybersecurity Services',
      content: 'Penetration testing and vulnerability assessment services are performed only with explicit written authorisation from the system owner. Any testing is conducted within the agreed scope. Aixoniq Technologies shall not be held liable for any unintended disruption arising from authorised security testing activities.',
    },
    {
      title: '9. Termination',
      content: 'Either party may terminate a service agreement with 30 days written notice. In the event of termination, you are liable for all work completed up to the termination date. Aixoniq Technologies reserves the right to immediately terminate service if payment obligations are not met or if terms are violated.',
    },
    {
      title: '10. Governing Law',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.',
    },
    {
      title: '11. Changes to Terms',
      content: 'Aixoniq Technologies reserves the right to update these Terms and Conditions at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated terms.',
    },
    {
      title: '12. Contact',
      content: 'For any questions regarding these Terms and Conditions, please contact us at legal@aixoniq.com or through our Contact page.',
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-2xl">
            <p className="label-mono text-[10px] mb-4">Legal</p>
            <h1 className="display-xl text-white mb-3">Terms & Conditions</h1>
            <p className="text-white/40 text-sm">Last updated: June 1, 2025</p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-8">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                    {sec.title}
                  </h2>
                  <p className="text-sm text-white/55 leading-relaxed">{sec.content}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
