import { err_type } from "@/utils";
import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";

export default function Err({ searchParams }: { searchParams?: { code: string } }) {
  return (
    <Container className="flex flex-row justify-center">
      <Card className="mx-auto mt-10 px-4 py-3 lg:mt-32 dark:bg-slate-900">
        <CardContent className="mx-auto flex flex-col gap-4">
          {searchParams && (
            <Typography variant="h3">{err_type[searchParams.code].title}</Typography>
          )}
          {searchParams && (
            <Typography variant="body1">{err_type[searchParams.code].message}</Typography>
          )}
          {searchParams && err_type[searchParams.code].sol}
        </CardContent>
      </Card>
    </Container>
  );
}
