import { Card, CardContent } from "@mui/material";
import React from "react";
import EnrollComponent from "./components/EnrollComponent";
import MotionDiv from "@/components/Motion/MotionDiv";

export default function AdmissionForm() {
  return (
    <>
      <Card
        component={MotionDiv}
        key="loginCard"
        initial={{ opacity: 0, marginTop: "-10rem!important" }}
        animate={{ opacity: 1, marginTop: "2.5vh !important" }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        exit={{ opacity: 0, marginTop: "-10vh!important" }}
        className="m-auto w-fit overflow-auto rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardContent className="m-4 flex flex-row justify-center">
          <EnrollComponent />
        </CardContent>
      </Card>
    </>
  );
}
