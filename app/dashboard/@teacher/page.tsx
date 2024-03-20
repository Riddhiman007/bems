import { auth } from "@/lib/auth";
import {
  fetchExamRecordsOfParticularGrade,
  fetchIncompleteExam,
  fetchStudentNameOfParticularGrade,
  getExamSubjectsAndGrades,
  getSubjectsAndGrades,
} from "@/lib/prisma";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { ExamSubjectsList } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";

const InsertMarks = dynamic(() => import("./components/InsertMarks"));

export default async function TeacherDashBoard() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  const subjects = await getExamSubjectsAndGrades(session.user.id);
  console.log("Subjects: ", subjects);

  const incompleteExam = await fetchIncompleteExam();
  return (
    <Container component="main" className="container mt-24 flex flex-col gap-7">
      {/* identity */}
      <Card className="flex flex-row rounded-md px-4 shadow-xl shadow-gray-400 dark:bg-slate-900 dark:shadow dark:shadow-black">
        <CardMedia className=" h-full">
          <Avatar className="mt-4">R</Avatar>
        </CardMedia>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Typography variant="h6">{session.user.fullname}</Typography>
          </div>
          <div className="flex flex-col">
            <Typography>Std: 9th</Typography>
          </div>
        </CardContent>
      </Card>
      <Card className="dark:bg-slate-900">
        <CardContent>
          <Typography className="" variant="h4">
            Exam record
          </Typography>
          {/*@ts-ignore */}
          {incompleteExam &&
            subjects.map(async (subject) => {
              const students = await fetchExamRecordsOfParticularGrade(
                incompleteExam.type,
                subject.grade.grade,
              );
              return (
                <div className="flex flex-col gap-4" key={subject.grade.grade}>
                  <Typography variant="h6">{subject.grade.grade}</Typography>
                  <InsertMarks
                    examType={incompleteExam.type}
                    subjects={subject.exam_Subjects}
                    students={students.map((stud) => {
                      let t: { [key: string]: number } = {};
                      subject.exam_Subjects.forEach((sub) => {
                        t[sub] = stud[sub];
                      });
                      console.log(t);

                      return {
                        id: stud.name.id,
                        name: stud.name.fullname,
                        ...t,
                      };
                    })}
                  />
                </div>
              );
            })}
        </CardContent>
      </Card>
    </Container>
  );
}
