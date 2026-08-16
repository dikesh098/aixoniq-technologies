export const technologies: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'Supabase', 'PostgreSQL', 'Three.js', 'Tailwind CSS',
  'AWS', 'Docker', 'Git', 'AI / ML Tools',
];

// Placeholder projects — replace via the `projects` Supabase table.
export const projects = [
  { n: '01', title: 'Nova Commerce', cat: 'AI · E-Commerce', challenge: 'A retailer needed personalization at scale without a data-science team.', solution: 'Built a recommendation engine on top of existing catalog data with a lightweight admin.', tech: 'React, Python, PostgreSQL' },
  { n: '02', title: 'Fleet Sense', cat: 'Automation · Logistics', challenge: 'Manual dispatch decisions were slowing delivery times.', solution: 'Automated routing and predictive maintenance workflows integrated into daily ops.', tech: 'Node.js, AWS, ML' },
  { n: '03', title: 'Orbit Health', cat: 'Mobile · Healthcare', challenge: 'Patients dropped off during onboarding on the legacy app.', solution: 'Redesigned the mobile experience end-to-end and rebuilt the app natively.', tech: 'React Native, Supabase' },
  { n: '04', title: 'Lumen Cloud', cat: 'Cloud · Infrastructure', challenge: 'Scaling costs were unpredictable during traffic spikes.', solution: 'Migrated to a containerized, auto-scaling cloud architecture.', tech: 'Docker, AWS, Terraform' },
];

// Placeholder — replace via the `testimonials` Supabase table.
export const testimonials = [
  { quote: 'Aixoniq transformed our idea into a product we could actually launch.', name: 'Placeholder Client', role: 'Founder' },
  { quote: 'They think like engineers and design like an agency. Rare combination.', name: 'Placeholder Client', role: 'CTO' },
  { quote: 'Fast, technical, and genuinely invested in the outcome — not just the delivery.', name: 'Placeholder Client', role: 'COO' },
];
