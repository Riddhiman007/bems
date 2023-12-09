import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { AnimatePresence, MotionButton, MotionDiv } from "@/components/Motion";

// signin the client
import { signIn } from "@/lib/auth";

/// Login Handler
async function login(formData: FormData) {
  "use server";

  await signIn("email", { email: formData.get("email").toString() });
}

const Login = async () => {
  return (
    <>
      <Card
        component={MotionDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
        className="m-auto rounded-md shadow-2xl  shadow-neutral-950 dark:bg-slate-900 w-96"
      >
        <CardContent className="m-4 flex flex-col gap-4 ">
          {/* title */}
          <Box>
            <Typography variant="h3" className="text-4xl" component="h3">
              Login
            </Typography>
          </Box>
          <form className="flex flex-col gap-7" action={login}>
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
            <Box className="flex flex-row justify-end">
              <AnimatePresence>
                <Button
                  component={MotionButton}
                  initial={{ opacity: 0, y: -400 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="rounded-md shadow shadow-gray-900 hover:bg-blue-700 hover:bg-none px-4 py-2 bg-gradient-to-l from-indigo-600/70  to-blue-800  text-blue-50"
                >
                  Submit
                </Button>
              </AnimatePresence>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
