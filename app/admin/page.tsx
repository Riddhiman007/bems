import React, { Suspense } from "react";

import { Container, Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { StudentFields, fetchAllStudents } from "@/lib/prisma";
import { StudentRowModel } from "./components";

const StudentDataGrid = dynamic(() => import("./components/StudentDataGrid"), {
  loading: ({ isLoading }) =>
    isLoading ? <Typography variant="h1">Loading...</Typography> : null,
});
export default async function Admin() {
  const students = await fetchAllStudents();
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
