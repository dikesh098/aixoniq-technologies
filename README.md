# Aixoniq Technologies — Official Website

**Production-ready Next.js 15 enterprise website for Aixoniq Technologies.**

> Building Intelligent Futures.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Backend | Supabase (PostgreSQL + Auth + Storage) |
| Payments | Razorpay |
| AI Assistant | Claude (Anthropic) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── about/                    # About Us
│   ├── services/
│   │   ├── ai-solutions/         # AI Solutions page
│   │   ├── website-development/  # Web Dev page
│   │   ├── mobile-app/           # Mobile App page
│   │   ├── cybersecurity/        # Cybersecurity page
│   │   ├── seo/                  # SEO page
│   │   ├── digital-marketing/    # Digital Marketing page
│   │   ├── social-media/         # Social Media Marketing page
│   │   └── cloud-solutions/      # Cloud Solutions page
│   ├── portfolio/                # Portfolio / Our Work
│   ├── industries/               # Industries We Serve
│   ├── pricing/                  # Pricing
│   ├── blog/                     # Blog listing
│   ├── careers/                  # Careers
│   ├── testimonials/             # Testimonials
│   ├── contact/                  # Contact Us
│   ├── faq/                      # FAQ
│   ├── privacy-policy/           # Privacy Policy
│   ├── terms-conditions/         # Terms & Conditions
│   ├── payment/
│   │   ├── success/              # Payment success
│   │   └── failure/              # Payment failure
│   ├── admin/                    # Admin dashboard
│   │   ├── dashboard/            # Overview
│   │   └── leads/                # Lead management
│   └── api/
│       ├── chat/                 # Aixo AI assistant API
│       ├── contact/              # Contact form handler
│       └── payment/              # Razorpay integration
├── components/
│   ├── animations/               # Framer Motion components
│   ├── forms/                    # ContactForm, NewsletterForm
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # HeroSection, AISection, etc.
│   └── ui/                       # Card, Badge, Section, etc.
├── lib/
│   ├── constants.ts              # Site config, nav, services data
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Utility functions
├── styles/
│   └── globals.css               # Global CSS & design tokens
└── types/
    └── index.ts                  # TypeScript interfaces
supabase/
└── schema.sql                    # Complete database schema + RLS + seed
```

---

## ⚙️ Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxx
RAZORPAY_KEY_SECRET=your_secret

# Anthropic (Aixo AI assistant)
ANTHROPIC_API_KEY=sk-ant-xxx

# App
NEXT_PUBLIC_SITE_URL=https://aixoniq.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+911234567890
NEXT_PUBLIC_SUPPORT_EMAIL=hello@aixoniq.com
```

---

## 🗄️ Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** → paste the entire contents of `supabase/schema.sql` → Run
3. Go to **Storage** → create buckets:
   - `blog-images` (public)
   - `portfolio-images` (public)
   - `resumes` (private)
   - `avatars` (public)
4. Copy your **Project URL** and **anon key** from Settings → API into `.env.local`

---

## 💳 Razorpay Setup

1. Create account at [razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys → Generate Live Key
3. Add `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to `.env.local`
4. Add your domain to Razorpay's allowed origins

---

## 🤖 Anthropic Setup (Aixo AI)

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Add `ANTHROPIC_API_KEY` to `.env.local`
3. Aixo uses `claude-haiku-4-5-20251001` for fast, cost-effective responses

---

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 🚀 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# Project Settings → Environment Variables → add all from .env.example
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

---

## 📄 Pages Included

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about` |
| Services Overview | `/services` |
| AI Solutions | `/services/ai-solutions` |
| Website Development | `/services/website-development` |
| Mobile App Development | `/services/mobile-app` |
| Cybersecurity | `/services/cybersecurity` |
| SEO Services | `/services/seo` |
| Digital Marketing | `/services/digital-marketing` |
| **Social Media Marketing** | `/services/social-media` |
| Cloud Solutions | `/services/cloud-solutions` |
| Portfolio | `/portfolio` |
| Industries | `/industries` |
| Pricing | `/pricing` |
| Blog | `/blog` |
| Careers | `/careers` |
| Testimonials | `/testimonials` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-conditions` |
| Payment Success | `/payment/success` |
| Payment Failure | `/payment/failure` |
| Admin Dashboard | `/admin/dashboard` |
| Admin Leads | `/admin/leads` |

---

## 🔐 Admin Dashboard

Access at `/admin/dashboard`. Uses the Supabase service role key server-side to bypass RLS and access all data.

**Protect in production** by adding authentication middleware (Supabase Auth) before deploying.

---

## 🎨 Design System

- **Colors:** Black `#050505`, White `#FFFFFF`, subtle white/gray accents
- **Fonts:** Syne (headings), Inter (body), JetBrains Mono (labels/code)
- **Effects:** Glassmorphism, grid backgrounds, radial spotlights, glow effects
- **Animations:** Framer Motion — fade-in, stagger, slide-up on scroll

---

## 📞 Support

For questions about this project, contact **Aixoniq Technologies**:
- Email: hello@aixoniq.com
- Website: https://aixoniq.com
