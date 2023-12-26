import CancelButton from "@/components/CancelButton";
import LogoutButton from "@/components/LogoutButton";
import MotionDiv from "@/components/Motion/MotionDiv";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AnimatePresence from "@/components/Motion/AnimatePresence";
import React from "react";

export default function Logout() {
  return (
    <AnimatePresence key="logout">
      <Card
        component={MotionDiv}
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        exit={{ opacity: 0, y: -400 }}
        className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardContent className="m-4 flex flex-col gap-4 ">
          {/* title */}
          <Box>
            <Typography variant="h4" className="text-3xl" component="h3">
              Log out
            </Typography>
          </Box>
          <Typography>Are you sure you want to log out?</Typography>
          <Box className="flex flex-row justify-between">
            <CancelButton />
            <LogoutButton />
          </Box>
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
