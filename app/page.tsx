import { Box, Container, Typography } from "@mui/material";
import TypeAnimation from "./components/TypeWriter";
import React from "react";
import Explosion from "@/explosion.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="m-auto top-0 bottom-0 right-10 dark:mix-blend-color-dodge absolute self-center z-10"
        src={Explosion}
        alt="explosion"
        width={700}
        height={400}
      />
      <Box
        component="main"
        className="absolute flex flex-row top-0 left-0 bottom-0 right-0 bg-gradient-to-b dark:from-blue-950 dark:to-slate-950"
      >
        <Container className="m-auto ml-0 flex flex-row">
          <Box className="flex flex-col gap-4 ml-10">
            <Box>
              <Typography
                variant="body2"
                className=" ml-1 text-sm md:text-base lg:text-lg"
              >
                We believe in
              </Typography>
            </Box>
            <Box className="flex flex-row">
              <Typography className="text-6xl md:text-7xl lg:text-[12rem] ">
                C
              </Typography>
              <TypeAnimation
                className="text-2xl md:text-5xl lg:text-8xl align-text-bottom mt-3 md:mt-2 lg:mt-11"
                sequence={[
                  "onfidence",
                  3000,
                  "ommitment",
                  3000,
                  "ooperation",
                  3000,
                ]}
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
