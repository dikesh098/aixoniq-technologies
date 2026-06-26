import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations';
import { Section, Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Aixoniq Technologies Privacy Policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="max-w-2xl">
            <p className="label-mono text-[10px] mb-4">Legal</p>
            <h1 className="display-xl text-white mb-3">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last updated: June 1, 2025</p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
              <div className="space-y-8 text-white/55 text-sm leading-relaxed">

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>1. Introduction</h2>
                  <p>Aixoniq Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website, you agree to the collection and use of information in accordance with this policy.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>2. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                    <li><strong className="text-white/70">Personal Information:</strong> Name, email address, phone number, company name provided via contact forms, lead capture forms, or consultation bookings.</li>
                    <li><strong className="text-white/70">Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other diagnostic data collected automatically via analytics tools.</li>
                    <li><strong className="text-white/70">Payment Information:</strong> Processed securely through Razorpay or Stripe. We do not store full card details on our servers.</li>
                    <li><strong className="text-white/70">Communications:</strong> Records of email or chat communications you have with us for support or business purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>3. How We Use Your Information</h2>
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                    <li>Respond to enquiries and provide requested services</li>
                    <li>Send project updates, invoices, and service communications</li>
                    <li>Send newsletters and marketing materials (with your consent)</li>
                    <li>Improve our website and service offerings</li>
                    <li>Comply with legal obligations and resolve disputes</li>
                    <li>Prevent fraudulent activity and ensure security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>4. Data Storage & Security</h2>
                  <p>Your data is stored securely on Supabase (hosted on AWS). We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, and access control policies. Despite these measures, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>5. Third-Party Services</h2>
                  <p>We use the following third-party services that may collect and process your data:</p>
                  <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
                    <li><strong className="text-white/70">Supabase</strong> — database and authentication</li>
                    <li><strong className="text-white/70">Razorpay / Stripe</strong> — payment processing</li>
                    <li><strong className="text-white/70">Google Analytics</strong> — website analytics</li>
                    <li><strong className="text-white/70">Vercel</strong> — website hosting</li>
                  </ul>
                  <p className="mt-2">Each third party has its own privacy policy governing their data use.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>6. Your Rights</h2>
                  <p>You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, opt out of marketing communications at any time, and lodge a complaint with a data protection authority. To exercise these rights, contact us at <a href="mailto:privacy@aixoniq.com" className="text-white/70 hover:text-white transition-colors">privacy@aixoniq.com</a>.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>7. Cookies</h2>
                  <p>We use essential cookies to ensure the website functions correctly, and analytics cookies (with your consent) to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>8. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically. We will notify you of any significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>9. Contact Us</h2>
                  <p>For any privacy-related questions or concerns, contact Aixoniq Technologies at:</p>
                  <div className="mt-2 ml-2 space-y-1">
                    <p>Email: <a href="mailto:privacy@aixoniq.com" className="text-white/70 hover:text-white transition-colors">privacy@aixoniq.com</a></p>
                    <p>Address: Mumbai, Maharashtra, India</p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
