import { connectDB } from "@/lib/connectDB";
import NextAuth, { NextAuthOptions, Account } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { User } from "@/utils/User"; // Ensure this is defined correctly

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const { email, password } = credentials;

        const db = await connectDB();
        const currentUser = await db
          .collection<User>("users")
          .findOne({ email });

        if (!currentUser || !currentUser.password) {
          return null; // Ensure TypeScript knows `password` exists here
        }

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null; // Incorrect password
        }

        const { password: _, ...userWithoutPassword } = currentUser;
        return {
          ...userWithoutPassword,
          id: currentUser._id.toString(),
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile", // Ensure these scopes are included
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: User;
      account: Account;
    }): Promise<boolean> {
      if (account.provider === "google" || account.provider === "github") {
        const nameToSave = user?.name || "Default Name";
        const emailToSave = user?.email || "no-email@example.com";
        const imageToSave = user?.image || "https://default-image.url";

        try {
          const db = await connectDB();
          const userCollection = db.collection<User>("users");
          const existingUser = await userCollection.findOne({
            email: emailToSave,
          });

          if (!existingUser) {
            console.log("Inserting new user:", {
              name: nameToSave,
              email: emailToSave,
              image: imageToSave,
            });

            await userCollection.insertOne({
              name,
              email,
            });
          }

          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }

      return true; // Default to true for other sign-in methods
    },
  },
  pages: {
    signIn: "/login",
  },
} as NextAuthOptions);

export { handler as GET, handler as POST };
