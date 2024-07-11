"use server";

import { signIn, signOut } from "./auth";

export async function logOut() {
  await signOut({
    redirectTo: "/",
    redirect: true,
  });
}

export async function loginByEmail(email: string) {
  await signIn("resend", { email, redirect: true, redirectTo: "/dashboard" });
}
