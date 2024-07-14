import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

export default function Verify() {
  return (
    <Card>
      <CardHeader>Verify your email address</CardHeader>
      <CardBody>
        A link has been sent to your email address. Please click on it to continue
      </CardBody>
    </Card>
  );
}
