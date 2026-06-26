import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';

export const metadata: Metadata = { title: 'Payment Successful' };

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center py-20">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            Payment Successful!
          </h1>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            Thank you for your payment. Our team at Aixoniq Technologies will reach out to you within 2–4 business hours to get started on your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
