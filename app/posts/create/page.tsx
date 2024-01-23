import Editor from "@/components/Editor";
import { Card, CardContent, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { CreatePost } from "./components";

export default function page() {
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="mx-4 my-3 flex flex-col gap-4">
          <Typography variant="h3">Create Post</Typography>
          <CreatePost />
        </CardContent>
      </Card>
    </Container>
  );
}
