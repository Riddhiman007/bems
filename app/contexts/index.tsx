"use client";
import React from "react";

import MuiTheme from "./mui";
import IsMobileProvider from "./IsMobileContext";
import DarkModeProvider, { useDarkMode } from "./DarkModeProvider";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NextUIProvider } from "@nextui-org/react";
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
      <IsMobileProvider>
        <DarkModeProvider>
          {/* <MuiTheme nonce={nonce}> */}
          <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
          {/* </MuiTheme> */}
        </DarkModeProvider>
      </IsMobileProvider>
    </SessionProvider>
  );
}

export { useDarkMode };
