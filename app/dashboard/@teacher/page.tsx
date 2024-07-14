import MotionMuiButton from "@/_components/Motion/MotionMuiButton";
import { auth } from "@/_lib/auth";
import {
  fetchExamRecordsOfParticularGrade,
  fetchIncompleteExam,
  getExamSubjectsAndGrades,
  getTeacher,
} from "@/_lib/prisma";
import { allExamSubjects } from "@/_utils/types";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const ClassRecord = dynamic(
  () => import("./_components").then((mod) => mod.ClassRecord),
  {
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return <Typography>Loading...</Typography>;
      } else if (error) {
        return (
          <div className="flex flex-row gap-10">
            <Typography color="red">Sorry. Failed to load Component</Typography>
            <MotionMuiButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              color="success"
              onClick={retry}
              className="bg-green-700 px-4 py-2 text-green-50"
            >
              Retry
            </MotionMuiButton>
          </div>
        );
      } else return null;
    },
    ssr: false,
  },
);
const InsertMarks = dynamic(
  () => import("./_components").then((mod) => mod.InsertMarks),
  {
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return <Typography>Loading...</Typography>;
      } else if (error) {
        return (
          <div className="flex flex-row gap-10">
            <Typography color="red">Sorry. Failed to load Component</Typography>
            <MotionMuiButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              color="success"
              onClick={retry}
              className="bg-green-700 px-4 py-2 text-green-50"
            >
              Retry
            </MotionMuiButton>
          </div>
        );
      } else return null;
    },
    ssr: false,
  },
);

export default async function TeacherDashBoard() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  const subjects = await getExamSubjectsAndGrades(session.user.id);
  console.log("Subjects: ", subjects);

  const teacher = await getTeacher(session.user.id, session.user.role);
  const incompleteExam = await fetchIncompleteExam();
  const studentsOfOwnClass = await fetchExamRecordsOfParticularGrade(
    incompleteExam?.type,
    teacher?.class?.grade,
  );
  let rankedStuds = studentsOfOwnClass.toSorted((a, b) => b.percentage - a.percentage);
  const records = studentsOfOwnClass.map((stud) => {
    let res: {
      [key: symbol]: any;
      [key: string]: any;
    } = { id: stud.name.id, fullname: stud.name.fullname };

    allExamSubjects.forEach((sub) => {
      res[sub] = stud[sub];
    });
    res["percentage"] = stud.percentage;
    res["totalMarks"] = stud.totalMarks;
    let idx = rankedStuds.findIndex((r) => r === stud) + 1;
    if (idx <= 3) {
      res["rank"] = idx;
    }
    return res;
  });

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
            <Typography>Std: {teacher?.class?.grade}</Typography>
          </div>
        </CardContent>
      </Card>
      <Card className="dark:bg-slate-900">
        <CardContent className="flex flex-col gap-7">
          <Typography variant="h4">
            Class exam records for {incompleteExam?.type}
          </Typography>
          <div>
            <ClassRecord rows={records} />
          </div>
        </CardContent>
      </Card>
      {incompleteExam && (
        <Card className="dark:bg-slate-900">
          <CardContent>
            <Typography className="" variant="h4">
              Exam record for {incompleteExam.type}
            </Typography>
            <div className="flex flex-col gap-10">
              {/*@ts-ignore */}
              {subjects.map(async (subject) => {
                const students = await fetchExamRecordsOfParticularGrade(
                  incompleteExam.type,
                  subject.grade.grade,
                );
                return (
                  <>
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
                  </>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
