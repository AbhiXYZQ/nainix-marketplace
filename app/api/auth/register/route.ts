import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // 1. Database se connect karo
    await connectDB();

    // 2. User jo data bhej raha hai usse padho
    const { name, email, password } = await req.json();

    // Check: Kya sab kuch bhara hai?
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    // Check: Kya ye email pehle se registered hai?
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // 3. Password ko Hash (Encrypt) karo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Naya User create karo
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User Registered Successfully!", userId: newUser._id },
      { status: 201 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { message: "Registration Failed", error: error.message },
      { status: 500 }
    );
  }
}