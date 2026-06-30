'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const services = [
  'AI Solutions & Automation',
  'AI Chatbot Development',
  'Website Development',
  'Mobile App Development',
  'Cybersecurity Services',
  'SEO Services',
  'Digital Marketing',
  'Social Media Marketing',
  'Cloud Solutions',
  'Custom Software',
  'Other',
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('leads').insert([{
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service,
        message: data.message,
        status: 'new',
      }]);

      if (error) throw error;

      toast.success('Message sent! We will get back to you within 24 hours.');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1.5">Full Name *</label>
          <input
            {...register('name')}
            placeholder="Your name"
            className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 transition-colors"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1.5">Email Address *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@company.com"
            className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 transition-colors"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1.5">Phone Number</label>
          <input
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1.5">Company Name</label>
          <input
            {...register('company')}
            placeholder="Your company"
            className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-white/50 mb-1.5">Service Interested In *</label>
        <select
         {...register('service')}
         className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/20 transition-colors appearance-none"
         style={{ colorScheme: 'dark', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.04)' }}
          >
         <option value="" style={{ backgroundColor: '#111111', color: '#ffffff' }}>Select a service</option>
         {services.map((s) => (
         <option key={s} value={s} style={{ backgroundColor: '#111111', color: '#ffffff' }}>{s}</option>
         ))}
         </select>
        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-white/50 mb-1.5">Message *</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your project, goals, timeline, and budget..."
          className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 transition-colors resize-none"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full justify-center disabled:opacity-50"
      >
        {submitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>

      <p className="text-[11px] text-white/25 text-center">
        We typically respond within 2–4 business hours.
      </p>
    </form>
  );
}
