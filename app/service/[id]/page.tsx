"use client";

import { useState, use } from "react"; // 👈 'use' import kiya
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Star, Clock, RefreshCcw, Check, MessageCircle, ShieldCheck, ChevronDown, Heart, Share2, ArrowRight, Home } from "lucide-react";

// 👇 Type update kiya: params ab Promise hai
export default function ServiceDetails({ params }: { params: Promise<{ id: string }> }) {
  
  // 👇 Params ko unwrap kiya (Next.js 15+ requirement)
  const { id } = use(params);

  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'standard' | 'premium'>('basic');

  // --- MOCK DATA ---
  const service = {
    id: id, // 👈 Ab hum 'id' use karenge, 'params.id' nahi
    title: "I will build a modern Next.js website with Nebula Theme",
    rating: 5.0,
    reviews: 128,
    ordersInQueue: 4,
    images: ["/gig-placeholder.jpg"], 
    seller: {
      name: "Abhishek Kumar",
      level: "Top Rated",
      image: "A",
      joined: "2025"
    },
    packages: {
      basic: { price: 50, title: "Starter", desc: "1 Page Website + Responsive Design", delivery: "2 Days", revisions: "1" },
      standard: { price: 150, title: "Pro", desc: "5 Pages + SEO + Animations + Source Code", delivery: "5 Days", revisions: "3" },
      premium: { price: 300, title: "Enterprise", desc: "10 Pages + E-commerce + Admin Panel + 1 Month Support", delivery: "10 Days", revisions: "Unlimited" }
    }
  };

  const currentPkg = service.packages[selectedPackage];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white pb-20">
      <Navbar />
      
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-indigo-900/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* --- LEFT COLUMN (Details) --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
             <Link href="/" className="hover:text-white"><Home size={14} /></Link> 
             <span>/</span>
             <span>Development</span> 
             <span className="text-slate-600">/</span> 
             <span>Web Development</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{service.title}</h1>
          
          {/* Seller Meta */}
          <div className="flex flex-wrap items-center gap-4 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                {service.seller.image}
              </div>
              <div>
                <h3 className="font-bold text-sm hover:underline cursor-pointer">{service.seller.name}</h3>
                <p className="text-xs text-indigo-400 font-medium">{service.seller.level}</p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-slate-800"></div>
            <div className="flex items-center gap-1 text-yellow-400 font-bold">
                 <Star size={16} fill="currentColor" /> {service.rating}
                 <span className="text-slate-400 font-normal">({service.reviews})</span>
            </div>
            <div className="hidden md:block h-8 w-px bg-slate-800"></div>
            <div className="text-slate-400 text-sm">
              <span className="text-white font-bold">{service.ordersInQueue}</span> Orders in Queue
            </div>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="w-full aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
             <span className="text-slate-600 font-medium">Project Image Gallery (Carousal)</span>
             <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="bg-slate-900/80 p-2 rounded-full hover:text-red-500 transition backdrop-blur-md"><Heart size={20} /></button>
               <button className="bg-slate-900/80 p-2 rounded-full hover:text-indigo-500 transition backdrop-blur-md"><Share2 size={20} /></button>
             </div>
          </div>

          {/* Description */}
          <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50">
            <h3 className="text-xl font-bold mb-4">About This Gig</h3>
            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed">
              <p className="mb-4">
                Looking for a <b>high-performance website</b> that stands out? You are in the right place. 
                I specialize in building scalable, secure, and beautiful web applications using Next.js and Tailwind CSS.
              </p>
              <h4 className="text-white font-bold mb-3 mt-6">Why Choose Me?</h4>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0 mt-1" /> <span>Modern "Nebula" Design Aesthetics</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0 mt-1" /> <span>100% Mobile Responsive</span></li>
                <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0 mt-1" /> <span>SEO Optimized Code & Fast Loading</span></li>
              </ul>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
            <div className="border border-slate-800 rounded-xl overflow-hidden">
              <button className="w-full flex justify-between items-center p-4 bg-slate-900 hover:bg-slate-800 transition text-left">
                <span className="font-medium">Do you provide hosting setup?</span>
                <ChevronDown size={18} />
              </button>
              <div className="p-4 bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
                Yes! I will deploy your site on Vercel or Netlify for free.
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN (Sticky Pricing) --- */}
        <div className="relative">
          <div className="sticky top-28 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
            
            {/* Tabs */}
            <div className="grid grid-cols-3 border-b border-slate-700">
              {(['basic', 'standard', 'premium'] as const).map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`py-4 text-sm font-bold uppercase tracking-wide transition-colors ${selectedPackage === pkg ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
                >
                  {pkg}
                </button>
              ))}
            </div>

            {/* Pricing Content */}
            <div className="p-8">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-bold text-lg text-white capitalize">{currentPkg.title}</h3>
                <span className="text-3xl font-bold text-white">${currentPkg.price}</span>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">{currentPkg.desc}</p>

              <div className="flex flex-col gap-3 text-sm font-semibold text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-indigo-400" />
                  <span>{currentPkg.delivery} Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCcw size={16} className="text-indigo-400" />
                  <span>{currentPkg.revisions} Revisions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* 👇 Ab 'id' use kar rahe hain jo use() se mili hai */}
                <Link 
                  href={`/checkout/${id}`} 
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3.5 rounded-xl transition shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                   Continue (${currentPkg.price}) <ArrowRight size={18} />
                </Link>

                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition border border-slate-700 flex items-center justify-center gap-2">
                   <MessageCircle size={18} /> Contact Seller
                </button>
              </div>

              {/* Security Note */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={14} />
                <span>Secure Payment • 100% Satisfaction</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}