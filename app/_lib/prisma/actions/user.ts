"use server";

import prisma from "..";
export async function isValidEmail(email: string) {
  let user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    return true;
  }
  return false;
}
