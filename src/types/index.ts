export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
  challenge?: string;
  solution?: string;
  result?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar_url: string | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  project_type: string;
  budget: string;
  message: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
