"use client";

import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-400">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-slate-400">support@nainix.me</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
              <div>
                <label className="block text-sm font-bold mb-2">Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 h-32 resize-none"
                  placeholder="Tell us what you think..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>

              {submitted && (
                <p className="text-green-400 text-sm text-center">✓ Message sent! We'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
