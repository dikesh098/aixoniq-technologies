import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { ContactFormData } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const initialForm: ContactFormData = {
  name: '', email: '', company: '', project_type: 'AI / Automation', budget: 'Under $10k', message: '',
};

export function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    if (!isSupabaseConfigured || !supabase) {
      // Demo mode — no Supabase credentials configured yet.
      console.info('[Aixoniq contact form — demo mode]', form);
      await new Promise((r) => setTimeout(r, 700));
      setStatus('sent');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3200);
      return;
    }

    const { error } = await supabase.from('contact_messages').insert([form]);
    if (error) {
      console.error(error);
      setStatus('error');
      return;
    }
    setStatus('sent');
    setForm(initialForm);
    setTimeout(() => setStatus('idle'), 3200);
  }

  return (
    <section id="contact" ref={ref} className="section relative border-t border-line px-6 md:px-20 py-20 md:py-40 bg-panel border-b border-line overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-[8%] -translate-y-1/2 w-[80vw] md:w-[52vw] max-w-[620px] aspect-square rounded-full pointer-events-none blur-[2px] bg-[radial-gradient(circle,rgba(73,240,255,0.14),transparent_62%)]"
      >
        <div className="absolute inset-[8%] rounded-full border border-signal/30 animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-[18%] rounded-full border border-white/10 animate-[spin_26s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 relative z-[2]">
        <div data-reveal>
          <span className="eyebrow">11 — Get In Touch</span>
          <h2 className="text-[40px] md:text-[6vw] lg:text-[84px] uppercase mt-5">Have an idea?</h2>
          <h2 className="text-[40px] md:text-[6vw] lg:text-[84px] uppercase text-signal">Let's build it.</h2>
          <p className="text-text-dim mt-5 max-w-[44ch]">
            Tell us where you're headed. We'll tell you how to get there — with AI, software, and design that actually ships.
          </p>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Name">
              <input required value={form.name} onChange={(e) => update('name', e.target.value)} />
            </Field>
            <Field label="Email">
              <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Company">
              <input value={form.company} onChange={(e) => update('company', e.target.value)} />
            </Field>
            <Field label="Project Type">
              <select value={form.project_type} onChange={(e) => update('project_type', e.target.value)}>
                {['AI / Automation', 'Web Development', 'Mobile App', 'UI/UX Design', 'Cloud Solutions', 'Custom Software'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Budget">
            <select value={form.budget} onChange={(e) => update('budget', e.target.value)}>
              {['Under $10k', '$10k – $25k', '$25k – $75k', '$75k+'].map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
          <Field label="Message">
            <textarea required rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} />
          </Field>

          <button type="submit" disabled={status === 'sending'} className="btn btn-primary magnetic self-start mt-2">
            <span>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Received.' : "Start a Conversation →"}
            </span>
          </button>

          <div className="font-mono text-xs text-signal min-h-[16px]">
            {status === 'sent' && (isSupabaseConfigured ? '✓ Message saved to Supabase.' : '✓ Demo mode — connect Supabase to save real leads.')}
            {status === 'error' && 'Something went wrong — please try again.'}
          </div>

          {!isSupabaseConfigured && (
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[11px] uppercase tracking-wide text-text-dim">{label}</label>
      <div className="[&>input]:bg-transparent [&>input]:border-0 [&>input]:border-b [&>input]:border-line [&>input]:py-2.5 [&>input]:focus:border-signal [&>input]:focus:outline-none [&>input]:text-[15px]
                      [&>select]:bg-transparent [&>select]:border-0 [&>select]:border-b [&>select]:border-line [&>select]:py-2.5 [&>select]:focus:border-signal [&>select]:focus:outline-none [&>select]:text-[15px]
                      [&>textarea]:bg-transparent [&>textarea]:border-0 [&>textarea]:border-b [&>textarea]:border-line [&>textarea]:py-2.5 [&>textarea]:focus:border-signal [&>textarea]:focus:outline-none [&>textarea]:text-[15px]">
      {children}
      </div>
    </div>
  );
}
