"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MapPin, Clock, Star, MessageCircle, ShieldCheck, Check, Globe, Award, Calendar, ChevronRight, Zap, CheckCircle2, Home } from "lucide-react";
export default function SellerProfile() {
  
  // --- MOCK DATA ---
  const user = {
    name: "Abhishek Kumar",
    username: "@abhishek_ai",
    tagline: "Senior Full Stack Engineer & AI Specialist",
    location: "India",
    joined: "Sep 2025",
    avgResponse: "1 Hour",
    lastDelivery: "4 hours ago",
    bio: "I transform complex problems into elegant code. With 4+ years of experience in the MERN stack and AI integration, I help businesses build scalable, secure, and future-proof applications. My code is clean, my delivery is fast, and my communication is transparent.",
    skills: ["React.js", "Next.js", "Python", "TensorFlow", "Node.js", "MongoDB", "AWS", "Docker"],
    rating: 5.0,
    reviews: 124,
    jobSuccess: 98, // Percentage
    isVerified: true,
    languages: ["English (Fluent)", "Hindi (Native)"]
  };

  const gigs = [
    { id: 1, title: "I will build a complete SaaS platform with Next.js 14", price: 250, image: "bg-indigo-900" },
    { id: 2, title: "I will create a high-converting landing page", price: 50, image: "bg-purple-900" },
    { id: 3, title: "I will integrate OpenAI/Gemini API into your website", price: 80, image: "bg-blue-900" }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white pb-20">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 pt-28 px-6 max-w-7xl mx-auto mb-4">
        <Link href="/" className="hover:text-slate-300"><Home size={16} /></Link>
        <span>/</span>
        <Link href="/seller" className="hover:text-slate-300">Sellers</Link>
        <span>/</span>
        <span className="text-slate-300">{user.name}</span>
      </div>

      {/* --- HERO BANNER (Professional Look) --- */}
      <div className="h-80 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        {/* Stats on Banner (Optional) */}
        <div className="absolute top-24 right-6 hidden md:flex gap-6 text-sm font-bold text-slate-300">
           <div className="flex items-center gap-2"><Award className="text-yellow-500" /> Top Rated Seller</div>
           <div className="flex items-center gap-2"><Check className="text-green-500" /> 100+ Projects Done</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative -mt-32 z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- LEFT SIDEBAR (The Trust Center) --- */}
          <div className="w-full lg:w-96 flex-shrink-0 space-y-6">
            
            {/* 1. Main Profile Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              {/* Glowing Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-3xl transition duration-500 pointer-events-none"></div>

              {/* Avatar with Status */}
              <div className="relative mb-4">
                 <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg border-4 border-slate-950 mx-auto lg:mx-0">
                    {user.name[0]}
                 </div>
                 <div className="absolute bottom-2 right-[calc(50%-4.5rem)] lg:right-auto lg:left-28 bg-green-500 border-4 border-slate-900 w-6 h-6 rounded-full" title="Online"></div>
              </div>

              {/* Name & Badge */}
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold flex items-center justify-center lg:justify-start gap-2 mb-1">
                  {user.name} 
                  {user.isVerified && (
                    <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 p-1 rounded-full" title="Identity Verified">
                      <ShieldCheck size={18} fill="currentColor" className="text-blue-500" />
                    </div>
                  )}
                </h1>
                <p className="text-slate-400 font-medium mb-4">{user.username}</p>
                
                {/* Impactful Verification Box */}
                {user.isVerified && (
                   <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-3 mb-6 flex items-center gap-3">
                      <div className="bg-blue-500 text-white p-2 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <ShieldCheck size={20} />
                      </div>
                      <div className="text-left">
                         <h4 className="text-blue-400 font-bold text-sm leading-tight">Verified Pro</h4>
                         <p className="text-blue-300/60 text-[10px] uppercase tracking-wider font-semibold">Identity & Payment Verified</p>
                      </div>
                   </div>
                )}

                <p className="text-white leading-relaxed mb-6 font-medium text-sm border-l-2 border-indigo-500 pl-3">
                  {user.tagline}
                </p>

                <button className="w-full bg-white hover:bg-indigo-50 text-slate-950 py-3.5 rounded-xl font-bold shadow-lg transition active:scale-[0.98] flex items-center justify-center gap-2">
                  <MessageCircle size={18} /> Contact Me
                </button>
              </div>
            </div>

            {/* 2. Stats & Verification Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
               <h3 className="font-bold mb-4 text-slate-300 uppercase text-xs tracking-wider">Performance & Trust</h3>
               
               {/* Job Success Score */}
               <div className="mb-6">
                 <div className="flex justify-between text-sm font-bold mb-2">
                   <span>Job Success</span>
                   <span className="text-green-400">{user.jobSuccess}%</span>
                 </div>
                 <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                   <div className="bg-green-500 h-full rounded-full" style={{ width: `${user.jobSuccess}%` }}></div>
                 </div>
               </div>

               <ul className="space-y-4 text-sm text-slate-400">
                 <li className="flex justify-between">
                    <span className="flex items-center gap-2"><MapPin size={16}/> From</span>
                    <span className="text-white font-medium">{user.location}</span>
                 </li>
                 <li className="flex justify-between">
                    <span className="flex items-center gap-2"><Calendar size={16}/> Member since</span>
                    <span className="text-white font-medium">{user.joined}</span>
                 </li>
                 <li className="flex justify-between">
                    <span className="flex items-center gap-2"><Clock size={16}/> Avg. Response</span>
                    <span className="text-white font-medium">{user.avgResponse}</span>
                 </li>
                 <li className="flex justify-between">
                    <span className="flex items-center gap-2"><Zap size={16}/> Last Delivery</span>
                    <span className="text-white font-medium">{user.lastDelivery}</span>
                 </li>
               </ul>

               <div className="border-t border-slate-800 mt-6 pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" /> Government ID Checked
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" /> Email Verified
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" /> Phone Verified
                  </div>
               </div>
            </div>

            {/* 3. Skills */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
               <h3 className="font-bold mb-4 text-slate-300 uppercase text-xs tracking-wider">Skills</h3>
               <div className="flex flex-wrap gap-2">
                 {user.skills.map(skill => (
                   <span key={skill} className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 hover:border-indigo-500/50 transition border border-slate-700 rounded-lg text-xs font-medium cursor-default">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

          </div>

          {/* --- RIGHT CONTENT (Portfolio & Gigs) --- */}
          <div className="flex-1 lg:pt-8 w-full">
            
            {/* Bio Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 leading-relaxed text-slate-300">
                {user.bio}
              </div>
            </div>

            {/* Active Gigs */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                 <h2 className="text-2xl font-bold">My Gigs</h2>
                 <button className="text-indigo-400 text-sm font-bold flex items-center gap-1 hover:underline">View All <ChevronRight size={16}/></button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gigs.map((gig, index) => (
                  <div key={index} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition cursor-pointer flex flex-col">
                    {/* Thumbnail */}
                    <div className={`h-48 ${gig.image} relative overflow-hidden`}>
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                       <div className="absolute bottom-4 left-4 font-bold text-white text-lg group-hover:text-indigo-300 transition line-clamp-2 pr-4">{gig.title}</div>
                    </div>
                    
                    {/* Footer */}
                    <div className="p-4 flex justify-between items-center bg-slate-900">
                       <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                          <Star size={14} fill="currentColor" /> 5.0 <span className="text-slate-500 font-normal">(42)</span>
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] text-slate-500 block uppercase">Starting at</span>
                          <span className="text-lg font-bold text-white">${gig.price}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section (Sneak Peek) */}
            <div>
               <h2 className="text-2xl font-bold mb-6">What Clients Say</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[1, 2].map((i) => (
                   <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500">C</div>
                       <div>
                         <h4 className="font-bold text-sm">Client Name</h4>
                         <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                       </div>
                       <span className="ml-auto text-xs text-slate-600">2w ago</span>
                     </div>
                     <p className="text-slate-400 text-sm italic">"Abhishek is a gem! He understood the requirements perfectly and delivered a bug-free code. Will hire again."</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}