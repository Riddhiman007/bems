import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import MotionDiv from "@/_components/Motion/MotionDiv";
import LoginForm from "@/_components/Forms/Login";
import CardBackgroundForLightMode from "@/_components/ui/CardBackgroundForLightMode";

export default function Login(): React.ReactNode | null {
  return (
    <>
      <Card
        component={MotionDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardBackgroundForLightMode />
        <CardContent className="m-4 flex flex-col gap-4 ">
          {/* title */}
          <div>
            <Typography variant="h3" className="text-4xl" component="h3">
              Login
            </Typography>
          </div>
          <LoginForm isBackButtonEnabled={false} />
        </CardContent>
      </Card>
    </>
  );
}
