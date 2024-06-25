import React from "react";
import { CreatePost } from "./_components";
import { auth } from "@/_lib/auth";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { UnauthenticatedError } from "@/errors";

export default async function page() {
  const session = await auth();
  if (!session) throw new UnauthenticatedError();
  return (
    <div className="container mt-24">
      <Card>
        <CardHeader className="w-auto text-xl">Create Post</CardHeader>
        <CardBody className="w-auto">
          <CreatePost session={session} />
        </CardBody>
      </Card>
    </div>
  );
}
