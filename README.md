# Aixoniq Technologies

A premium, futuristic marketing site for **Aixoniq Technologies** — AI, automation, web/mobile
development, cloud, and design. Built as a cinematic, connected experience anchored by the
**AIXONIQ CORE**, an interactive 3D centerpiece in the hero.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Three.js via React Three Fiber + drei
- GSAP + ScrollTrigger, Lenis (smooth scroll)
- Supabase (contact form, projects, services, testimonials)
- lucide-react

## Getting started

```bash
npm install
cp .env.example .env   # add your Supabase URL + anon key (optional — see below)
npm run dev
```

The site works out of the box without Supabase credentials — it runs in **demo mode**:
the contact form logs submissions to the console, and project/service/testimonial content
falls back to the static data in `src/data/`. Add real credentials to `.env` to go live
(see `supabase/README.md` for the full setup + schema).

## Scripts

| Command           | Description                    |
|--------------------|---------------------------------|
| `npm run dev`       | Start the Vite dev server       |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Preview the production build locally |
| `npm run lint`      | Run ESLint                      |

## Project structure

```
src/
  components/
    navigation/   Navbar, mobile fullscreen nav
    cursor/       Custom magnetic cursor (desktop only)
    hero/         Hero section (mounts the R3F canvas)
    3d/           AixoniqCore, ParticleField — the signature 3D centerpiece
    services/     "What We Build" grid
    ai/           Intelligence section + 2D neural-network canvas
    automation/   Input → AI → Automation → Result workflow
    projects/     Featured work / case studies
    technology/   Tech stack constellation
    why/          Four principles
    process/      Six-stage scroll journey
    about/        Company story
    stats/        Animated counters
    testimonials/ Rotating quote carousel
    contact/      Contact form (writes to Supabase)
    footer/       Footer
  hooks/          useLenis, useReducedMotion/useIsTouch, useScrollReveal
  lib/            supabase.ts client
  data/           Static fallback content (services, process, tech, projects, testimonials)
  types/          Shared TypeScript types
supabase/
  migrations/     SQL schema + RLS policies
  README.md       Supabase setup instructions
```

## Content to replace before launch

Several sections ship with clearly marked **placeholder content** rather than invented company
achievements — search the codebase for `config-note` / "Placeholder" to find them:

- **Stats** (`src/components/stats/Stats.tsx`) — project/client counts
- **Testimonials** (`src/data/technologies.ts`) — swap for real client quotes or wire to Supabase
- **Projects** (`src/data/technologies.ts`) — swap for real case studies or wire to Supabase
- **Contact form** — connect Supabase credentials to start collecting real leads

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables boot animation, parallax, and canvas loops)
- Custom cursor and pointer-heavy interactions are skipped entirely on touch devices
- Particle counts in the 3D core and neural-network canvas scale down on touch devices
- Semantic HTML, visible focus states via default browser outlines on all interactive elements
