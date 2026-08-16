-- Aixoniq Technologies — initial schema
-- Run this in the Supabase SQL editor, or via `supabase db push` with the CLI.

-- ========== contact_messages ==========
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  project_type text,
  budget text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

-- Anyone (including anonymous visitors) can submit the contact form.
create policy "Public can insert contact messages"
  on contact_messages for insert
  to anon
  with check (true);

-- No public read/update/delete — only accessible via the Supabase dashboard
-- or an authenticated service role (e.g. an internal admin tool).

-- ========== projects ==========
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  category text,
  technologies text[] default '{}',
  image_url text,
  live_url text,
  github_url text,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

alter table projects enable row level security;

create policy "Public can read projects"
  on projects for select
  to anon
  using (true);

-- ========== services ==========
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  icon text,
  order_index integer not null default 0,
  created_at timestamptz not null default now()
);

alter table services enable row level security;

create policy "Public can read services"
  on services for select
  to anon
  using (true);

-- ========== testimonials ==========
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  role text,
  content text not null,
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table testimonials enable row level security;

create policy "Public can read testimonials"
  on testimonials for select
  to anon
  using (true);

-- Writes to projects / services / testimonials should only ever happen via
-- the Supabase dashboard, the CLI, or an authenticated service-role script —
-- never expose the service-role key in client code.
