import { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/ai-solutions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/website-development`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/mobile-app`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/cybersecurity`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/seo`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/digital-marketing`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/social-media`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/services/cloud-solutions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/portfolio`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/industries`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/pricing`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'daily' as const },
    { url: `${base}/testimonials`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/careers`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms-conditions`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
