"use client";

import Link from "next/link";
import { DollarSign, ShoppingBag, Star, TrendingUp, Clock, MoreHorizontal, ArrowUpRight, Inbox, Wallet, PlusCircle } from "lucide-react";

export default function DashboardOverview() {
  
  const stats = [
    { label: "Total Earnings", value: "$12,450", change: "+15%", icon: <DollarSign size={24} className="text-green-400" />, bg: "bg-green-500/10 border-green-500/20" },
    { label: "Active Orders", value: "8", change: "+2", icon: <ShoppingBag size={24} className="text-blue-400" />, bg: "bg-blue-500/10 border-blue-500/20" },
    { label: "Avg. Rating", value: "4.9", change: "+0.2", icon: <Star size={24} className="text-yellow-400" />, bg: "bg-yellow-500/10 border-yellow-500/20" },
    { label: "Profile Views", value: "1.2k", change: "+24%", icon: <TrendingUp size={24} className="text-purple-400" />, bg: "bg-purple-500/10 border-purple-500/20" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      
      {/* Quick Navigation Links */}
      <div className="flex flex-wrap gap-3 mb-4">
        <Link href="/dashboard/inbox" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold transition">
          <Inbox size={16} /> Inbox
        </Link>
        <Link href="/dashboard/wallet" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold transition">
          <Wallet size={16} /> Wallet
        </Link>
        <Link href="/create-service" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-bold transition">
          <PlusCircle size={16} /> Post a Gig
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-400">Welcome back, Abhishek! Here's what's happening today.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold transition shadow-lg shadow-indigo-500/20 flex items-center gap-2">
          <DollarSign size={18} /> Withdraw Funds
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${stat.bg} backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-slate-950/50`}>
                {stat.icon}
              </div>
              <span className="bg-slate-950/50 text-green-400 text-xs font-bold px-2 py-1 rounded-lg border border-slate-800">
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Active Orders Table */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Recent Orders</h3>
            <button className="text-indigo-400 text-sm font-medium hover:text-white transition">View All</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center font-bold text-slate-500 group-hover:bg-indigo-500 group-hover:text-white transition">
                    NK
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-indigo-400 transition">E-commerce Website</h4>
                    <p className="text-sm text-slate-500">Client: Nikhil Kumar • Due in 2 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">$450</div>
                  <div className="text-xs text-yellow-500 flex items-center gap-1 justify-end">
                    <Clock size={12} /> In Progress
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Actions / Upgrade */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
            <p className="text-indigo-100 text-sm mb-6">Get 0% fees on your next 5 withdrawals and a verified badge.</p>
            <button className="bg-white text-indigo-600 w-full py-3 rounded-xl font-bold hover:bg-indigo-50 transition shadow-xl">
              Upgrade Now
            </button>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
            <h3 className="font-bold mb-4">Activity</h3>
            <div className="space-y-4 relative">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-800"></div>
              {[
                { txt: "You earned $150 from Order #2234", time: "2h ago" },
                { txt: "New message from Client Rohit", time: "5h ago" },
                { txt: "Gig 'Next.js Site' approved", time: "1d ago" },
              ].map((act, i) => (
                <div key={i} className="flex gap-4 items-start relative pl-2">
                   <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 z-10"></div>
                   <div>
                     <p className="text-sm text-slate-300 leading-tight">{act.txt}</p>
                     <p className="text-xs text-slate-600 mt-1">{act.time}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}