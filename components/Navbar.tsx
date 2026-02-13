"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Zap, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 z-50 text-white">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap size={18} className="text-white fill-current" />
          </div>
          <span>Nainix<span className="text-indigo-400">.</span></span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/search" className="hover:text-white transition">Explore</Link>
          <Link href="/seller" className="hover:text-white transition">Become a Seller</Link>
          <Link href="/enterprise" className="hover:text-white transition">Enterprise</Link>
        </div>

        {/* AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm">Hi, {session.user?.name?.split(' ')[0]}</span>
              <button onClick={() => signOut()} className="text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition text-white">Logout</button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-slate-300 hover:text-white text-sm font-medium transition">Sign In</Link>
              <Link href="/register" className="group bg-white text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-50 transition flex items-center gap-2">
                Get Started <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white z-50">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU (Optional: Agar mobile view banana ho) */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden">
           <Link href="/search" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Explore</Link>
           <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-400">Sign In</Link>
        </div>
      )}
    </nav>
  );
}