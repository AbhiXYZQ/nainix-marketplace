import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ 
      message: "✅ Database Connected Successfully!", 
      status: "Nainix is Online" 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      message: "❌ Connection Failed", 
      error: error.message 
    }, { status: 500 });
  }
}