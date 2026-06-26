import type { Metadata } from 'next';
import { createServerClient } from '@/lib/supabase';

export const metadata: Metadata = { title: 'Leads — Admin' };

export default async function AdminLeadsPage() {
  const supabase = createServerClient();
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  const statusColors: Record<string, string> = {
    new: 'bg-blue-900/30 text-blue-400',
    contacted: 'bg-yellow-900/30 text-yellow-400',
    qualified: 'bg-purple-900/30 text-purple-400',
    converted: 'bg-green-900/30 text-green-400',
    closed: 'bg-white/5 text-white/30',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Leads</h1>
        <p className="text-sm text-white/40">{leads?.length || 0} total leads</p>
      </div>

      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {['Name', 'Email', 'Service', 'Company', 'Status', 'Date'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs text-white/35 font-medium" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads && leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-white/3 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-sm text-white/70">{lead.name}</td>
                    <td className="px-4 py-3 text-sm text-white/50">{lead.email}</td>
                    <td className="px-4 py-3 text-xs text-white/50">{lead.service}</td>
                    <td className="px-4 py-3 text-xs text-white/40">{lead.company || '—'}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[lead.status] || 'bg-white/5 text-white/35'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-white/30">
                      {new Date(lead.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-white/30">No leads yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
