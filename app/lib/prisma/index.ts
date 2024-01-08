import { PrismaClient } from "@prisma/client";

const prismaClientSingleton: () => PrismaClient = () => new PrismaClient();

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();
export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export * from "./actions";
export * from "./helper";
export * from "./schemas";
