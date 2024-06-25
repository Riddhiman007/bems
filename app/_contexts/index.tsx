"use client";
import React from "react";

import DarkModeProvider, { useDarkMode } from "./DarkModeProvider";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export default function Context({
  children,
  session,
  nonce,
}: React.PropsWithChildren<{
  session: Session | null | undefined;
  nonce?: string;
}>) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <DarkModeProvider>
        <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      </DarkModeProvider>
    </SessionProvider>
  );
}

export { useDarkMode };
