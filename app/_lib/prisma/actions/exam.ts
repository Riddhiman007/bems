"use server";

import { ExamType, GradeType } from "@prisma/client";
import { DefaultExamMarks, GradeClass } from "@/_utils/types";
import { primaryGrades, middleGrades, secondaryGrades } from "..";
import prisma, { allGrades, exam_defaults as defaults } from "@/_lib/prisma";
interface ExamProps extends DefaultExamMarks {
  fromGrade: GradeType;
  toGrade: GradeType;
}
export async function createNewExam({
  fromGrade,
  exam_type,
  toGrade,
  middle_main_sub_marks,
  middle_optional_sub_marks,
  primary_main_sub_marks,
  primary_optional_sub_marks,
  secondary_main_sub_marks,
  secondary_optional_sub_marks,
}: ExamProps) {
  console.log("Creating new exam properties...");

  let grades = allGrades.filter((val) => {
    for (
      let index = allGrades.findIndex((val) => val === fromGrade);
      index <= allGrades.findIndex((val) => val === toGrade);
      index++
    ) {
      if (val === allGrades[index]) {
        return val;
      }
    }
  });

  const exam_defaults = defaults.find((val) =>
    val.exam_type === exam_type ? val : undefined,
  );
  let newExam = await prisma.exam.create({
    data: {
      type: exam_type,
      GradeExamRel: {
        createMany: {
          data: grades.map((val) => {
            const grade_class: GradeClass = primaryGrades.includes(val)
              ? "primary"
              : middleGrades.includes(val)
                ? "middle"
                : secondaryGrades.includes(val)
                  ? "secondary"
                  : "prep";

            return {
              gradeId: val,
              OptionalSubjectMarks:
                grade_class === "primary"
                  ? primary_optional_sub_marks
                    ? primary_optional_sub_marks
                    : exam_defaults?.primary_optional_sub_marks
                  : grade_class === "middle"
                    ? middle_optional_sub_marks
                      ? middle_optional_sub_marks
                      : exam_defaults?.middle_optional_sub_marks
                    : grade_class === "secondary"
                      ? secondary_optional_sub_marks
                        ? secondary_optional_sub_marks
                        : exam_defaults?.secondary_optional_sub_marks
                      : exam_defaults?.pre_primary_sub_marks,
              MainSubjectMarks:
                grade_class === "primary"
                  ? primary_main_sub_marks
                    ? primary_main_sub_marks
                    : exam_defaults?.primary_main_sub_marks
                  : grade_class === "middle"
                    ? middle_main_sub_marks
                      ? middle_main_sub_marks
                      : exam_defaults?.middle_main_sub_marks
                    : grade_class === "secondary"
                      ? secondary_main_sub_marks
                        ? secondary_main_sub_marks
                        : exam_defaults?.secondary_main_sub_marks
                      : exam_defaults?.pre_primary_sub_marks,
            };
          }),
        },
      },
    },
  });

  let awaited_students = grades.map(async (grade) => {
    return await prisma.student.findMany({ where: { grade_name: grade } });
  });

  awaited_students.forEach((student) => {
    student.then((stud) => {
      stud.map(async (stud) => {
        await prisma.examRecord.create({
          data: {
            name: { connect: { id: stud.id } },
            Exam: { connect: { id: newExam.id } },
          },
        });
      });
    });
  });
  console.log("New exam created successfully");
  return newExam;
}

export async function fetchIncompleteExam() {
  return await prisma.exam.findFirst({ where: { isComplete: false } });
}

export async function isExamPresent(examType: ExamType) {
  let res = await prisma.exam.findUnique({ where: { type: examType } });
  if (res) return res;
  else return false;
}

export async function fetchAllExams() {
  let res = await prisma.exam.findMany();
  return res.map((val) => ({ key: val.id, type: val.type, isComplete: val.isComplete }));
}
