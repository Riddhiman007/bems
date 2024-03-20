import MotionDiv from "@/components/Motion/MotionDiv";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Verify() {
  return (
    <Card
      component={MotionDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="m-4 flex flex-col gap-4 ">
        {/* title */}
        <div>
          <Typography variant="h4" className="text-3xl" component="h3">
            Verify your email address
          </Typography>
        </div>
        <Typography>
          A link has been sent to your email address. Please click on it to continue
        </Typography>
      </CardContent>
    </Card>
  );
}
