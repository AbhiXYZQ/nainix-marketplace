"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Upload, DollarSign, LayoutTemplate, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function CreateService() {
  const [step, setStep] = useState(1);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    title: "",
    category: "Web Development",
    price: "",
    description: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white pb-20">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-24 pb-2 px-6 flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-300">Home</Link>
        <span>/</span>
        <Link href="/dashboard" className="hover:text-slate-300">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-300">Create Service</span>
      </div>

      {/* --- PROGRESS BAR (Top) --- */}
      <div className="pt-24 pb-8 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-between items-center relative">
            {/* Gray Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 rounded-full"></div>
            {/* Active Line */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-indigo-600 -z-10 rounded-full transition-all duration-500"
              style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
            ></div>

            {/* Step 1 Bubble */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-300 ${step >= 1 ? "bg-indigo-600 border-slate-950 text-white" : "bg-slate-900 border-slate-800 text-slate-500"}`}>1</div>
            
            {/* Step 2 Bubble */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-300 ${step >= 2 ? "bg-indigo-600 border-slate-950 text-white" : "bg-slate-900 border-slate-800 text-slate-500"}`}>2</div>
            
            {/* Step 3 Bubble */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-300 ${step >= 3 ? "bg-indigo-600 border-slate-950 text-white" : "bg-slate-900 border-slate-800 text-slate-500"}`}>3</div>
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">
            <span>Overview</span>
            <span>Pricing</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      {/* --- FORM AREA --- */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* STEP 1: OVERVIEW */}
        {step === 1 && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl font-bold mb-2">Let's start with the basics</h1>
              <p className="text-slate-400">What service are you offering to the world?</p>
            </div>

            <div className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Gig Title</label>
                <div className="flex items-center bg-slate-950 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition">
                  <span className="bg-slate-800 text-slate-400 px-4 py-3 text-sm font-bold border-r border-slate-700">I will</span>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="do something I'm really good at..." 
                    className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder-slate-600"
                  />
                </div>
              </div>

              {/* Category Select */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Category</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Web Development", "Graphic Design", "Video Editing", "Digital Marketing", "Writing", "AI Services"].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setFormData({...formData, category: cat})}
                      className={`p-4 rounded-xl border text-sm font-bold text-left transition-all ${formData.category === cat ? "border-indigo-500 bg-indigo-500/10 text-indigo-400" : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: PRICING */}
        {step === 2 && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl font-bold mb-2">Name your price</h1>
              <p className="text-slate-400">How much do you want to charge for this service?</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Basic Package Card */}
                <div className="flex-1 bg-slate-950 border border-indigo-500 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                  <div className="mb-4">
                    <LayoutTemplate className="text-indigo-400 mb-2" size={32} />
                    <h3 className="font-bold text-lg">Standard Package</h3>
                    <p className="text-slate-400 text-sm">Best for small projects</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="text-xs font-bold text-slate-500 uppercase">Price ($)</label>
                    <div className="flex items-center mt-1">
                      <DollarSign size={20} className="text-slate-400" />
                      <input 
                        type="number" 
                        placeholder="50" 
                        className="bg-transparent text-3xl font-bold text-white outline-none w-full placeholder-slate-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-green-500" /> 3 Days Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-green-500" /> 2 Revisions
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-green-500" /> Source Code
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className="flex-1 flex flex-col justify-center text-slate-400 text-sm p-4">
                  <p className="mb-4">
                    <strong className="text-white">Tip:</strong> Keep your pricing competitive. You can always increase it once you have some 5-star reviews.
                  </p>
                  <p>
                    Nainix charges <span className="text-green-400 font-bold">0% commission</span>, so you keep 100% of what you earn here.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* STEP 3: GALLERY */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl font-bold mb-2">Showcase your work</h1>
              <p className="text-slate-400">Upload images that describe your service best.</p>
            </div>

            <div className="border-2 border-dashed border-slate-700 bg-slate-900/50 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-indigo-500 hover:bg-slate-900 transition cursor-pointer group">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Upload size={32} className="text-slate-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Drag & Drop Images</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
                Supports JPG, PNG and WEBP. Max size 5MB.
              </p>
              <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-600 transition">Browse Files</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
               {/* Empty Slots for Preview */}
               {[1, 2, 3].map((i) => (
                 <div key={i} className="aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-600">
                   <ImageIcon size={24} />
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* --- BOTTOM NAVIGATION --- */}
        <div className="mt-12 flex justify-between pt-6 border-t border-slate-800">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-3 rounded-xl font-bold transition ${step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
          >
            Back
          </button>

          <button 
            onClick={step === 3 ? () => alert("Gig Published! 🚀") : nextStep}
            className="bg-white hover:bg-indigo-50 text-slate-950 px-8 py-3 rounded-xl font-bold shadow-lg shadow-white/10 transition flex items-center gap-2"
          >
            {step === 3 ? "Publish Gig" : "Save & Continue"} <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </main>
  );
}