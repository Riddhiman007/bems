import React, { Suspense } from "react";

import { Container, Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { StudentFields, fetchAllStudents } from "@/lib/prisma";

const StudentDataGrid = dynamic(() => import("./components/StudentDataGrid"), {
  loading: ({ isLoading }) =>
    isLoading ? <Typography variant="h1">Loading...</Typography> : null,
});
export default async function Admin() {
  const fetched_students = await fetchAllStudents();
  const students: StudentFields[] = fetched_students.map<StudentFields>((val) => {
    return {
      address: val.user.address,
      contact: val.user.contact,
      email: val.user.email,
      father_name: val.father_name,
      mother_name: val.mother_name,
      fullname: val.fullname,
      gender: val.user.gender,
      grade: val.grade_name,
      caste: val.caste,
      isNew: val.isNew,
    };
  });
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="w-full">
          <StudentDataGrid initialRows={students} />
        </CardContent>
      </Card>
    </Container>
  );
}
