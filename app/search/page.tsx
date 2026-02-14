"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { Search, Filter, Star, ChevronDown, Heart, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // --- CATEGORIES (Top Scrollable Bar) ---
  const categories = ["All", "Web Dev", "Mobile Apps", "UI/UX Design", "Video Editing", "SEO", "Cybersecurity", "Blockchain", "AI Models"];

  // --- MOCK DATA (Services) ---
  const services = [
    { id: 1, title: "I will build a 3D animated website", seller: "Rahul Dev", rating: 5.0, reviews: 42, price: 150, image: "bg-indigo-900", tag: "Pro" },
    { id: 2, title: "I will design a modern logo for tech startup", seller: "Naina Art", rating: 4.9, reviews: 128, price: 45, image: "bg-purple-900", tag: "Level 2" },
    { id: 3, title: "I will secure your server from hackers", seller: "Cyber Safe", rating: 5.0, reviews: 15, price: 300, image: "bg-slate-800", tag: "Top Rated" },
    { id: 4, title: "I will write SEO content for your blog", seller: "Writer Pro", rating: 4.8, reviews: 65, price: 30, image: "bg-blue-900", tag: "Level 1" },
    { id: 5, title: "I will create a mobile app in React Native", seller: "App Master", rating: 4.7, reviews: 22, price: 500, image: "bg-indigo-950", tag: "Pro" },
    { id: 6, title: "I will edit your YouTube gaming videos", seller: "Editor X", rating: 5.0, reviews: 9, price: 60, image: "bg-pink-900", tag: "New" },
    { id: 7, title: "I will setup your AWS cloud infrastructure", seller: "Cloud King", rating: 4.9, reviews: 30, price: 200, image: "bg-cyan-900", tag: "Level 2" },
    { id: 8, title: "I will create viral Instagram reels", seller: "Social Buzz", rating: 4.6, reviews: 110, price: 25, image: "bg-red-900", tag: "Level 1" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      {/* Page Content */}
      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the perfect service</h1>
          
          {/* Search Input (Big & Centered) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center bg-slate-900 border border-slate-700 rounded-xl p-1">
              <Search className="text-slate-500 ml-3" size={20} />
              <input 
                type="text" 
                placeholder="Search for 'Logo Design' or 'React Developer'..." 
                className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder-slate-500"
              />
              <button className="bg-slate-800 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold transition border border-slate-700 hover:border-indigo-500">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* --- FILTERS ROW (Sticky Top) --- */}
        <div className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-md py-4 mb-8 -mx-6 px-6 border-b border-slate-800/50">
          <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            
            {/* Scrollable Categories Chips */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-white text-slate-950 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                      : "bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter Button (Desktop) */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-800 transition whitespace-nowrap">
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* --- GIGS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={`/service/${service.id}`} key={service.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              {/* Thumbnail */}
              <div className={`h-48 ${service.image} relative overflow-hidden`}>
                  {/* Fake Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  <button className="absolute top-3 right-3 bg-slate-950/40 hover:bg-white hover:text-red-500 text-white p-2 rounded-full transition backdrop-blur-md z-10">
                    <Heart size={16} />
                  </button>
                  
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="bg-slate-950/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-white border border-slate-700 uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Seller Info */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                      {service.seller[0]}
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-400 transition">{service.seller}</span>
                    <CheckCircle2 size={12} className="text-blue-500" />
                </div>
                
                <h3 className="font-bold text-white text-sm mb-3 line-clamp-2 leading-relaxed group-hover:text-indigo-300 transition">
                  {service.title}
                </h3>
                
                {/* Footer: Rating & Price */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                    <Star size={12} fill="currentColor" />
                    <span>{service.rating}</span>
                    <span className="text-slate-500 font-normal">({service.reviews})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase">Starting at</span>
                    <span className="text-lg font-bold text-white">${service.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
           <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-400 font-bold text-sm hover:bg-white hover:text-black transition">
             Load More Services
           </button>
        </div>

      </div>
    </main>
  );
}