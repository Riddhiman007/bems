// import { PrismaClient } from "@prisma/client";
// let prisma = new PrismaClient();
// async function t(teacherId) {
//   return await prisma.subjectTaughtByInWhichGrade.findMany({
//     where: { teacherId },
//     select: { subjects: true, grade: { select: { grade: true } } },
//   });
// }
// let f = await t("65d2e66cb4d04a168547d6c8");
// console.log(f);

import {calculateFaPercentage} from "@bems/exam";

let data = {"English": 34, "Hindi": 45}

// function calculateTotalMarksJs(totalMarksPerSubject) {
//     let total_marks = 0;
//     Object.values(totalMarksPerSubject).forEach((sub) => {
//         total_marks += sub;
//     });
//     return total_marks;
// }
//
// const startTime = performance.now()
// calculateTotalMarks(data, [])
// const endTime = performance.now()
// console.log("Rust based function: ", endTime - startTime)
// const startTime2 = performance.now()
//
// calculateTotalMarksJs(data)
// const endTime2 = performance.now()
//
//
// console.log("Js based function: ", endTime2 - startTime2)

console.log(calculateFaPercentage(234, 443))