import { MotionDiv } from "@/components/Motion";
import { err_type } from "@/utils";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Err({ searchParams }: { searchParams?: { code: string } }) {
  return (
    <Card
      component={MotionDiv}
      key="loginCard"
      initial={{ opacity: 0, marginTop: "-10rem!important" }}
      animate={{ opacity: 1, marginTop: "2.5vh !important" }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      exit={{ opacity: 0, marginTop: "-10vh!important" }}
      className="m-auto mt-7 w-fit overflow-auto rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="m-4 flex flex-col justify-center gap-7">
        {searchParams && (
          <Typography variant="h3">{err_type[searchParams.code].title}</Typography>
        )}
        {searchParams && (
          <Typography variant="body1">{err_type[searchParams.code].message}</Typography>
        )}
        {searchParams && err_type[searchParams.code].sol}
      </CardContent>
    </Card>
  );
}
