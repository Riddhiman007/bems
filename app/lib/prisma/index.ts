import { PrismaClient } from "@prisma/client";

const globalWithPrisma = global as unknown as { prisma: PrismaClient };
function isPrismaInDevMode() {
  if (process.env.NODE_ENV !== "production") {
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient();
      return globalWithPrisma.prisma;
    }
  }
  return new PrismaClient();
}

const prisma = isPrismaInDevMode();

export default prisma;
