import MotionDiv from "@/components/Motion/MotionDiv";
import AnimatePresence from "@/components/Motion/AnimatePresence";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import React from "react";
import LoginForm from "@/components/Forms/Login";
import CardBackgroundForLightMode from "@/components/CardBackgroundForLightMode";

export default function page() {
  return (
    <AnimatePresence>
      <Card
        component={MotionDiv}
        key="loginCard"
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        exit={{ opacity: 0, marginTop: "-10rem" }}
        className="m-auto mt-10 w-96 rounded-md shadow-2xl shadow-neutral-950 lg:mt-40 dark:bg-slate-900"
      >
        <CardBackgroundForLightMode />
        <CardContent className="m-4 flex flex-col gap-4  ">
          {/* title */}
          <Box>
            <Typography variant="h3" className="text-3xl" component="h3">
              Login
            </Typography>
          </Box>
          <LoginForm isBackButtonEnabled />
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
