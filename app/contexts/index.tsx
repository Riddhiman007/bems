"use client";
import React from "react";

import MuiTheme from "./mui";
import IsMobileProvider from "./IsMobileContext";
import DarkModeProvider, { useDarkMode } from "./DarkModeProvider";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
export default function Context({
  children,
  session,
}: React.PropsWithChildren<{ session: Session | null | undefined }>) {
  return (
    <SessionProvider session={session}>
      <IsMobileProvider>
        <DarkModeProvider>
          {/* <AppRouterCacheProvider> */}
          <MuiTheme>{children}</MuiTheme>
          {/* </AppRouterCacheProvider> */}
        </DarkModeProvider>
      </IsMobileProvider>
    </SessionProvider>
  );
}

export { useDarkMode };
