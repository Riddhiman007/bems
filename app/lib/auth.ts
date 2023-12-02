import NextAuth from "next-auth";
import EmailProvider from "@auth/core/providers/email";
import GoogleProvider from "@auth/core/providers/google";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      secret: process.env.SECRET_KEY,
    }),
  ],
});
