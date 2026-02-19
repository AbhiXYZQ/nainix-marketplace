"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { 
  Search, Code, PenTool, ShieldCheck, Globe, Zap, 
  ArrowRight, Percent, Layers, MousePointer2, Star, CheckCircle,
  Users, Briefcase, TrendingUp, MessageCircle, Clock, Award
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* 🛡️ SEO Structure Data (JSON-LD) - World Class Pro Tip */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Nainix Marketplace",
            "url": "https://nainix.me",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nainix.me/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      <Navbar />

      {/* Background Decorations */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-36 pb-24 px-6 max-w-7xl mx-auto text-center z-10">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          ✨ Trusted by 10,000+ freelancers worldwide
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1] gradient-text">
          Freelancing<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Reimagined</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Join the revolution. <span className="text-white font-semibold">Zero commission marketplace</span> where talent meets opportunity at lightning speed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <form onSubmit={handleSearch} className="w-full sm:w-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative flex items-center bg-slate-900 backdrop-blur-xl border border-slate-700 rounded-xl p-1">
                <Search className="text-slate-500 ml-4 flex-shrink-0" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What do you need?" 
                  className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder-slate-500"
                />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg mr-1">
                  Search
                </button>
              </div>
            </div>
          </form>

          <Link href="/seller/onboarding" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold border border-slate-700 hover:border-indigo-500 transition">
            <Briefcase size={18} /> Become Seller
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-indigo-400 mb-1">10K+</p>
            <p className="text-xs md:text-sm text-slate-400">Freelancers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-purple-400 mb-1">$50M+</p>
            <p className="text-xs md:text-sm text-slate-400">Transacted</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-pink-400 mb-1">4.9/5</p>
            <p className="text-xs md:text-sm text-slate-400">Rating</p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose Nainix?</h2>
          <p className="text-lg text-slate-400">Built for the modern freelancer. Period.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Percent, title: "0% Commission", desc: "Keep 100% of your earnings. We believe in fair pay." },
            { icon: ShieldCheck, title: "Escrow Protected", desc: "Safe payments guaranteed. Money held until delivery approved." },
            { icon: Zap, title: "Lightning Fast", desc: "Get paid in 24 hours. No waiting, no excuses." },
            { icon: Award, title: "Top Talent Only", desc: "Verified freelancers. Quality guaranteed on every project." },
          ].map((feature, i) => (
            <div key={i} className="group bg-slate-900/30 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">How It Works in 4 Steps</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Get started in minutes, not hours. Our streamlined process connects you with perfect matches instantly.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              icon: Briefcase,
              step: "1",
              title: "Create Account",
              desc: "Sign up in 30 seconds. No credit card required.",
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: Search,
              step: "2",
              title: "Find & Match",
              desc: "Browse top talent or post your project instantly.",
              color: "from-purple-500 to-purple-600"
            },
            { 
              icon: MessageCircle,
              step: "3",
              title: "Collaborate",
              desc: "Communicate directly. Milestones stay on track.",
              color: "from-indigo-500 to-indigo-600"
            },
            { 
              icon: CheckCircle,
              step: "4",
              title: "Complete & Pay",
              desc: "Money released. 0% commission. You keep 100%.",
              color: "from-green-500 to-green-600"
            },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl mb-4 transition-all group-hover:shadow-xl group-hover:shadow-${item.step}-500/20`}>
                <div className="bg-slate-950 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} className="text-white" />
                    </div>
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Step {item.step}</span>
                    <h3 className="text-xl font-black mt-2 mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <p className="text-slate-300">⚡ <span className="font-bold">Average time to first connection:</span> Less than 2 hours</p>
        </div>
      </section>

      {/* ===== CATEGORIES/SERVICES ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-2">Popular Services</h2>
            <p className="text-slate-400">Millions of tasks completed. Join the revolution.</p>
          </div>
          <Link href="/search" className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition">
            View All <ArrowRight className="group-hover:translate-x-2 transition" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              title: "Web Development",
              desc: "Full-stack • Frontend • Backend • APIs",
              color: "from-indigo-600 to-blue-600",
              count: "2,450+",
              href: "/search?category=development"
            },
            {
              icon: PenTool,
              title: "UI/UX Design",
              desc: "App Design • Web Design • Prototypes",
              color: "from-purple-600 to-pink-600",
              count: "1,800+",
              href: "/search?category=design"
            },
            {
              icon: Globe,
              title: "Digital Marketing",
              desc: "SEO • Social Media • Growth • Ads",
              color: "from-blue-600 to-cyan-600",
              count: "1,200+",
              href: "/search?category=marketing"
            },
            {
              icon: Layers,
              title: "Web3 & Blockchain",
              desc: "Smart Contracts • DApps • NFTs",
              color: "from-yellow-600 to-orange-600",
              count: "650+",
              href: "/search?category=blockchain"
            },
          ].map((service, i) => (
            <Link key={i} href={service.href} className="group">
              <div className={`bg-gradient-to-br ${service.color} p-0.5 rounded-2xl h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-${i}-500/30`}>
                <div className="bg-slate-950 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group-hover:bg-slate-900/50 transition-colors">
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-black mb-2 group-hover:text-white transition">{service.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 flex-1">{service.desc}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active</span>
                      <span className="text-lg font-black text-indigo-400 group-hover:text-white transition">{service.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: "Total Projects", value: "45,200+" },
            { label: "Avg. Budget", value: "$2,450" },
            { label: "Success Rate", value: "98.5%" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-indigo-400">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Loved by Creators</h2>
          <p className="text-lg text-slate-400">Real feedback from real freelancers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sarah Chen", role: "Web Designer", text: "I switched from Fiverr and tripled my income. Zero commissions changed my life.", avatar: "SC" },
            { name: "Alex Rodriguez", role: "Developer", text: "Finally, a platform that respects freelancers. Best decision ever.", avatar: "AR" },
            { name: "Emma Williams", role: "Marketer", text: "The escrow system gives me peace of mind. Clients love the transparency.", avatar: "EW" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{testimonial.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Change the Game?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Join thousands of freelancers earning more with zero commission. Start today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition text-lg">
              Get Started Free
            </Link>
            <Link href="/search" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl border border-slate-700 transition text-lg">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-800 bg-slate-950/50 pt-16 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap size={16} />
                </div>
                <span className="font-black text-xl">Nainix.</span>
              </div>
              <p className="text-slate-500 text-sm">Commission-free marketplace for modern freelancers.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase text-slate-400">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="/search" className="hover:text-white transition">Browse Services</Link></li>
                <li><Link href="/seller" className="hover:text-white transition">Find Talent</Link></li>
                <li><Link href="/seller/onboarding" className="hover:text-white transition">Become Seller</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase text-slate-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase text-slate-400">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm">© 2026 Nainix. Built for creators.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-500 hover:text-white transition">Discord</a>
              <a href="#" className="text-slate-500 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}