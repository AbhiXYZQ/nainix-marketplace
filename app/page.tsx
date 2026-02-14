"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Search, Code, PenTool, ShieldCheck, Globe, Zap, ArrowRight, CheckCircle2, Percent, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      
      <Navbar />

      {/* --- BACKGROUND GLOW (Atmosphere) --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center z-10">
        
        {/* Badge: New & Honest */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold mb-8 animate-fade-in-up hover:border-indigo-500 transition shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Nainix Marketplace is Now Live
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Turn Your Ideas Into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">Digital Reality.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The most transparent platform to hire skilled developers and creators. 
          <span className="text-white font-semibold"> No hidden fees. No middleman chaos.</span> Just pure talent.
        </p>

        {/* Search Bar - Glass Effect */}
        <div className="relative max-w-2xl mx-auto mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative flex items-center bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-2 shadow-2xl">
            <Search className="text-slate-500 ml-4" size={20} />
            <input 
              type="text" 
              placeholder="What do you want to build today?" 
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder-slate-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-indigo-600/20">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Genuine Features) --- */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1: The Killer Feature */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition duration-300 group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Percent className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">0% Commission Fees</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We don't eat into your budget. Freelancers get paid what they deserve, and you pay only for the work.
            </p>
          </div>

          {/* Feature 2: Security */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition duration-300 group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <ShieldCheck className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your money is held safely in Escrow. The freelancer only gets paid when you are 100% satisfied with the work.
            </p>
          </div>

          {/* Feature 3: Quality */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition duration-300 group">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Zap className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Talent</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect with passionate student developers and professionals who are eager to prove their skills.
            </p>
          </div>

        </div>
      </section>

      {/* --- BENTO GRID CATEGORIES (Visual Appeal) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Explore Categories</h2>
            <p className="text-slate-500 mt-2">Find experts in every technical field.</p>
          </div>
          <Link href="/search" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 text-sm font-medium border-b border-indigo-400/30 pb-0.5">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Big Card - Dev */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition group cursor-pointer relative overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Code size={160} />
            </div>
            <h3 className="text-3xl font-bold mb-2 z-10">Development</h3>
            <p className="text-slate-400 mb-6 max-w-sm z-10">Websites, Mobile Apps, AI Models & Scripts.</p>
            <div className="flex flex-wrap gap-2 z-10">
               <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">React</span>
               <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">Python</span>
               <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">Next.js</span>
            </div>
          </div>

          {/* Tall Card - Design */}
          <div className="md:col-span-1 md:row-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition group cursor-pointer relative overflow-hidden flex flex-col justify-end">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <PenTool size={100} />
            </div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-slate-400 text-sm">Logo, UI/UX, Art.</p>
          </div>

          {/* Small Cards */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition group cursor-pointer flex flex-col justify-center">
            <Globe className="text-blue-500 mb-3" size={28} />
            <h3 className="font-bold text-lg">Marketing</h3>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition group cursor-pointer flex flex-col justify-center">
            <Layers className="text-yellow-500 mb-3" size={28} />
            <h3 className="font-bold text-lg">Blockchain</h3>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Simple & Genuine) --- */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">How Nainix Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl text-2xl font-bold text-indigo-500">1</div>
              <h3 className="text-xl font-bold mb-2">Post a Requirement</h3>
              <p className="text-slate-400 text-sm px-4">Describe what you need. It's free and takes less than 2 minutes.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl text-2xl font-bold text-purple-500">2</div>
              <h3 className="text-xl font-bold mb-2">Choose an Expert</h3>
              <p className="text-slate-400 text-sm px-4">Browse portfolios, chat with sellers, and pick the best match.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
               <div className="w-24 h-24 mx-auto bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl text-2xl font-bold text-green-500">3</div>
              <h3 className="text-xl font-bold mb-2">Safe Payment</h3>
              <p className="text-slate-400 text-sm px-4">Pay securely. The seller gets paid only after your approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SIMPLE FOOTER --- */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © 2026 Nainix. Making freelancing fair for everyone.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}