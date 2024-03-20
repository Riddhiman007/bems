"use client";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { ReactElement } from "react";

export default function Unauthenticated({session}:{session:Session|null}): React.ReactNode {
    const router = useRouter();
    if (session === null) {
        router.push("/err?code=unauthenticated")
    }

    return null;
}
