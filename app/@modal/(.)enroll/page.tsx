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
        initial={{ opacity: 0, marginTop: "-10rem" }}
        animate={{ opacity: 1, marginTop: "2.5rem" }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        exit={{ opacity: 0, marginTop: "-10rem" }}
        className="m-auto w-fit overflow-auto rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardContent className="m-4 flex flex-row justify-center">
          <EnrollComponent />
        </CardContent>
      </Card>
    </>
  );
}
