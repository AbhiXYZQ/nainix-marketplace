"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, LayoutDashboard, ShoppingBag, MessageSquare, Wallet, Settings, LogOut, Briefcase } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { name: "My Orders", icon: <ShoppingBag size={20} />, href: "/dashboard/orders" },
    { name: "Messages", icon: <MessageSquare size={20} />, href: "/dashboard/inbox" },
    { name: "Wallet", icon: <Wallet size={20} />, href: "/dashboard/wallet" },
    { name: "My Gigs", icon: <Briefcase size={20} />, href: "/dashboard/gigs" }, // Only for sellers
    { name: "Settings", icon: <Settings size={20} />, href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- SIDEBAR (Fixed Left) --- */}
      <aside className="w-64 fixed h-full border-r border-slate-800 bg-slate-950/50 backdrop-blur-xl z-50 hidden md:flex flex-col">
        
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nainix<span className="text-indigo-500">.</span></span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4">Menu</p>
          
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
              >
                {/* Active Indicator Glow */}
                {isActive && <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-md"></div>}
                
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Snippet (Bottom) */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-slate-900 font-bold">
              A
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="text-sm font-bold truncate">Abhishek Kumar</h4>
              <p className="text-xs text-slate-500 truncate">Web Developer</p>
            </div>
            <LogOut size={16} className="text-slate-500 hover:text-red-400 transition" />
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 md:ml-64 p-8 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="fixed top-0 left-64 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        {/* Content Injection */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}