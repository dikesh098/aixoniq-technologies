import type { Metadata } from 'next';
import Link from 'next/link';
import { XCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = { title: 'Payment Failed' };

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center py-20">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            Payment Failed
          </h1>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            Your payment could not be processed. Please try again or contact us directly and we will help you complete the transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
