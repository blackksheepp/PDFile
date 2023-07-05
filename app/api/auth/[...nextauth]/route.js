import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { getUser, createUser } from "@lib/prisma/Users";
import prisma from "@lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }}
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
 
    async signIn({ account, profile, user, credentials }) {
      try {
        
        const userExists = await getUser(profile.email);
        if (!userExists) {
          const regx =
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

          if (!profile?.name?.match(regx)) {
            console.log("Username didn't match the regex.");
            return false;
          }
        }

        await createUser({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.image,
        })

        prisma.$disconnect()        
        return true;
      } catch (error) {
        prisma.$disconnect()        
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
