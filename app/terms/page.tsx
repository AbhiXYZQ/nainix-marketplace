"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 font-bold">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <h1 className="text-5xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Last updated: February 19, 2026</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>By accessing and using Nainix, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account and password and for restricting access to their computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
            <p>The content, features, and functionality (including but not limited to all information, software, text, displays, images, video and audio) are owned by Nainix, its licensors, or other providers of such material and are protected by United States and international copyright laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer of Warranties</h2>
            <p>This site is provided on an "AS-IS" and "AS AVAILABLE" basis. Nainix expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>In no event shall Nainix, its directors, employees, or agents be liable for any indirect, incidental, special, consequential or punitive damages resulting from the use of this website or service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
            <p>Nainix may terminate or suspend access to the service immediately, without prior notice or liability, for any reason whatsoever, including if you breach any of the Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in California.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 underline">contact us</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
