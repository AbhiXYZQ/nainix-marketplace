"use client";

import Navbar from "@/components/Navbar"; // 👈 Import kiya
import Link from "next/link";
import { Search, Code, PenTool, Shield, Globe, Star, ArrowUpRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* --- YAHAN NAVBAR LAGAYA --- */}
      <Navbar />

      {/* --- GLOW EFFECTS --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          The Future of Freelancing is Here
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-b from-white via-white to-slate-400 text-transparent bg-clip-text">
          Hire the world's best <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Creative Talent.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nainix connects you with top-tier developers, designers, and creators. 
          Zero friction. 100% Secure.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-slate-900 border border-slate-700 rounded-xl p-2 shadow-2xl">
            <Search className="text-slate-500 ml-4" size={20} />
            <input 
              type="text" 
              placeholder="Try 'AI Developer' or 'Logo Design'..." 
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder-slate-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-indigo-600/20">
              Search
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-800 py-8">
          {[
            { label: "Active Freelancers", val: "12K+" },
            { label: "Projects Completed", val: "85K+" },
            { label: "Satisfaction Rate", val: "99%" },
            { label: "Secure Payments", val: "24/7" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENTO GRID CATEGORIES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold">Explore Categories</h2>
          <Link href="/search" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium">
            View All <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Development & IT</h3>
            <p className="text-slate-400 mb-6 max-w-sm">Build robust websites, apps, and AI solutions with top tech talent.</p>
            <span className="inline-flex items-center gap-2 text-indigo-400 group-hover:translate-x-2 transition-transform">
              Explore Tech <ChevronRight size={16} />
            </span>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition group cursor-pointer relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <PenTool size={100} />
            </div>
            <h3 className="text-xl font-bold mb-2">Design & Creative</h3>
            <p className="text-slate-400 text-sm mb-4">Logos, UI/UX, Art.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition group cursor-pointer">
            <Shield className="text-green-500 mb-3" size={32} />
            <h3 className="font-bold">Cyber Security</h3>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition group cursor-pointer">
            <Globe className="text-blue-500 mb-3" size={32} />
            <h3 className="font-bold">Digital Marketing</h3>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition group cursor-pointer">
            <Star className="text-yellow-500 mb-3" size={32} />
            <h3 className="font-bold">Video & Animation</h3>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-slate-500 font-semibold mb-6 uppercase tracking-widest text-sm">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-white">Google</span>
            <span className="text-2xl font-bold text-white">Microsoft</span>
            <span className="text-2xl font-bold text-white">Spotify</span>
            <span className="text-2xl font-bold text-white">Amazon</span>
          </div>
          <div className="mt-16 text-slate-600 text-sm">
            © 2026 Nainix Marketplace. Built for the Future.
          </div>
        </div>
      </footer>
    </main>
  );
}