'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Section wrapper
export function Section({ children, className = '', id = '' }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn('section-padding', className)}>
      {children}
    </section>
  );
}

// Container
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

// Section label
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-4 h-px bg-white/30" />
      <span className="label-mono text-[10px]">{children}</span>
      <div className="w-4 h-px bg-white/30" />
    </div>
  );
}

// Section heading
export function SectionHeading({
  label,
  title,
  description,
  center = false,
  className = '',
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && 'text-center', className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="display-lg text-white mb-4">{title}</h2>
      {description && (
        <p className={cn('text-white/50 text-base leading-relaxed', center ? 'max-w-2xl mx-auto' : 'max-w-xl')}>
          {description}
        </p>
      )}
    </div>
  );
}

// Glass card
export function Card({ children, className = '', hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={cn('glass rounded-2xl p-6', hover && 'glass-hover transition-all duration-300', className)}>
      {children}
    </div>
  );
}

// Badge
export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-white/10 bg-white/5 text-white/60', className)}>
      {children}
    </span>
  );
}

// Divider
export function Divider({ className = '' }: { className?: string }) {
  return <div className={cn('border-t border-white/5', className)} />;
}

// Service icon wrapper
export function ServiceIcon({ emoji, className = '' }: { emoji: string; className?: string }) {
  return (
    <div className={cn('w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-2xl', className)}>
      {emoji}
    </div>
  );
}

// Stats card
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-6 text-center border-gradient">
      <div className="display-md text-white text-glow mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
        {value}
      </div>
      <div className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: 'var(--font-jetbrains)' }}>
        {label}
      </div>
    </div>
  );
}
