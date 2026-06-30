'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Loader2, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const schema = z.object({ email: z.string().email('Please enter a valid email') });
type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert([{ email: data.email, is_active: true }]);
      if (error && error.code === '23505') {
        toast('You are already subscribed!', { icon: '✓' });
      } else if (error) {
        throw error;
      } else {
        toast.success('Subscribed! Welcome to Aixoniq insights.');
        reset();
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 max-w-md">
      <div className="flex-1">
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="form-input w-full border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/20 transition-colors"
          style={{ backgroundColor: '#111111', color: '#ffffff' }}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={submitting} className="btn-primary py-2.5 px-4 shrink-0 disabled:opacity-50">
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
        Subscribe
      </button>
    </form>
  );
}

