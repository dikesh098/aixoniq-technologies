import Link from 'next/link';
import { LayoutDashboard, Users, FileText, Briefcase, CreditCard, Star, Mail, Newspaper, Settings, Zap } from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/leads', icon: Users, label: 'Leads' },
  { href: '/admin/blog', icon: FileText, label: 'Blog' },
  { href: '/admin/portfolio', icon: Briefcase, label: 'Portfolio' },
  { href: '/admin/careers', icon: Newspaper, label: 'Careers' },
  { href: '/admin/payments', icon: CreditCard, label: 'Payments' },
  { href: '/admin/testimonials', icon: Star, label: 'Testimonials' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#030303] flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/5 bg-[#050505] flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-black" />
            </div>
            <div>
              <span className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-syne)' }}>Aixoniq</span>
              <p className="text-[9px] text-white/30" style={{ fontFamily: 'var(--font-jetbrains)' }}>ADMIN</p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/45 hover:text-white hover:bg-white/5 transition-all"
              style={{ fontFamily: 'var(--font-syne)', fontWeight: 500 }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Back to site */}
        <div className="p-3 border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/30 hover:text-white/60 transition-colors">
            ← Back to website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
