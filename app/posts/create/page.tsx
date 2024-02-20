import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { CreatePost } from "./components";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  return (
    <Container className="mt-24">
      <Card className="dark:bg-slate-900">
        <CardContent className="mx-4 my-3 flex flex-col gap-4">
          <Typography variant="h3">Create Post</Typography>
          <CreatePost session={session} />
        </CardContent>
      </Card>
    </Container>
  );
}
