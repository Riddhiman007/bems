import Editor from "@/components/Editor";
import { Card, CardContent, Container, CssBaseline } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="w-full">
          <CssBaseline enableColorScheme />
          <Editor />
        </CardContent>
      </Card>
    </Container>
  );
}
