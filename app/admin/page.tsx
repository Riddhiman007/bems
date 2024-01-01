import React, { lazy } from "react";

import { Container, Card, CardContent } from "@mui/material";
// import dynamic from "next/dynamic";

const StudentDataGrid = lazy(() => import("./components/StudentDataGrid"));
export default function Admin() {
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="overflow-x-auto">
          <StudentDataGrid />
        </CardContent>
      </Card>
    </Container>
  );
}
