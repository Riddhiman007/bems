import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MotionDiv from "@/components/Motion/MotionDiv";
import Button from "@mui/material/Button";
import MotionLink from "@/components/Motion/MotionLink";

export default function page() {
  return (
    <Card
      component={MotionDiv}
      key="unauthenticated"
      initial={{ opacity: 0, marginTop: "-10rem" }}
      animate={{ opacity: 1, marginTop: "10rem" }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      exit={{ opacity: 0, marginTop: "-10rem" }}
      className="m-auto mt-40 w-96 rounded-md  shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="m-4 flex flex-col gap-4 ">
        {/* title */}
        <Box>
          <Typography variant="h3" className="text-3xl" component="h3">
            Unauthenticated
          </Typography>
        </Box>
        <Typography>Sorry, you are unauthenticated. Please log in</Typography>
        <Box className="flex flex-row justify-end">
          <Button
            LinkComponent={MotionLink}
            color="success"
            variant="contained"
            className="bg-green-700 px-4 py-2 text-green-50 hover:bg-green-900"
            href="/auth/login"
            whileHover={{ scale: 1.1 }}
          >
            Log in
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
