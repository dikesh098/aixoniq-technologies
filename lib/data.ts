import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Cpu,
  Sparkles,
  Code2,
  Globe,
  Smartphone,
  Building2,
  GraduationCap,
  Stethoscope,
  Users2,
  Cloud,
  ShieldCheck,
  Radar,
  KeyRound,
  BarChart3,
  LineChart,
  Workflow,
  PenTool,
  Megaphone,
  Plug,
  LifeBuoy,
  Landmark,
  HeartPulse,
  Home as HomeIcon,
  Building,
  Wallet,
  ShoppingBag,
  Factory,
  Hotel,
  Rocket,
  HandHeart,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  group: string;
};

export const SERVICES: Service[] = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description: "Custom AI systems trained on your workflows, from decision support to predictive tooling.",
    group: "AI & Data",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Models built for a specific outcome, then monitored, retrained, and kept honest in production.",
    group: "AI & Data",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "Chat assistants, content engines, and copilots wired into the tools your team already uses.",
    group: "AI & Data",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turning scattered spreadsheets and logs into dashboards people actually check every morning.",
    group: "AI & Data",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Reporting layers that surface the three numbers your leadership team argues about most.",
    group: "AI & Data",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Bespoke systems built to your process, not the other way around.",
    group: "Engineering",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, SEO-sound sites on Next.js — built to load in under a second on a mid-range phone.",
    group: "Engineering",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feeling apps for iOS and Android from a single, maintainable codebase.",
    group: "Engineering",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "Clean, documented APIs that make integrating with you a non-event for partners.",
    group: "Engineering",
  },
  {
    icon: Building2,
    title: "ERP Solutions",
    description: "Operations software modeled on how your institution actually runs, department by department.",
    group: "Enterprise Systems",
  },
  {
    icon: GraduationCap,
    title: "College ERP",
    description: "Admissions, fees, attendance, faculty and exam workflows in one system of record.",
    group: "Enterprise Systems",
  },
  {
    icon: Users2,
    title: "School Management System",
    description: "Everything a school office runs on daily — parents included — without the paper trail.",
    group: "Enterprise Systems",
  },
  {
    icon: Stethoscope,
    title: "Hospital Management System",
    description: "Patient records, billing, pharmacy and staff rosters, built for the pace of a ward, not an office.",
    group: "Enterprise Systems",
  },
  {
    icon: Workflow,
    title: "CRM Development",
    description: "A sales and support system your team updates because it's faster than not updating it.",
    group: "Enterprise Systems",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migration, architecture, and cost control across AWS and Azure — sized to what you need this year.",
    group: "Cloud & Security",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Practical defenses against the threats small and mid-sized teams actually face.",
    group: "Cloud & Security",
  },
  {
    icon: Radar,
    title: "SOC Services",
    description: "Continuous monitoring that catches the incident at 2am, not the postmortem at 9am.",
    group: "Cloud & Security",
  },
  {
    icon: KeyRound,
    title: "Penetration Testing",
    description: "We break in first — with a report your engineers can act on the same week.",
    group: "Cloud & Security",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Hardened configurations, least-privilege access, and audit trails that hold up under scrutiny.",
    group: "Cloud & Security",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Removing the manual steps between one system and the next.",
    group: "Growth & Design",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Interfaces designed around the task at hand, tested with the people who'll use them.",
    group: "Growth & Design",
  },
  {
    icon: Megaphone,
    title: "SEO & Digital Marketing",
    description: "Search engine optimization, paid ads, and content strategy — SEO related services built to compound rankings instead of resetting every quarter.",
    group: "Growth & Design",
  },
  {
    icon: BarChart3,
    title: "Search Engine Optimization (SEO)",
    description: "Technical SEO audits, on-page optimization, local SEO, and link building — the full range of SEO related services to help your business rank on Google.",
    group: "Growth & Design",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description: "A team that still answers six months after launch, not just at handover.",
    group: "Growth & Design",
  },
];

