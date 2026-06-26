export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'ai' | 'web' | 'mobile' | 'security' | 'marketing' | 'cloud';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar_url?: string;
  created_at: string;
  is_featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author: string;
  category: string;
  tags: string[];
  published_at: string;
  is_published: boolean;
  meta_title?: string;
  meta_description?: string;
  read_time?: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  created_at: string;
}

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  created_at: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  is_active: boolean;
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  name: string;
  email: string;
  phone: string;
  resume_url: string;
  cover_letter?: string;
  status: 'applied' | 'reviewing' | 'shortlisted' | 'rejected' | 'hired';
  created_at: string;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  cover_image?: string;
  images: string[];
  technologies: string[];
  client?: string;
  results?: string[];
  url?: string;
  is_featured: boolean;
  created_at: string;
}

export interface Payment {
  id: string;
  order_id: string;
  payment_id?: string;
  amount: number;
  currency: string;
  status: 'created' | 'paid' | 'failed' | 'refunded';
  service: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  is_active: boolean;
  created_at: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly' | 'one-time';
  description: string;
  features: string[];
  is_popular: boolean;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
