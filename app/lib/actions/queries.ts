"use server";

import { signIn } from "../auth";

export async function LoginByEmail(email: string) {
  await signIn("email", { email, redirect: true, redirectTo: "/dashboard" });
}
