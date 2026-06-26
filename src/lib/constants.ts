export const SITE = {
  name: 'Aixoniq Technologies',
  tagline: 'Building Intelligent Futures.',
  description:
    'Next-generation technology company specializing in AI Solutions, Cybersecurity, Web & App Development, and Digital Marketing. We help businesses accelerate growth through intelligent technology.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aixoniq.com',
  email: 'hello@aixoniq.com',
  phone: '+91 12345 67890',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+911234567890',
  address: 'Mumbai, Maharashtra, India',
  socials: {
    twitter: 'https://twitter.com/aixoniq',
    linkedin: 'https://linkedin.com/company/aixoniq',
    instagram: 'https://instagram.com/aixoniq',
    github: 'https://github.com/aixoniq',
    youtube: 'https://youtube.com/@aixoniq',
  },
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'SEO Services', href: '/services/seo' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Social Media Marketing', href: '/services/social-media' },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom AI chatbots, agents, and automation systems that transform how your business operates.',
    href: '/services/ai-solutions',
    icon: '🤖',
    category: 'ai',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Blazing-fast, conversion-optimized websites built with modern technology stacks.',
    href: '/services/website-development',
    icon: '🌐',
    category: 'web',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that users love.',
    href: '/services/mobile-app',
    icon: '📱',
    category: 'mobile',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Enterprise-grade security: penetration testing, audits, SOC monitoring, and compliance.',
    href: '/services/cybersecurity',
    icon: '🛡️',
    category: 'security',
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: "Dominate Google's first page with our data-driven SEO strategies that drive qualified traffic.",
    href: '/services/seo',
    icon: '📈',
    category: 'marketing',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel digital campaigns: Google Ads, PPC, email, and conversion optimization.',
    href: '/services/digital-marketing',
    icon: '🎯',
    category: 'marketing',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand, grow your audience, and convert followers into customers.',
    href: '/services/social-media',
    icon: '📣',
    category: 'marketing',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture, DevOps, and managed services for scalable infrastructure.',
    href: '/services/cloud-solutions',
    icon: '☁️',
    category: 'cloud',
  },
];

export const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '5+', label: 'Years Experience' },
];

export const INDUSTRIES = [
  'FinTech & Banking',
  'Healthcare & MedTech',
  'E-commerce & Retail',
  'EdTech & Education',
  'Real Estate & PropTech',
  'Manufacturing & Industry',
  'Hospitality & Travel',
  'Logistics & Supply Chain',
  'Legal & Compliance',
  'Media & Entertainment',
];

export const TECHNOLOGIES = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
  { name: 'TensorFlow', category: 'AI' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
];
