import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
async function t(teacherId) {
  return await prisma.subjectTaughtByInWhichGrade.findMany({
    where: { teacherId },
    select: { subjects: true, grade: { select: { grade: true } } },
  });
}
let f = await t("65d2e66cb4d04a168547d6c8");
console.log(f);
