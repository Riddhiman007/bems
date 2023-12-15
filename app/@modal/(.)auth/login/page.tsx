import BackButton from "@/@modal/components/Button";
import MotionDiv from "@/components/Motion/MotionDiv";
import AnimatePresence from "@/components/Motion/AnimatePresence";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import MotionButton from "@/components/Motion/MotionButton";

export default function page() {
  return (
    <Card
      component={MotionDiv}
      initial={{ opacity: 0, marginTop: "-10rem" }}
      animate={{ opacity: 1, marginTop: "10rem" }}
      transition={{ delay: 0.25, ease: "easeInOut" }}
      exit={{ opacity: 0, marginTop: "-10rem" }}
      className="m-auto mt-40 w-96 rounded-md  shadow-2xl shadow-neutral-950 dark:bg-slate-900"
    >
      <CardContent className="m-4 flex flex-col gap-4 ">
        {/* title */}
        <Box>
          <Typography variant="h3" className="text-4xl" component="h3">
            Login
          </Typography>
        </Box>
        <form className="flex flex-col gap-7">
          <TextField
            name="email"
            size="medium"
            variant="standard"
            fullWidth
            label="Email"
            type="email"
            placeholder="Please enter your email"
            required
          />
          <Box className="flex flex-row justify-between">
            <AnimatePresence>
              <BackButton
                component={MotionButton}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                variant="outlined"
                className="rounded-md px-4 py-2 "
                color="error"
              >
                Cancel
              </BackButton>
            </AnimatePresence>
            <AnimatePresence>
              <Button
                component={MotionButton}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  backgroundImage: null,
                  backgroundColor: "rgb(29 78 216)",
                }}
                type="submit"
                className="rounded-md bg-gradient-to-l from-indigo-600/70 to-blue-800 px-4 py-2 text-blue-50 shadow shadow-gray-900 "
              >
                Submit
              </Button>
            </AnimatePresence>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
