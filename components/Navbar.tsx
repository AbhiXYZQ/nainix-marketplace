"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { 
  Zap, Search, Menu, X, Home, Compass, Briefcase, 
  User, Settings, LogOut, ChevronRight, Wallet, 
  LayoutDashboard, Sparkles, MessageSquare 
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

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto Focus Search
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Lock Body Scroll when Sidebar/Search is open
  useEffect(() => {
    if (isSidebarOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "Explore Gigs", href: "/search", icon: <Compass size={20} /> },
    { name: "Find Sellers", href: "/seller", icon: <Briefcase size={20} /> },
  ];

  return (
    <>
      {/* ==============================
          1. MAIN HEADER (Sticky & Clean)
         ============================== */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 py-3 shadow-lg" 
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

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold transition flex items-center gap-2 ${
                  pathname === link.href ? "text-indigo-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
            >
              <Search size={20} />
            </button>

            {/* Desktop Auth (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3">
              {session ? (
                <Link href="/dashboard" className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                   {session.user?.name?.[0]}
                </Link>
              ) : (
                <Link href="/login" className="bg-white text-slate-950 px-5 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition shadow-lg shadow-white/10">
                  Join
                </Link>
              )}
            </div>

            {/* MOBILE MENU TRIGGER (The Hamburger) */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-white hover:bg-slate-700 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>


      {/* ==============================
          2. PREMIUM SIDEBAR (Mobile Only)
         ============================== */}
      
      {/* Backdrop (Dark Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* The Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-slate-950 border-l border-slate-800 z-[51] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] md:hidden flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-5 flex justify-between items-center border-b border-slate-800 bg-slate-900/50">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Menu</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800">
          {session ? (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border-2 border-slate-800">
                {session.user?.name?.[0]}
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-bold text-white text-lg truncate">{session.user?.name}</h3>
                <p className="text-xs text-slate-400 truncate">{session.user?.email}</p>
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
                  className="py-2.5 rounded-xl bg-slate-800 text-white font-bold text-sm border border-slate-700"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="py-2.5 rounded-xl bg-white text-slate-950 font-bold text-sm shadow-lg shadow-white/10"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          
          <p className="px-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-2">Discover</p>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-bold transition ${
                pathname === link.href 
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {session && (
            <>
              <p className="px-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-6">Account</p>
              
              <Link href="/dashboard/inbox" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <MessageSquare size={18} /> Inbox
              </Link>
              <Link href="/dashboard/wallet" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <Wallet size={18} /> Wallet
              </Link>
              <Link href="/dashboard/settings" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 font-medium hover:bg-slate-900 hover:text-white transition">
                <Settings size={18} /> Settings
              </Link>
            </>
          )}
        </div>

        {/* Sidebar Footer */}
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
          3. FULL SCREEN SEARCH (Healthy Mode)
         ============================== */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-[60] flex flex-col pt-4 px-4 animate-fade-in">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" size={20} />
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..." 
                className="w-full bg-slate-900 border border-slate-800 text-white text-base placeholder-slate-500 pl-12 pr-4 h-14 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-xl"
              />
            </div>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="w-14 h-14 bg-slate-800 rounded-2xl text-white flex items-center justify-center hover:bg-slate-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Content */}
          <div className="px-2">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">Trending Now</h3>
            <div className="flex flex-wrap gap-2">
              {["Website Design", "Logo", "WordPress", "Video Editing", "SEO", "Python"].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => { setSearchQuery(tag); router.push(`/search?q=${tag}`); setIsSearchOpen(false); }}
                  className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300 font-medium hover:text-white hover:border-indigo-500 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}