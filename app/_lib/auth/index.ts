import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";
import prisma from "../prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { User as PrismaUser } from "@prisma/client";
import { sendVerificationRequest } from "./sendVerificationRequest";
declare module "next-auth" {
  interface User extends PrismaUser {}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      secret: process.env.EMAIL_HASH,
      sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify",
    signOut: "/auth/logout",
  },
  // @ts-ignore
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

// export * from "./actions"
