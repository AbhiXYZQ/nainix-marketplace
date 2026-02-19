"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Check, ArrowRight } from "lucide-react";

export default function SellerOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bio: "",
    skills: "",
    hourlyRate: "",
    category: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Seller onboarding:", formData);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold mb-2">Become a Seller</h1>
          <p className="text-slate-400">Set up your profile and start earning. Step {step} of 3</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 flex gap-2">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`h-2 flex-1 rounded-full transition ${
                i <= step ? "bg-indigo-600" : "bg-slate-800"
              }`}
            />
          ))}
        </div>

        {/* Form Steps */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 mb-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Check className="text-indigo-400" size={24} /> Basic Information
                </h2>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input 
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Bio</label>
                <textarea 
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 h-24 resize-none"
                  placeholder="Tell clients about yourself and your experience..."
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Check className="text-indigo-400" size={24} /> Skills & Category
                </h2>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Service Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select a category</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="blockchain">Web3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Your Skills (comma-separated)</label>
                <input 
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="React, Next.js, TypeScript"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Check className="text-indigo-400" size={24} /> Pricing & Review
                </h2>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Hourly Rate (USD)</label>
                <input 
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="50"
                />
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-6">
                <h3 className="font-bold mb-4">Review Your Profile</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><span className="text-slate-400">Name:</span> {formData.fullName || "Not provided"}</p>
                  <p><span className="text-slate-400">Email:</span> {formData.email || "Not provided"}</p>
                  <p><span className="text-slate-400">Category:</span> {formData.category || "Not provided"}</p>
                  <p><span className="text-slate-400">Rate:</span> ${formData.hourlyRate}/hr</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button 
            onClick={handlePrev}
            disabled={step === 1}
            className="px-6 py-3 rounded-lg font-bold transition disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 hover:bg-slate-700"
          >
            Previous
          </button>
          
          {step < 3 ? (
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition"
            >
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition"
            >
              Complete Setup <Check size={18} />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
