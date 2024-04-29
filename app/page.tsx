import TypeAnimation from "./components/TypeWriter";
import React from "react";
import Image from "next/image";
import SchoolImage from "./1-PhotoRoom.png";
import { MotionLink, MotionDiv } from "./components/Motion";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { Button } from "@nextui-org/button";
const ParticlesContainer = dynamic(() => import("./components/ParticlesContainer"), {
  ssr: false,
});
// export const runtime = "edge";
export default function Home() {
  const nonce = headers().get("x-nonce");
  return (
    <>
      <ParticlesContainer />
      <div className="flex flex-col gap-20">
        <div className="inset-0 flex h-dvh flex-row bg-none">
          <Image
            nonce={nonce ? nonce : undefined}
            src={SchoolImage}
            alt="school image"
            className="absolute inset-0 z-10 aspect-video h-dvh w-full opacity-30 mix-blend-color-dodge"
            fill
          />

          <div className="container relative inset-0 ml-0 mt-40 flex flex-row bg-transparent">
            <MotionDiv
              className="ml-10 flex flex-col gap-2"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
            >
              <div className="ml-4 text-2xl dark:text-slate-50 md:text-4xl lg:text-6xl">
                We believe in
              </div>

              <div className="flex flex-row">
                <div className="text-[10rem] dark:text-blue-50 md:text-[6rem] lg:text-[12rem]">
                  C
                </div>
                <TypeAnimation
                  className="mt-[6rem] align-text-bottom text-4xl dark:text-blue-50 md:mt-[2.7rem] md:text-5xl lg:mt-[5.3rem] lg:text-8xl"
                  sequence={["onfidence", 3000, "ommitment", 3000, "ooperation", 3000]}
                  speed={10}
                  repeat={Infinity}
                />
              </div>
            </MotionDiv>
          </div>
        </div>

        <div className="container flex flex-col gap-4 placeholder:mb-10">
          <MotionDiv
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn" }}
          >
            <h4 className="ml-10 mt-2 dark:text-slate-50 md:ml-0 md:text-4xl lg:text-6xl">
              Admission Open for <p className="inline">2024-25</p>
            </h4>
          </MotionDiv>
          <div className="mb-10 flex flex-row justify-center">
            <Button
              href="/enroll"
              className="rounded-md bg-success-300 p-8 text-2xl capitalize text-success-900 no-underline hover:bg-success-200 active:bg-success-50"
              autoCapitalize="all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              as={MotionLink}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              translate="yes"
              variant="bordered"
            >
              Enroll Now...
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
