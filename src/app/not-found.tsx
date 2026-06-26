import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 spotlight" />
      <Container className="relative z-10">
        <div className="text-center py-20">
          <p className="label-mono text-[10px] mb-6">404 — Page Not Found</p>
          <h1 className="display-xl text-white mb-5">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-white/45 text-base mb-10 max-w-md mx-auto">
            The page you are looking for may have been moved, deleted, or never existed. Let us get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
