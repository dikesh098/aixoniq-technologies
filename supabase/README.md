# Supabase setup

1. Create a project at https://supabase.com.
2. In the SQL editor, run `migrations/0001_init.sql` (or `supabase db push` if you're using the CLI locally).
3. Copy your Project URL and anon/public key from **Settings → API**.
4. In the app root, copy `.env.example` to `.env` and fill in:
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```
5. Restart `npm run dev`.

Row Level Security is enabled on every table:
- `contact_messages` — public **insert only**. Nobody can read submitted leads from the client; view them in the Supabase dashboard or build an authenticated admin view.
- `projects`, `services`, `testimonials` — public **read only**. Seed/update content via the dashboard, the CLI, or a script using the service-role key (never ship the service-role key to the browser).

Until you connect real credentials, the site runs in **demo mode**: the contact form logs to the console instead of writing to a table, and project/service/testimonial content falls back to the static data in `src/data/`.
