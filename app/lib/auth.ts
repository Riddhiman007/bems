import NextAuth from "next-auth";
import EmailProvider from "@auth/core/providers/email";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { Adapter, AdapterAccount } from "@auth/core/adapters";
import { Prisma, PrismaClient } from "@prisma/client";

export function CustomPrismaAdapter(p: PrismaClient): Adapter {
  return {
    // @ts-ignore
    createUser: (data) => p.user.create({ data }),
    getUser: (id) => p.user.findFirst({ where: { id } }),
    getUserByEmail: (email) => p.user.findFirst({ where: { email } }),
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return account?.user ?? null;
    },
    updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),
    deleteUser: (id) => p.user.delete({ where: { id } }),
    linkAccount: (data) => p.account.create({ data }) as unknown as AdapterAccount,
    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,
    async getSessionAndUser(sessionToken) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
    createSession: (data) => p.session.create({ data }),
    updateSession: (data) =>
      p.session.update({ where: { sessionToken: data.sessionToken }, data }),
    deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),
    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create({ data });
      // @ts-expect-errors // MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    },
    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025") return null;
        throw error;
      }
    },
  };
}
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
  },
  adapter: CustomPrismaAdapter(prisma),
  session: { strategy: "database" },
  trustHost: true,

  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    async signIn(params) {
      return true;
    },
  },
});
