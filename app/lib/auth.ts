import NextAuth from "next-auth";
import EmailProvider from "@auth/core/providers/email";
import GoogleProvider from "@auth/core/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      secret: process.env.EMAIL_HASH,
    }),
  ],

  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
});
