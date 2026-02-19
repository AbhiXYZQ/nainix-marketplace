"use client";

import { useState, use } from "react"; // 👈 'use' import kiya
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Lock, CreditCard, Wallet } from "lucide-react";

// 👇 Type update: params ab Promise hai
export default function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 👇 Params ko unwrap kiya (Next.js 15 Requirement)
  const { id } = use(params);

  const [paymentMethod, setPaymentMethod] = useState("upi");

  // MOCK DATA (Jab Backend lagega tab hum 'id' use karke database se data layenge)
  const serviceDetails = {
    title: "Build a Full Stack Next.js Marketplace Website",
    seller: "Abhishek Kumar",
    price: 5000, // ₹5000
    deliveryTime: "7 Days",
  };

  const platformFee = 0; // Nainix Special: 0% Fee
  const totalAmount = serviceDetails.price + platformFee;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-indigo-600">Home</Link> 
          <span>/</span>
          <Link href={`/service/${id}`} className="hover:text-indigo-600">Service</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">Checkout</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Payment Options */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Payment Method Selection */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CreditCard className="text-indigo-600" /> Payment Method
              </h2>
              
              <div className="space-y-3">
                {/* UPI Option */}
                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition ${
                    paymentMethod === "upi" ? "border-indigo-600 bg-indigo-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "upi" ? "border-indigo-600" : "border-slate-300"}`}>
                      {paymentMethod === "upi" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                    </div>
                    <span className="font-bold text-slate-800">Pay via UPI (PhonePe/GPay)</span>
                  </div>
                  <Wallet size={20} className="text-slate-400" />
                </label>

                {/* Card Option */}
                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition ${
                    paymentMethod === "card" ? "border-indigo-600 bg-indigo-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-indigo-600" : "border-slate-300"}`}>
                      {paymentMethod === "card" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                    </div>
                    <span className="font-bold text-slate-800">Credit/Debit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-5 w-8 bg-slate-200 rounded"></div>
                    <div className="h-5 w-8 bg-slate-200 rounded"></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-sm text-slate-500 bg-slate-100 p-4 rounded-xl">
              <div className="flex items-center gap-1">
                <ShieldCheck size={16} className="text-green-600" /> SSL Secure
              </div>
              <div className="flex items-center gap-1">
                <Lock size={16} className="text-green-600" /> 100% Money Back Guarantee
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0">
                  {/* Image Placeholder */}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{serviceDetails.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">By {serviceDetails.seller}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Subtotal</span>
                  <span>₹{serviceDetails.price}</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold text-sm">
                  <span>Service Fee (0%)</span>
                  <span>₹0</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-lg">Total</span>
                  <span className="font-bold text-indigo-600 text-2xl">₹{totalAmount}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition active:scale-95 flex items-center justify-center gap-2">
                Confirm & Pay ₹{totalAmount}
              </button>

              <p className="text-xs text-center text-slate-400 mt-4">
                By clicking pay, you agree to Nainix Terms of Service.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}