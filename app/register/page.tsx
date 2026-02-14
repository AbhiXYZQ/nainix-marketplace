"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Mail, Lock, User, Briefcase, Search } from "lucide-react";

export default function Register() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
           <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white fill-current" size={16} />
            </div>
            <span className="text-xl font-bold text-white">Nainix.</span>
          </Link>
          <h2 className="text-2xl font-bold text-white">Join the Community</h2>
        </div>

        {/* ROLE SELECTOR (Toggle) */}
        <div className="bg-slate-950 p-1 rounded-xl flex mb-6 border border-slate-800 relative">
           {/* Animated Background for Toggle */}
           <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-slate-800 rounded-lg transition-all duration-300 ${role === 'buyer' ? 'left-1' : 'left-[calc(50%+4px)]'}`}></div>

           <button 
             onClick={() => setRole('buyer')}
             className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg relative z-10 transition-colors ${role === 'buyer' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <Search size={16} /> I want to Hire
           </button>
           <button 
             onClick={() => setRole('seller')}
             className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg relative z-10 transition-colors ${role === 'seller' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <Briefcase size={16} /> I want to Work
           </button>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 ml-1">First Name</label>
              <input type="text" placeholder="John" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:border-indigo-500 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 ml-1">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:border-indigo-500 focus:outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input type="email" placeholder="john@nainix.me" className="w-full bg-slate-950/50 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:border-indigo-500 focus:outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input type="password" placeholder="Create a strong password" className="w-full bg-slate-950/50 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:border-indigo-500 focus:outline-none" />
            </div>
          </div>

          <button className="w-full bg-white hover:bg-indigo-50 text-slate-900 font-bold py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-2">
            Create {role === 'buyer' ? 'Client' : 'Freelancer'} Account
          </button>
        </form>

        <p className="text-center mt-6 text-slate-500 text-sm">
          Already a member? <Link href="/login" className="text-indigo-400 hover:text-white transition font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}