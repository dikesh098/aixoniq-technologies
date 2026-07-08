# Aixoniq Technologies — Website

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion scaffold for the
Aixoniq Technologies corporate site, built to the brief: premium/enterprise
feel, AI + software + ERP + cybersecurity + cloud services, full SEO layer.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This was build-tested in a sandboxed
environment with no access to Google Fonts — on your machine with normal
internet access, `npm run build` will fetch Space Grotesk, Inter, and
JetBrains Mono automatically via `next/font/google` (no extra setup).

## What's implemented

- **Pages**: Home, About, Services, Solutions, Portfolio, Industries,
  Careers, Blog, Contact, Privacy Policy, Terms — all real route files
  under `app/`.
- **Design system**: light-first body (white/soft-gray, navy text, royal
  blue + cyan accents) with dark "bookend" sections for the Hero and
  Footer/CTA banners, per your last note about not overdoing dark colors.
  All tokens are in `tailwind.config.ts`.
- **Signature motif**: a diagonal "beam" animation echoing the bolt in
  your logo, used as a section divider (`.slash-divider`) instead of a
  generic straight rule.
- **SEO**:
  - Per-page `metadata` (title <60 chars, description <160 chars, OG,
    canonical) — see any `page.tsx`.
  - `app/sitemap.ts` and `app/robots.ts` (Next.js native, served at
    `/sitemap.xml` and `/robots.txt`).
  - JSON-LD via `components/JsonLd.tsx` and `lib/schema.ts`: Organization,
    WebSite, LocalBusiness, Service, Breadcrumb, and FAQPage schema.
  - `components/Breadcrumbs.tsx` on every inner page.
  - `components/FAQSection.tsx` with accordion UI + FAQPage schema on
    Home, Services, and Solutions.
  - Primary + local keywords worked into homepage long-form copy, page
    titles, and section headings — written as prose, not stuffed lists.
- **Animation**: Framer Motion scroll-reveals, animated stat counters,
  hover states, and a looping hero beam — kept restrained per section
  rather than layered everywhere.

## What you need to add before launch

1. **Hero footage**: drop a video at `public/hero-loop.mp4` and a poster
   frame at `public/hero-poster.jpg` (referenced in `components/Hero.tsx`).
2. **Logo**: `public/logo.png` (referenced in `lib/schema.ts` and can
   replace the placeholder bolt mark in `Navbar.tsx`/`Footer.tsx`).
3. **Contact form backend**: `components/ContactForm.tsx` has a `TODO`
   where you'll wire a real submit — an `app/api/contact/route.ts` that
   emails aixoniqtechnologies@gmail.com or writes to Supabase, matching
   the pattern you've used on eSakha and the election portal.
4. **Google Maps embed**: swap the placeholder query in
   `app/contact/page.tsx`'s iframe for your actual Business Profile embed
   URL once you have a fixed office address.
5. **Real portfolio links**: `lib/data.ts` → `PORTFOLIO` currently
   summarizes 3 projects without live-preview links; add URLs once
   client sites are public-facing (careful with anything under NDA).
6. **Blog content**: `lib/data.ts` → `BLOG_POSTS` are titles + excerpts
   only. Each needs a real `/blog/[slug]/page.tsx` with full body content
   for the SEO plan to pay off — happy to draft these next.
7. **Privacy Policy / Terms**: currently placeholder text, marked
   `noindex` until you replace them with real policies.

## Structure

```
app/            Route pages (App Router)
components/     Shared UI (Navbar, Hero, ServiceGrid, FAQSection, etc.)
lib/data.ts     All site copy: services, industries, solutions, stats,
                testimonials, process steps, careers, blog, portfolio
lib/schema.ts   JSON-LD schema builders
```
