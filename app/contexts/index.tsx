"use client";
import React from "react";

import MuiTheme from "./mui";
import IsMobileProvider from "./IsMobileContext";
import { ThemeProvider } from "next-themes";

export default function Context({ children }: { children: React.ReactNode }) {
  return (
    <IsMobileProvider>
      <ThemeProvider attribute="class">
        <MuiTheme>{children}</MuiTheme>
      </ThemeProvider>
    </IsMobileProvider>
  );
}
