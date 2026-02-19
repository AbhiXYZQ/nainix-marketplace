"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Wallet, ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";
import { useEffect } from "react";

export default function WalletPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
  }

  const balance = 2450.50;
  const transactions = [
    { id: 1, type: "credit", from: "Alex Johnson", amount: 500, description: "Payment for Web Development Project", date: "Feb 18, 2026" },
    { id: 2, type: "debit", to: "Stripe Withdrawal", amount: 1000, description: "Withdrawal to Bank Account", date: "Feb 17, 2026" },
    { id: 3, type: "credit", from: "Emma Davis", amount: 750, description: "UI Design Completion", date: "Feb 15, 2026" },
    { id: 4, type: "credit", from: "Sarah Chen", amount: 300, description: "Consultation Fee", date: "Feb 14, 2026" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Wallet</h1>
          <p className="text-slate-400">Manage your earnings and payments</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Wallet size={24} className="text-white" />
            </div>
            <span className="text-slate-400 text-sm font-bold">Available Balance</span>
          </div>
          <div className="flex justify-between items-end gap-4">
            <div>
              <h2 className="text-5xl font-extrabold mb-2">${balance.toFixed(2)}</h2>
              <p className="text-slate-400 text-sm">Last updated today</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2">
              <Plus size={18} /> Withdraw
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <ArrowDownLeft className="text-green-500" size={20} />
              <span className="text-slate-400 text-sm">Total Earned</span>
            </div>
            <p className="text-3xl font-bold">$8,550</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <ArrowUpRight className="text-red-500" size={20} />
              <span className="text-slate-400 text-sm">Total Withdrawn</span>
            </div>
            <p className="text-3xl font-bold">$6,100</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="text-purple-500" size={20} />
              <span className="text-slate-400 text-sm">Pending Payments</span>
            </div>
            <p className="text-3xl font-bold">$0</p>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Recent Transactions</h3>
          <div className="space-y-2">
            {transactions.map(tx => (
              <div key={tx.id} className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex items-center justify-between hover:border-slate-700 transition">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'credit' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {tx.type === 'credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <p className="font-bold text-white">{tx.type === 'credit' ? `Received from ${tx.from}` : `Withdrawn to ${tx.to}`}</p>
                    <p className="text-sm text-slate-400">{tx.description}</p>
                    <p className="text-xs text-slate-500 mt-1">{tx.date}</p>
                  </div>
                </div>
                <p className={`font-bold text-lg ${tx.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                  {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
