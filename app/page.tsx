import { Box, Container, Typography, duration } from "@mui/material";
import TypeAnimation from "./components/TypeWriter";
import React from "react";
import Explosion from "@/explosion.png";
import Image from "next/image";
import MotionDiv from "./components/Motion/MotionDiv";
export default function Home() {
  return (
    <>
      <Image
        className="absolute inset-y-0 right-10 z-10 m-auto self-center dark:mix-blend-color-dodge"
        src={Explosion}
        alt="explosion"
        width={700}
        height={400}
      />
      <Box
        component="main"
        className="absolute inset-0 flex flex-row bg-gradient-to-b dark:from-blue-950 dark:to-slate-950"
      >
        <Container
          className="m-auto ml-0 flex flex-row"
          component={MotionDiv}
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        >
          <Box className="ml-10 flex flex-col gap-4">
            <Box>
              <Typography
                variant="body2"
                className="ml-1 text-sm md:text-base lg:text-lg"
              >
                We believe in
              </Typography>
            </Box>
            <Box className="flex flex-row">
              <Typography className="text-[10rem] md:text-[6rem] lg:text-[12rem]">
                C
              </Typography>
              <TypeAnimation
                className="mt-[6rem] align-text-bottom text-4xl md:mt-[2.7rem] md:text-5xl lg:mt-[5.3rem] lg:text-8xl"
                sequence={["onfidence", 3000, "ommitment", 3000, "ooperation", 3000]}
                speed={10}
                repeat={Infinity}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
