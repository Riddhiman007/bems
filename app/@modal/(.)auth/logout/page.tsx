import CancelButton from "@/components/CancelButton";
import LogoutButton from "@/components/LogoutButton";
import MotionDiv from "@/components/Motion/MotionDiv";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import CardBackgroundForLightMode from "@/components/CardBackgroundForLightMode";

export default function Logout() {
  return (
    <Card
      key="logout"
      component={MotionDiv}
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, ease: "anticipate", duration: 0.5 }}
      exit={{ opacity: 0, y: -400 }}
      className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardBackgroundForLightMode />
      <CardContent className="relative z-10 m-4 flex flex-col gap-4 ">
        {/* title */}
        <div className="">
          <Typography variant="h4" className="text-3xl" component="h3">
            Log out
          </Typography>
        </div>
        <Typography>Are you sure you want to log out?</Typography>
        <div className="flex flex-row justify-between">
          <CancelButton />
          <LogoutButton />
        </div>
      </CardContent>
    </Card>
  );
}
