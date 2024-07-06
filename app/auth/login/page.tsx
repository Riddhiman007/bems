import React from "react";

import MotionDiv from "@/_components/Motion/MotionDiv";
import LoginForm from "@/_components/Forms/Login";
import CardBackgroundForLightMode from "@/_components/ui/CardBackgroundForLightMode";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function Login(): React.ReactNode | null {
  return (
    <>
      <Card
        as={MotionDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        //@ts-ignore
        transition={{ delay: 0.25, ease: "easeInOut" }}
        className="m-auto mt-40 w-96"
      >
        <CardBackgroundForLightMode />
        <CardHeader>Login</CardHeader>
        <CardBody className="w-auto">
          <LoginForm />
        </CardBody>
      </Card>
    </>
  );
}
