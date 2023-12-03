import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const globalWithPrisma = global as unknown as { prisma: PrismaClient };

if (process.env.NODE_ENV === "development") {
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
    prisma = globalWithPrisma.prisma;
  }
} else {
  prisma = new PrismaClient();
}

export default prisma;
