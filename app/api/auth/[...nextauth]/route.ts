import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // 1. Database Connect karo
        await connectDB();

        // 2. User dhoondho
        const user = await User.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // 3. Password Check karo
        const isValid = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        // 4. Sab sahi hai, User return karo
        // ✅ FIX: .toString() lagaya hai taaki TypeScript khush rahe
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id; // ID bhi token me daal dete hain safety ke liye
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Humara custom login page yahan hoga
  },
});

export { handler as GET, handler as POST };