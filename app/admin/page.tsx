import React from "react";

import { Container, Card, CardContent } from "@mui/material";
import StudentDataGrid from "./components/StudentDataGrid";
export default function Admin() {
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent>
          <StudentDataGrid />
        </CardContent>
      </Card>
    </Container>
  );
}