export const SERVICE_GROUPS = Array.from(new Set(SERVICES.map((s) => s.group)));

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  { icon: GraduationCap, title: "Education", description: "ERP, LMS, and admission systems for colleges and schools." },
  { icon: HeartPulse, title: "Healthcare", description: "Patient management and compliant record-keeping for clinics and hospitals." },
  { icon: HomeIcon, title: "Real Estate", description: "Listing platforms, CRM, and site-visit scheduling for developers and brokers." },
  { icon: Landmark, title: "Government", description: "Public-facing portals built for accessibility, scale, and accountability." },
  { icon: Wallet, title: "Finance", description: "Secure applications for lending, payments, and compliance-heavy workflows." },
  { icon: ShoppingBag, title: "Retail", description: "Inventory, POS, and e-commerce systems that stay in sync across channels." },
  { icon: Factory, title: "Manufacturing", description: "Production tracking and supply-chain visibility from floor to ledger." },
  { icon: Hotel, title: "Hospitality", description: "Booking, staff, and guest-experience systems for hotels and resorts." },
  { icon: Rocket, title: "Startups", description: "MVPs built fast enough to matter, and structured to survive scaling." },
  { icon: HandHeart, title: "NGOs", description: "Donor, volunteer, and program-tracking tools sized to a lean budget." },
];

export type Solution = {
  category: string;
  items: string[];
  description: string;
};

export const SOLUTIONS: Solution[] = [
  {
    category: "Education ERP",
    description: "A single system covering the academic year end to end.",
    items: ["College Management System", "Learning Management System", "Admission Portal", "Student Portal", "Faculty Portal"],
  },
  {
    category: "Hospital ERP",
    description: "Clinical and administrative operations under one roof.",
    items: ["Inventory System", "Payroll", "Attendance", "Visitor Management"],
  },
  {
    category: "Intelligent Operations",
    description: "The AI and HR layer that keeps everything else running.",
    items: ["AI Chatbot", "HRMS"],
  },
];

export const TECH_STACK = [
  "React", "Next.js", "Node.js", "Python", "Java", "Flutter",
  "MongoDB", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes",
  "OpenAI", "TensorFlow", "GitHub",
];

export const STATS = [
  { label: "Projects delivered", value: 60, suffix: "+" },
  { label: "Clients served", value: 40, suffix: "+" },
  { label: "Countries reached", value: 3, suffix: "" },
  { label: "Engineers on the bench", value: 12, suffix: "+" },
  { label: "Years building", value: 4, suffix: "+" },
  { label: "On-time delivery rate", value: 96, suffix: "%" },
];

export const PROCESS = [
  { step: "Discovery", detail: "We map the actual workflow, not the assumed one — talking to the people who'll use the system daily." },
  { step: "Planning", detail: "Scope, architecture, and timeline set down in writing before a line of code is committed." },
  { step: "UI/UX", detail: "Interfaces prototyped and reviewed with you before engineering builds against them." },
  { step: "Development", detail: "Iterative builds shipped to a staging environment you can check in on anytime." },
  { step: "Testing", detail: "Functional, security, and load testing — not just a demo that happens to work on our machine." },
  { step: "Deployment", detail: "A release plan with a rollback path, not a Friday-night leap of faith." },
  { step: "Support", detail: "Maintenance windows, monitoring, and a direct line to the team that built it." },
];

export const TESTIMONIALS = [
  {
    quote: "They rebuilt our entire booking and compliance workflow and actually stuck around after launch to fix the edge cases we hadn't thought of.",
    name: "Operations Lead",
    org: "Compliance services firm, Nagpur",
  },
  {
    quote: "The team scoped our ERP around how our office already worked instead of forcing us into a template.",
    name: "Administrator",
    org: "Higher education institute, Gondia",
  },
  {
    quote: "Clear timelines, clean handovers, and a codebase our own developers could pick up without a walkthrough.",
    name: "Founder",
    org: "Early-stage startup",
  },
];

