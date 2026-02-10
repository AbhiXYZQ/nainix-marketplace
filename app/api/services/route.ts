import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Service from "@/models/Service";
import User from "@/models/User";

// 1. SERVICES LAANE KE LIYE (GET)
export async function GET() {
  try {
    await connectDB();
    // Saari services dhoondho aur seller ka naam bhi saath lao
    const services = await Service.find().populate("sellerId", "name email");
    return NextResponse.json(services);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 2. SERVICE BANANE KE LIYE (POST)
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, description, category, price, deliveryTime, email } = body;

    if (!title || !description || !price || !email) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newService = await Service.create({
      sellerId: user._id,
      title,
      description,
      category,
      price,
      deliveryTime,
    });

    return NextResponse.json(
      { message: "Service Created Successfully!", service: newService },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating service", error: error.message },
      { status: 500 }
    );
  }
}