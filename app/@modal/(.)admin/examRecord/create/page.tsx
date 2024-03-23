import { MotionDiv } from "@/components/Motion";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { CreateExam } from "./components";

export default function CreateExamRecord() {
  return (
    <Card
      component={MotionDiv}
      key="err"
      initial={{ opacity: 0, marginTop: "-10rem!important" }}
      animate={{ opacity: 1, marginTop: "2.5vh !important" }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      exit={{ opacity: 0, marginTop: "-10vh!important" }}
      className="m-auto mt-7 w-96 overflow-auto rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="flex flex-col gap-7">
        <Typography variant="h4" className="font-bold">
          Create Exam
        </Typography>

        <CreateExam />
      </CardContent>
    </Card>
  );
}
