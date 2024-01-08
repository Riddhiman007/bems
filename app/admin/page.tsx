import React, { Suspense } from "react";

import { Container, Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { fetchAllStudents } from "@/lib/prisma";

const StudentDataGrid = dynamic(() => import("./components/StudentDataGrid"));
export default async function Admin() {
  const students = await fetchAllStudents();
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="w-full">
          <Suspense fallback={<Typography variant="h1">Loading...</Typography>}>
            <StudentDataGrid initialRows={students} />
          </Suspense>
        </CardContent>
      </Card>
    </Container>
  );
}
