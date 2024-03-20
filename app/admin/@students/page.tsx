import React from "react";
import { fetchAllStudents } from "@/lib/prisma";
import { Card, CardContent, Typography } from "@mui/material";
const StudentDataGrid = dynamic(
  () => import("./components").then((mod) => mod.StudentDataGrid),
  {
    ssr: true,
    loading: () => <Typography>Loading...</Typography>,
  },
);

import styles from "../admin.module.css";
import dynamic from "next/dynamic";
export default async function Student() {
  const students = await fetchAllStudents();
  return (
    <Card className={`${styles.students} dark:bg-slate-900`}>
      <CardContent className="flex flex-col gap-4">
        <Typography variant="h4">Students</Typography>
        <StudentDataGrid initialRows={students} />
      </CardContent>
    </Card>
  );
}
