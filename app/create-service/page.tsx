"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateServicePage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Web Development",
    price: "",
    deliveryTime: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user?.email) {
      setMessage("❌ You must be logged in to create a service.");
      return;
    }

    setMessage("Creating Service...");

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          email: session.user.email, // Backend is email se user dhoondhega
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Service Created Successfully!");
        setTimeout(() => {
          router.push("/"); // Success hone par Home page par bhej denge
        }, 2000);
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong");
    }
  };

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Please Login to create a service.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Create a New Gig 🚀</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Service Title</label>
            <input
              type="text"
              name="title"
              placeholder="I will build a responsive website..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              name="category"
              className="w-full p-3 border rounded-lg text-black bg-white"
              onChange={handleChange}
            >
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="SEO">SEO</option>
              <option value="Video Editing">Video Editing</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              rows={4}
              placeholder="Describe what you will provide..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              onChange={handleChange}
              required
            />
          </div>

          {/* Price & Delivery Time Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
              <input
                type="number"
                name="price"
                placeholder="50"
                className="w-full p-3 border rounded-lg text-black"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Delivery Time (Days)</label>
              <input
                type="number"
                name="deliveryTime"
                placeholder="3"
                className="w-full p-3 border rounded-lg text-black"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Post Service
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-lg font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}