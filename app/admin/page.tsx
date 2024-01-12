import React, { Suspense } from "react";

import { Container, Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { fetchAllStudents } from "@/lib/prisma";

const StudentDataGrid = dynamic(() => import("./components/StudentDataGrid"), {
  loading: <Typography variant="h1">Loading...</Typography>,
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
