import LogoutButton from "@/components/LogoutButton";
import MotionDiv from "@/components/Motion/MotionDiv";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Logout() {
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
        <Box>
          <Typography variant="h4" className="text-3xl" component="h3">
            Log out
          </Typography>
        </Box>
        <Typography>Are you sure you want to log out?</Typography>
        <Box className="flex flex-row justify-end">
          <LogoutButton />
        </Box>
      </CardContent>
    </Card>
  );
}
