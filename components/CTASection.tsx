import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  title = "Have a project in mind?",
  description = "Tell us what you're building. We'll reply with next steps, not a sales script.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-void py-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/3 -rotate-12 bg-beam opacity-20 animate-slash" />
      <div className="shell relative z-10 text-center">
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-ink-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn-secondary-dark">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
