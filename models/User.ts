import mongoose, { Schema, Document, Model } from "mongoose";

// 1. TypeScript Interface (Code ko batata hai ki User kaisa dikhega)
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin" | "freelancer"; // Hum role bhi rakhenge
  createdAt: Date;
}

// 2. Mongoose Schema (Database ke liye niyam)
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"], // Naam zaroori hai
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true, // Email repeat nahi hona chahiye
    },
    password: {
      type: String,
      required: false, // Google Login ke liye false rakha hai
    },
    role: {
      type: String,
      enum: ["user", "admin", "freelancer"],
      default: "user",
    },
  },
  {
    timestamps: true, // Ye apne aap "Created At" time jod dega
  }
);

// 3. Model Export (Ye check karta hai ki model pehle se toh nahi bana?)
const User: Model<IUser> =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default User;