'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Brain, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 spotlight" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="text-[11px] text-white/50 tracking-widest uppercase" style={{ fontFamily: 'var(--font-jetbrains)' }}>
            Next-Gen Technology Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-xl text-white text-glow mb-6 max-w-4xl mx-auto"
        >
          Building{' '}
          <span className="relative inline-block">
            Intelligent
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </span>{' '}
          Futures.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/45 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Aixoniq Technologies helps businesses accelerate growth through AI solutions,
          cybersecurity, web &amp; app development, and intelligent digital marketing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact" className="btn-primary gap-2">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="btn-ghost">
            Explore Services
          </Link>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Brain, label: 'AI & Automation' },
            { icon: Shield, label: 'Cybersecurity' },
            { icon: Globe, label: 'Web & App Dev' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/8 text-sm text-white/50">
              <Icon className="w-3.5 h-3.5 text-white/40" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#050505] px-6 py-5 text-center">
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
                {stat.value}
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-wider" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
