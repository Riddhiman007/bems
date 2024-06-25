import AnimatePresence from "@/_components/Motion/AnimatePresence";
import React from "react";
import { auth, signOut } from "@/_lib/auth";
import { Button } from "@nextui-org/button";
import { MotionButton, MotionDiv } from "@/_components/Motion";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import SignoutButton from "@/_components/ui/SignoutButton";

export default async function Logout() {
  const session = await auth();
  return (
    <AnimatePresence key="logout">
      <Card
        as={MotionDiv}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -400 }}
        className="m-auto mt-40 w-96"
      >
        <CardHeader className="m-0 w-auto" as="h4">
          {session ? "Log Out" : "You are already logged out"}
        </CardHeader>
        <CardBody className=" flex w-auto flex-col gap-4">
          {/* title */}

          {session !== null && (
            <>
              <p>Are you sure you want to log out?</p>
              <div className="flex flex-row justify-end">
                <SignoutButton />
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </AnimatePresence>
  );
}
