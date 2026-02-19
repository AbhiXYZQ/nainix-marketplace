"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MessageSquare, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function InboxPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
  }

  const messages = [
    { id: 1, from: "Sarah Chen", subject: "Project Proposal", preview: "I'd like to discuss your availability...", timestamp: "2 hours ago", unread: true },
    { id: 2, from: "Alex Johnson", subject: "Completed Milestone", preview: "The first phase is complete and ready for review...", timestamp: "5 hours ago", unread: true },
    { id: 3, from: "Emma Davis", subject: "Payment Received", preview: "Your payment has been processed successfully...", timestamp: "1 day ago", unread: false },
  ];

  const filteredMessages = messages.filter(msg => 
    msg.from.toLowerCase().includes(searchQuery.toLowerCase()) || 
    msg.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Inbox</h1>
          <p className="text-slate-400">Manage your messages and communications</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-2">
          {filteredMessages.length > 0 ? (
            filteredMessages.map(msg => (
              <div 
                key={msg.id}
                className={`p-4 rounded-lg border transition cursor-pointer ${
                  msg.unread 
                    ? "bg-indigo-900/10 border-indigo-500/30 hover:bg-indigo-900/20" 
                    : "bg-slate-900/40 border-slate-800 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {msg.from[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h3 className={`font-bold ${msg.unread ? "text-white" : "text-slate-300"}`}>{msg.from}</h3>
                      <span className="text-xs text-slate-500 flex-shrink-0">{msg.timestamp}</span>
                    </div>
                    <p className={`font-semibold mb-1 ${msg.unread ? "text-indigo-400" : "text-slate-300"}`}>{msg.subject}</p>
                    <p className="text-sm text-slate-400 truncate">{msg.preview}</p>
                  </div>
                  {msg.unread && <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageSquare size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-400">No messages found</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
