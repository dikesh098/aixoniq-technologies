import type { Service } from '@/types';

// Fallback content used until the `services` Supabase table is populated.
// Mirrors the services table schema — safe to seed directly from this file.
export const services: Service[] = [
  { id: '1', slug: 'ai-ml', order_index: 1, icon: 'brain', title: 'AI & Machine Learning', description: 'Intelligent systems that automate decisions and unlock insights hiding in your data.' },
  { id: '2', slug: 'web-development', order_index: 2, icon: 'code', title: 'Web Development', description: 'High-performance websites and web applications built to move as fast as your business.' },
  { id: '3', slug: 'mobile-development', order_index: 3, icon: 'smartphone', title: 'Mobile Development', description: 'Modern mobile experiences engineered for scale, on iOS and Android alike.' },
  { id: '4', slug: 'ui-ux-design', order_index: 4, icon: 'layout', title: 'UI/UX Design', description: 'Interfaces designed around real people and real business outcomes — not trends.' },
  { id: '5', slug: 'cloud-solutions', order_index: 5, icon: 'cloud', title: 'Cloud Solutions', description: 'Secure, scalable cloud infrastructure that grows quietly in the background.' },
  { id: '6', slug: 'ai-automation', order_index: 6, icon: 'zap', title: 'AI Automation', description: 'Automate repetitive workflows and business processes so your team can focus upward.' },
  { id: '7', slug: 'digital-marketing', order_index: 7, icon: 'trending-up', title: 'Digital Marketing', description: 'Data-driven strategies that grow digital presence with measurable outcomes.' },
  { id: '8', slug: 'custom-software', order_index: 8, icon: 'terminal', title: 'Custom Software', description: "Purpose-built technology engineered for the requirements off-the-shelf can't meet." },
];
