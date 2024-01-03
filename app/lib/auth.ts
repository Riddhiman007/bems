import NextAuth from "next-auth";
import EmailProvider from "@auth/core/providers/email";
import prisma from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, auth, signIn, signOut, update } = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      secret: process.env.EMAIL_HASH,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify",
    signOut: "/auth/logout",
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  trustHost: true,

  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
});
