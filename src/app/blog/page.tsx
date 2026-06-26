import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Section, Container, SectionHeading, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and expert articles on AI, cybersecurity, web development, SEO, and digital marketing from the Aixoniq Technologies team.',
};

const posts = [
  { slug: 'ai-chatbots-transform-customer-support', title: 'How AI Chatbots Are Transforming Customer Support in 2025', excerpt: 'Explore how businesses are using AI-powered chatbots to cut support costs by up to 60% while delivering faster, more accurate customer service around the clock.', category: 'AI Solutions', readTime: 7, date: 'June 15, 2025' },
  { slug: 'penetration-testing-guide-2025', title: 'The Complete Guide to Penetration Testing for Indian Businesses', excerpt: 'Learn what penetration testing involves, why every business needs it, and how to choose the right cybersecurity partner to protect your digital assets.', category: 'Cybersecurity', readTime: 10, date: 'June 8, 2025' },
  { slug: 'instagram-reels-strategy-2025', title: '10 Instagram Reels Strategies That Drive Actual Business Growth', excerpt: 'Short-form video is the highest-converting content format in 2025. Here are the proven strategies our social media team uses to grow brands on Instagram.', category: 'Social Media', readTime: 6, date: 'May 28, 2025' },
  { slug: 'nextjs-seo-best-practices', title: 'Next.js 15 SEO Best Practices: A Developer\'s Complete Guide', excerpt: 'Technical SEO for Next.js applications — metadata, structured data, Core Web Vitals, and sitemap generation done right from the start.', category: 'SEO', readTime: 12, date: 'May 20, 2025' },
  { slug: 'local-seo-small-business-india', title: 'Local SEO in 2025: How Indian Small Businesses Can Rank on Google', excerpt: 'A practical, step-by-step guide to local SEO for Indian businesses — from Google Business Profile optimisation to building local citations.', category: 'SEO', readTime: 8, date: 'May 12, 2025' },
  { slug: 'flutter-vs-react-native-2025', title: 'Flutter vs React Native in 2025: Which Should You Choose?', excerpt: 'An honest comparison of Flutter and React Native for building your next mobile app — covering performance, developer experience, and ecosystem maturity.', category: 'Mobile Dev', readTime: 9, date: 'May 5, 2025' },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 spotlight" />
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="label-mono text-[10px] mb-4">Insights & Articles</p>
            <h1 className="display-xl text-white mb-5">The Aixoniq Technologies Blog</h1>
            <p className="text-white/50 text-base leading-relaxed">
              Expert insights on AI, cybersecurity, web development, SEO, and digital marketing — written by the practitioners who build and run these systems every day.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section className="bg-[#030303]">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col hover:border-white/15 transition-all group-hover:-translate-y-1">
                    {/* Cover placeholder */}
                    <div className="w-full h-36 rounded-xl bg-white/3 border border-white/5 mb-4 flex items-center justify-center">
                      <span className="text-white/15 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>cover image</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge>{post.category}</Badge>
                      <span className="flex items-center gap-1 text-[11px] text-white/30">
                        <Clock className="w-3 h-3" /> {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-white/90 transition-colors leading-snug" style={{ fontFamily: 'var(--font-syne)' }}>
                      {post.title}
                    </h3>
                    <p className="text-xs text-white/42 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/30">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs text-white/35 group-hover:text-white/60 transition-colors">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
