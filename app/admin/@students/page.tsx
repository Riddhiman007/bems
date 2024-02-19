import React from "react";
import { fetchAllStudents } from "@/lib/prisma";
import { Card, CardContent } from "@mui/material";
import StudentDataGrid from "../components/StudentDataGrid";

import styles from "../admin.module.css";
export default async function Student() {
  const students = await fetchAllStudents();
  return (
    <Card className={`${styles.students} dark:bg-slate-900`}>
      <CardContent>
        <StudentDataGrid initialRows={students} />
      </CardContent>
    </Card>
  );
}
