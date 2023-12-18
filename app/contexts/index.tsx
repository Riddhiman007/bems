"use client";
import React from "react";

import MuiTheme from "./mui";
import IsMobileProvider from "./IsMobileContext";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function Context({
  children,
  session,
}: React.PropsWithChildren<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <IsMobileProvider>
        <ThemeProvider attribute="class">
          <MuiTheme>{children}</MuiTheme>
        </ThemeProvider>
      </IsMobileProvider>
    </SessionProvider>
  );
}
