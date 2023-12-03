import React from "react";
import DarkModeProvider from "./DarkModeContext";
import MuiTheme from "./mui";
import IsMobileProvider from "./IsMobileContext";

export default function Context({ children }: { children: React.ReactNode }) {
  return (
    <IsMobileProvider>
      <DarkModeProvider>
        <MuiTheme>{children}</MuiTheme>
      </DarkModeProvider>
    </IsMobileProvider>
  );
}
