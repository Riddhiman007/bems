import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MotionDiv from "@/components/Motion/MotionDiv";
import CancelButton from "@/components/CancelButton";
import MotionMuiButton from "@/components/Motion/MotionMuiButton";
import Link from "next/link";

export default function page() {
  return (
    <Card
      component={MotionDiv}
      key="unauthenticated"
      initial={{ opacity: 0, marginTop: "-10rem" }}
      animate={{ opacity: 1, marginTop: "10rem" }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      exit={{ opacity: 0, marginTop: "-10rem" }}
      className="m-auto w-96 rounded-md  shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="m-4 flex flex-col gap-4 ">
        {/* title */}
        <div>
          <Typography variant="h3" className="text-3xl" component="h3">
            Unauthenticated
          </Typography>
        </div>
        <Typography>Sorry, you are unauthenticated. Please log in</Typography>
        <div className="flex flex-row justify-between">
          <CancelButton />
          <MotionMuiButton
            LinkComponent={Link}
            color="success"
            variant="contained"
            className="bg-green-700 px-4 py-2 text-green-50 hover:bg-green-900"
            href="/auth/login"
            whileHover={{ scale: 1.1 }}
          >
            Log in
          </MotionMuiButton>
        </div>
      </CardContent>
    </Card>
  );
}
