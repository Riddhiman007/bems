"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var globalWithPrisma = global;
function isPrismaInDevMode() {
    if (process.env.NODE_ENV !== "production") {
        if (!globalWithPrisma.prisma) {
            globalWithPrisma.prisma = new client_1.PrismaClient();
            return globalWithPrisma.prisma;
        }
    }
    return new client_1.PrismaClient();
}
var prisma = isPrismaInDevMode();
// export * from "./actions";
// export * as Helpers from "./helper";
// export * from "./schemas";
exports.default = prisma;
