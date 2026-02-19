"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Zap, Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Yahan actual login logic aayegi baad mein
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Glass Card */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl relative z-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition">
              <Zap className="text-white fill-current" size={20} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Nainix.</span>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-center text-sm mb-8">Enter the portal to manage your projects.</p>
        <div className="text-center mb-8">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition">← Back to Home</Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-slate-950/50 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-950/50 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot Password?</Link>
          </div>

          <button 
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {loading ? "Accessing..." : <>Sign In <ArrowRight size={18} /></>}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px bg-slate-800 flex-1"></div>
          <span className="text-slate-500 text-xs font-medium">OR CONTINUE WITH</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => signIn('github')}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl transition border border-slate-700 font-medium text-sm"
          >
            <Github size={18} /> GitHub
          </button>
          <button 
            onClick={() => signIn('google')}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 py-2.5 rounded-xl transition border border-gray-200 font-medium text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
            Google
          </button>
        </div>

        <p className="text-center mt-8 text-slate-500 text-sm">
          Don't have an account? <Link href="/register" className="text-indigo-400 hover:text-white transition font-medium">Create one</Link>
        </p>
      </div>
    </div>
  );
}