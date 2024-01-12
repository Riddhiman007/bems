import Editor from "@/components/Editor";
import { Card, CardContent, Container } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="w-full">
          <Editor />
        </CardContent>
      </Card>
    </Container>
  );
}
