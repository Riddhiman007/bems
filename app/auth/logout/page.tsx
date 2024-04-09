import AnimatePresence from "@/components/Motion/AnimatePresence";
import React from "react";
import { auth, signOut } from "@/lib/auth";
import { Button } from "@nextui-org/button";
import { MotionButton, MotionDiv } from "@/components/Motion";
import { Card, CardBody } from "@nextui-org/card";
import SignoutButton from "@/components/SignoutButton";

export default async function Logout() {
  const session = await auth();
  return (
    <AnimatePresence key="logout">
      <Card
        as={MotionDiv}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -400 }}
        className="m-auto mt-40 w-96 rounded-md shadow-2xl shadow-neutral-950 dark:bg-slate-900"
      >
        <CardBody className="m-4 flex flex-col gap-4 ">
          {/* title */}
          <div>
            <h4 className="text-3xl">
              {session ? "You're already logged in..." : "Log out"}
            </h4>
          </div>
          {session === null && (
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
