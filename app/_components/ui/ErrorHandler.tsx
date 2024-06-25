import { NextError, UnauthenticatedError } from "@/errors";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

export default function ErrorHandler({ error }: { error: NextError }) {
  if (error instanceof UnauthenticatedError) {
    return (
      <Card>
        <CardHeader>Unauthenticated Error</CardHeader>
        <CardBody>
          <p>{error.message}</p>
        </CardBody>
      </Card>
    );
  }
}
