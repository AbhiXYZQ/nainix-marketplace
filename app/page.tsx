"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Service ka type define kar rahe hain
interface ServiceType {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  sellerId: {
    name: string;
  };
}

export default function Home() {
  const { data: session } = useSession();
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  // Ye function API se services lekar aayega
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      {/* --- HEADER SECTION --- */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Nainix Marketplace 🚀</h1>
        
        <div className="flex items-center gap-4">
          <Link href="/create-service" className="text-green-600 font-semibold hover:underline">
            + Post a Service
          </Link>
          
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Hi, <b>{session.user?.name}</b></span>
              <button 
                onClick={() => signOut()} 
                className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link href="/login" className="px-4 py-2 border rounded hover:bg-gray-100">Login</Link>
              <Link href="/register" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      {/* --- SERVICES GRID SECTION --- */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Available Gigs</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading services...</p>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No services found yet.</p>
            <Link href="/create-service" className="text-blue-500 underline mt-2 inline-block">
              Be the first to create one!
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service._id} className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition border">
                <div className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-wide">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center border-t pt-4 mt-2">
                  <span className="text-sm text-gray-500">
                    By: {service.sellerId?.name || "Unknown"}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}