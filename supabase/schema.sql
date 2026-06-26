-- ============================================================
-- AIXONIQ TECHNOLOGIES — SUPABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── LEADS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new','contacted','qualified','converted','closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── CONTACT REQUESTS ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread'
    CHECK (status IN ('unread','read','replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── NEWSLETTER SUBSCRIBERS ────────────────────────────────
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PAYMENTS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id TEXT UNIQUE NOT NULL,
  payment_id TEXT,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT NOT NULL DEFAULT 'created'
    CHECK (status IN ('created','paid','failed','refunded')),
  service TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── BLOG POSTS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author TEXT DEFAULT 'Aixoniq Technologies',
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  meta_title TEXT,
  meta_description TEXT,
  read_time INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── PORTFOLIO ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  cover_image TEXT,
  images TEXT[] DEFAULT '{}',
  technologies TEXT[] DEFAULT '{}',
  client TEXT,
  results TEXT[] DEFAULT '{}',
  url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── TESTIMONIALS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  avatar_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── JOBS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('full-time','part-time','contract','internship')),
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── JOB APPLICATIONS ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT,
  status TEXT NOT NULL DEFAULT 'applied'
    CHECK (status IN ('applied','reviewing','shortlisted','rejected','hired')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── UPDATED_AT TRIGGERS ───────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER payments_updated_at BEFORE UPDATE ON payments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── ROW LEVEL SECURITY ────────────────────────────────────
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Public INSERT (anyone can submit forms)
CREATE POLICY "Public can insert leads" ON leads FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public can insert contacts" ON contact_requests FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public can subscribe newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public can insert payments" ON payments FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public can insert applications" ON job_applications FOR INSERT WITH CHECK (TRUE);

-- Public READ (blog, portfolio, testimonials, jobs)
CREATE POLICY "Public can read published posts" ON blog_posts FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Public can read portfolio" ON portfolio FOR SELECT USING (TRUE);
CREATE POLICY "Public can read testimonials" ON testimonials FOR SELECT USING (TRUE);
CREATE POLICY "Public can read active jobs" ON jobs FOR SELECT USING (is_active = TRUE);

-- Service role has full access (admin dashboard uses service role key)
-- No additional policies needed — service role bypasses RLS

-- ── STORAGE ───────────────────────────────────────────────
-- Run these in Supabase Dashboard > Storage
-- CREATE BUCKET 'blog-images' (public: true)
-- CREATE BUCKET 'portfolio-images' (public: true)
-- CREATE BUCKET 'resumes' (public: false)
-- CREATE BUCKET 'avatars' (public: true)

-- ── SEED DATA ─────────────────────────────────────────────
INSERT INTO testimonials (name, role, company, content, rating, is_featured) VALUES
  ('Rahul Mehta', 'CTO', 'FinNova Solutions', 'Aixoniq Technologies built our AI customer support system from scratch. Response times dropped by 70% and our CSAT hit an all-time high.', 5, TRUE),
  ('Priya Sharma', 'Founder', 'GreenLeaf E-commerce', 'Their SEO and digital marketing took our organic traffic from 2,000 to 18,000 monthly visitors in 6 months. Revenue doubled.', 5, TRUE),
  ('Arjun Kapoor', 'CISO', 'SecureBank India', 'The penetration testing team found critical vulnerabilities our internal team had missed for years. True security experts.', 5, TRUE),
  ('Sneha Patel', 'Head of Marketing', 'Urban Nest Realty', 'Our social media presence went from near-zero to 45,000 engaged followers in 4 months. Consistently outstanding results.', 5, FALSE),
  ('Vikram Singh', 'CEO', 'LogiTrack Pvt. Ltd.', 'The mobile app handles 10,000+ daily transactions flawlessly. Clean architecture, responsive team, outstanding delivery.', 5, FALSE),
  ('Ananya Rao', 'Product Manager', 'EduMentor EdTech', 'Their AI tutoring agent increased student engagement by 40% in the first month. Best-in-class AI expertise.', 5, FALSE)
ON CONFLICT DO NOTHING;

INSERT INTO jobs (title, department, location, type, description, requirements) VALUES
  ('AI/ML Engineer', 'Engineering', 'Mumbai / Remote', 'full-time', 'Build production AI agents, fine-tune LLMs, and design intelligent automation pipelines for enterprise clients.', ARRAY['Python', 'LangChain', 'OpenAI API', 'FastAPI', '2+ years ML experience']),
  ('Full-Stack Developer', 'Engineering', 'Mumbai / Remote', 'full-time', 'Build scalable web applications and client-facing products using modern JavaScript/TypeScript stacks.', ARRAY['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', '2+ years experience']),
  ('Cybersecurity Analyst', 'Security', 'Mumbai', 'full-time', 'Conduct penetration tests, vulnerability assessments, and security audits for clients across industries.', ARRAY['Penetration Testing', 'Kali Linux', 'Burp Suite', 'OWASP', 'CEH or OSCP preferred'])
ON CONFLICT DO NOTHING;
