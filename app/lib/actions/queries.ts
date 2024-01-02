"use server";

import { signIn } from "../auth";
import prisma from "../prisma";

export async function LoginByUsername(formData: FormData) {
  const user = await prisma.user.findFirst({
    where: { username: formData.get("username").toString() },
  });
  await signIn("email", { email: user.email });
}

export async function findUserByUsername(username: string) {
  const user = await prisma.user.findFirst({ where: { username } });
  return user;
}

export async function LoginByEmail(formData: FormData) {
  await signIn("email", { email: formData.get("email").toString() });
}
