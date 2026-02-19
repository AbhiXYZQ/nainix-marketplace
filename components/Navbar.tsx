"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { 
  Zap, Search, Menu, X, Home, Compass, Briefcase, 
  User, Settings, LogOut, ChevronRight, Wallet, 
  MessageSquare, PlusCircle, LayoutGrid 
} from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // --- 🧠 SMART LOGIC: Light Pages detection ---
  // Ye pages white background wale hain, in par Navbar dark hona chahiye
  const isLightPage = pathname?.includes("/checkout") || pathname?.includes("/dashboard");

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Shortcut (Ctrl + K to Search) - SEO/UX Pro Tip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto Focus Search
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Lock Body Scroll
  useEffect(() => {
    if (isSidebarOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Ab Enter key kaam karegi kyunki ye Form ke andar hai
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Explore", href: "/search", icon: <Compass size={18} /> },
    { name: "Sellers", href: "/seller", icon: <Briefcase size={18} /> },
  ];

  return (
    <>
      {/* ==============================
          1. MAIN HEADER
         ============================== */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || isLightPage
            ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 py-3 shadow-xl" 
            : "bg-transparent border-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
              <Zap size={20} className="text-white fill-white/20" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Nainix<span className="text-indigo-500">.</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold transition flex items-center gap-2 ${
                  pathname === link.href ? "text-indigo-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Search Trigger (Hidden on very small screens to save space) */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open Search"
              className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition group"
            >
              <Search size={18} className="group-hover:scale-110 transition" />
            </button>

            {/* Business Logic: "Post a Gig" Button */}
            <div className="hidden md:block">
              {session ? (
                <Link 
                  href="/create-service" 
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-indigo-500/20"
                >
                  <PlusCircle size={16} /> Post a Gig
                </Link>
              ) : (
                <Link 
                  href="/seller/onboarding" 
                  className="text-slate-300 hover:text-white text-sm font-bold transition"
                >
                  Become a Seller
                </Link>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {session ? (
                <Link href="/dashboard" className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-slate-900 transition hover:scale-105">
                   {session.user?.name?.[0]?.toUpperCase()}
                </Link>
              ) : (
                <Link href="/login" className="bg-white text-slate-950 px-5 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition shadow-lg">
                  Join
                </Link>
              )}
            </div>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
              className="md:hidden w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-white hover:bg-slate-700 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ==============================
          2. MOBILE SIDEBAR
         ============================== */}
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-slate-950 border-l border-slate-800 z-[51] shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-slate-800 bg-slate-900/50">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Navigation</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* User Profile (Mobile) */}
        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800">
          {session ? (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border-2 border-slate-800">
                {session.user?.name?.[0]?.toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-bold text-white text-lg truncate">{session.user?.name}</h3>
                <Link 
                  href="/dashboard" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-xs text-indigo-400 font-bold mt-1 flex items-center gap-1 hover:underline"
                >
                  Go to Dashboard <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                <User size={24} />
              </div>
              <h3 className="font-bold text-white mb-3">Welcome to Nainix</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/login" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="py-2.5 rounded-xl bg-slate-800 text-white font-bold text-sm border border-slate-700 text-center"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="py-2.5 rounded-xl bg-white text-slate-950 font-bold text-sm shadow-lg text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Links (Mobile) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-4 text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 mt-2">Menu</p>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition ${
                pathname === link.href 
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {/* Mobile Only: Post Gig */}
          <Link 
            href={session ? "/create-service" : "/login"}
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition"
          >
             <PlusCircle size={18} /> {session ? "Post a Gig" : "Become a Seller"}
          </Link>

          {session && (
            <>
              <p className="px-4 text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 mt-6">Dashboard</p>
              
              <Link href="/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <LayoutGrid size={18} /> Overview
              </Link>
              <Link href="/dashboard/inbox" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <MessageSquare size={18} /> Inbox
              </Link>
              <Link href="/dashboard/wallet" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <Wallet size={18} /> Wallet
              </Link>
            </>
          )}
        </div>

        {/* Footer */}
        {session && (
          <div className="p-4 border-t border-slate-800 bg-slate-950">
            <button 
              onClick={() => signOut()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500/20 transition"
            >
              <LogOut size={18} /> Sign Out
            </button>
          </div>
        )}
      </div>

      {/* ==============================
          3. SEARCH OVERLAY
         ============================== */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-[60] flex flex-col pt-4 px-4 animate-fade-in">
          
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 relative">
                <form onSubmit={handleSearch}> {/* 👈 Wrapped in form for 'Enter' key support */}
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" size={20} />
                    <input 
                      ref={searchInputRef}
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What are you looking for today?" 
                      className="w-full bg-slate-900 border border-slate-800 text-white text-lg placeholder-slate-500 pl-12 pr-4 h-16 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-2xl transition-all"
                    />
                </form>
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="w-16 h-16 bg-slate-800 rounded-2xl text-white flex items-center justify-center hover:bg-slate-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-2">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                 <Zap size={14} className="text-yellow-500" /> Trending Now
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Website Design", "Logo Animation", "WordPress", "Video Editing", "SEO", "Python Scripting", "AI Art"].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => { setSearchQuery(tag); router.push(`/search?q=${encodeURIComponent(tag)}`); setIsSearchOpen(false); }}
                    className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-300 font-medium hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition shadow-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-slate-600 text-sm">Pro Tip: Press <kbd className="bg-slate-800 px-2 py-1 rounded text-slate-400 font-mono">Enter</kbd> to search</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}