"use client";
import { UnauthenticatedError } from "@/errors";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { ReactElement } from "react";

export default function Unauthenticated({
  session,
}: {
  session: Session | null;
}): React.ReactNode {
  if (session === null) {
    throw new UnauthenticatedError();
  }

  return null;
}
