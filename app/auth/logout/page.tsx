import LogoutButton from "@/components/LogoutButton";
import MotionDiv from "@/components/Motion/MotionDiv";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AnimatePresence from "@/components/Motion/AnimatePresence";
import React from "react";
import { auth } from "@/lib/auth";

export default async function Logout() {
  const session = await auth();
  return (
    <AnimatePresence key="logout">
      <Card
        component={MotionDiv}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -400 }}
        transition={{ delay: 0.25, duration: "1s", ease: "easeInOut" }}
        className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardContent className="m-4 flex flex-col gap-4 ">
          {/* title */}
          <div>
            <Typography variant="h4" className="text-3xl" component="h3">
              {session ? "You're already logged in..." : "Log out"}
            </Typography>
          </div>
          {session === null && (
            <>
              <Typography>Are you sure you want to log out?</Typography>
              <div className="flex flex-row justify-end">
                <LogoutButton />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
