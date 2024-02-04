import { Box, Container, Typography, duration, Button } from "@mui/material";
import TypeAnimation from "./components/TypeWriter";
import React from "react";
import Image from "next/image";
import MotionDiv from "./components/Motion/MotionDiv";
import SchoolImage from "./1-PhotoRoom.png";
import ParticlesContainer from "./components/ParticlesContainer";
import MotionLink from "./components/Motion/MotionLink";

// export const runtime = "edge";
export default function Home() {
  return (
    <>
      <ParticlesContainer />
      <Box className="flex flex-col gap-20">
        <Box
          // component="main"
          className="inset-0 flex h-dvh flex-row bg-none dark:bg-gradient-to-b dark:from-blue-950 dark:to-slate-950"
        >
          <Image
            src={SchoolImage}
            alt="school image"
            className="inset-0  z-10 aspect-video opacity-30 mix-blend-color-dodge"
            fill
          />

          <Container
            className="relative inset-0 ml-0 mt-40 flex flex-row bg-transparent"
            component={MotionDiv}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
          >
            <Box className="ml-10 flex flex-col gap-4">
              <Box>
                <Typography
                  variant="body2"
                  className="ml-4 text-sm md:text-base lg:text-6xl dark:text-slate-50"
                >
                  We believe in
                </Typography>
              </Box>
              <Box className="flex flex-row">
                <Typography className="text-[10rem] md:text-[6rem] lg:text-[12rem] dark:text-blue-50">
                  C
                </Typography>
                <TypeAnimation
                  className="mt-[6rem] align-text-bottom text-4xl md:mt-[2.7rem] md:text-5xl lg:mt-[5.3rem] lg:text-8xl dark:text-blue-50"
                  sequence={["onfidence", 3000, "ommitment", 3000, "ooperation", 3000]}
                  speed={10}
                  repeat={Infinity}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container className="mb-10 flex flex-col gap-10 pl-0">
          <MotionDiv
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn" }}
          >
            <Typography
              variant="h4"
              className="ml-10 md:ml-0 md:text-4xl lg:text-6xl dark:text-slate-50"
            >
              Admission Open for <Typography className="inline">2024-25</Typography>
            </Typography>
          </MotionDiv>
          <Box className="mb-10 flex flex-row justify-center">
            <Button
              variant="contained"
              color="success"
              className="z-[100] rounded bg-green-700 px-7 py-4 text-xl text-green-50 hover:bg-green-900"
              component={MotionLink}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeIn", delay: 0.5 }}
              whileHover={{ scale: 1.2 }}
              href="/enroll"
            >
              Enroll now...
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