export const WHY_US = [
  { title: "AI-first approach", detail: "Every system we design asks where intelligence should live in it, not whether to bolt some on later." },
  { title: "Enterprise architecture", detail: "Built to the standard of systems that need to run for a decade, sized to a project that needs to ship this quarter." },
  { title: "Affordable pricing", detail: "Quoted against your actual scope, not a rate card built for a bigger client." },
  { title: "Experienced engineers", detail: "The people who scope your project are the ones who build it." },
  { title: "Dedicated support", detail: "A maintenance window and a named contact, not a ticket into a queue." },
  { title: "Scalable systems", detail: "Architected so your next thousand users don't mean a rewrite." },
  { title: "Secure applications", detail: "Security reviewed at the design stage, not patched in after an incident." },
  { title: "On-time delivery", detail: "Timelines built with buffer for the unexpected, and communicated the moment they shift." },
];

export type CareerRole = {
  title: string;
  type: string;
  location: string;
  description: string;
};

export const OPEN_ROLES: CareerRole[] = [
  { title: "AI/ML Engineer — Fresher", type: "Full-time", location: "Hyderabad / Remote", description: "Build and fine-tune models for client-facing AI features, from chatbots to predictive tools." },
  { title: "Full-Stack Developer", type: "Full-time", location: "Gondia / Remote", description: "Next.js, TypeScript, and Node across client ERP and web platforms." },
  { title: "Cybersecurity Intern", type: "Internship", location: "Remote", description: "Assist on penetration tests and SOC monitoring under senior guidance." },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", description: "Own interface design across web and mobile client engagements." },
];

export type BlogCategory = "AI" | "Cybersecurity" | "Technology" | "Programming" | "Business" | "Cloud" | "ERP";

export const BLOG_CATEGORIES: BlogCategory[] = ["AI", "Cybersecurity", "Technology", "Programming", "Business", "Cloud", "ERP"];

export const BLOG_POSTS = [
  { title: "What an ERP actually needs to replace a spreadsheet habit", category: "ERP" as BlogCategory, excerpt: "Most ERP rollouts fail on adoption, not architecture. Here's what makes staff actually switch." },
  { title: "Penetration testing for teams that have never been tested", category: "Cybersecurity" as BlogCategory, excerpt: "A practical first-scan checklist before you commission a full engagement." },
  { title: "Where a chatbot earns its place in a support workflow", category: "AI" as BlogCategory, excerpt: "The cases where generative AI genuinely reduces ticket volume — and where it just adds noise." },
  { title: "Choosing between AWS and Azure for a mid-sized rollout", category: "Cloud" as BlogCategory, excerpt: "Cost, compliance, and team familiarity, weighed against each other honestly." },
  { title: "The real cost of a slow admin panel", category: "Business" as BlogCategory, excerpt: "How interface latency compounds into hours of staff time a week." },
  { title: "Next.js 15 in production: what changed and what to watch", category: "Programming" as BlogCategory, excerpt: "Notes from migrating three client codebases to the App Router." },
];

export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
};

export const PORTFOLIO: PortfolioProject[] = [
  /*
  {
    title: "Graduate Constituency Election Portal",
    category: "Government",
    summary: "A voter assistance and Form 18 guidance platform for the Nagpur Graduates' Constituency, with OTP verification and document upload.",
    stack: ["Next.js 15", "TypeScript", "MongoDB", "Cloudinary"],
  },
  */
   {
  title: "Smart Learning Management System",
  category: "Education",
  summary:
    "A modern web platform that enables students and instructors to manage courses, assignments, attendance, and progress tracking through an intuitive dashboard.",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "eSakha — Government & Digital Services",
    category: "Digital Agency",
    summary: "A full rebuild of a Nagpur-based service provider's platform, covering compliance filings and digital services end to end.",
    stack: ["Next.js 15", "Supabase", "Razorpay", "OpenAI"],
  },
  {
  title: "TaskFlow Project Manager",
  category: "Productivity",
  summary:
    "A collaborative project management application featuring task tracking, team collaboration, real-time notifications, and analytics dashboards.",
  stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS"],
},
  /*
  {
    title: "AIFS College Management Portal",
    category: "Education",
    summary: "A multi-role portal for the Asian Institute of Fire Safety, covering students, faculty, and administration across 15+ modules.",
    stack: ["React", "Node.js", "Express", "MySQL"],
  },
  */
];
