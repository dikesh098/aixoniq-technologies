import type { Metadata } from 'next';
import { Users, CreditCard, FileText, Briefcase, TrendingUp, Star } from 'lucide-react';
import { createServerClient } from '@/lib/supabase';

export const metadata: Metadata = { title: 'Admin Dashboard — Aixoniq Technologies' };

async function getStats() {
  const supabase = createServerClient();
  const [leads, payments, posts, portfolio] = await Promise.all([
    supabase.from('leads').select('id, status, created_at').order('created_at', { ascending: false }),
    supabase.from('payments').select('id, amount, status, created_at').order('created_at', { ascending: false }),
    supabase.from('blog_posts').select('id').eq('is_published', true),
    supabase.from('portfolio').select('id'),
  ]);
  return {
    totalLeads: leads.data?.length || 0,
    newLeads: leads.data?.filter(l => l.status === 'new').length || 0,
    recentLeads: leads.data?.slice(0, 5) || [],
    totalRevenue: payments.data?.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0) || 0,
    totalPosts: posts.data?.length || 0,
    totalProjects: portfolio.data?.length || 0,
    recentPayments: payments.data?.slice(0, 5) || [],
  };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const cards = [
    { icon: Users, label: 'Total Leads', value: stats.totalLeads, sub: `${stats.newLeads} new` },
    { icon: CreditCard, label: 'Revenue (Paid)', value: `₹${stats.totalRevenue.toLocaleString('en-IN')}`, sub: 'All time' },
    { icon: FileText, label: 'Published Posts', value: stats.totalPosts, sub: 'Blog articles' },
    { icon: Briefcase, label: 'Portfolio Items', value: stats.totalProjects, sub: 'Active projects' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Dashboard</h1>
        <p className="text-sm text-white/40">Overview of Aixoniq Technologies admin</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map(({ icon: Icon, label, value, sub }) => (
          <div key={label} className="glass rounded-xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/40">{label}</span>
              <Icon className="w-4 h-4 text-white/30" />
            </div>
            <div className="text-2xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-syne)' }}>{value}</div>
            <div className="text-xs text-white/30">{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent leads */}
        <div className="glass rounded-xl border border-white/5 p-5">
          <h2 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>Recent Leads</h2>
          {stats.recentLeads.length > 0 ? (
            <div className="space-y-2">
              {stats.recentLeads.map((lead: { id: string; status: string; created_at: string }) => (
                <div key={lead.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-white/60 font-mono">{lead.id.slice(0, 8)}...</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${lead.status === 'new' ? 'bg-white/10 text-white/60' : 'bg-white/5 text-white/35'}`}>
                    {lead.status}
                  </span>
                  <span className="text-[11px] text-white/30">{new Date(lead.created_at).toLocaleDateString('en-IN')}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-white/30">No leads yet</p>
          )}
        </div>

        {/* Recent payments */}
        <div className="glass rounded-xl border border-white/5 p-5">
          <h2 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>Recent Payments</h2>
          {stats.recentPayments.length > 0 ? (
            <div className="space-y-2">
              {stats.recentPayments.map((p: { id: string; amount: number; status: string; created_at: string }) => (
                <div key={p.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-white/60">₹{p.amount.toLocaleString('en-IN')}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'paid' ? 'bg-green-900/30 text-green-400' : p.status === 'failed' ? 'bg-red-900/30 text-red-400' : 'bg-white/5 text-white/35'}`}>
                    {p.status}
                  </span>
                  <span className="text-[11px] text-white/30">{new Date(p.created_at).toLocaleDateString('en-IN')}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-white/30">No payments yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
