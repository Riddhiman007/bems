"use client";
import {
  CssBaseline,
  LinkProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function MuiTheme({ children }: { children: React.ReactNode }) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const { isDark } = useContext(DarkModeContext);
  useEffect(() => {
    setRoot(document.querySelector("body"));
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: root,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: root,
        },
      },
      MuiDrawer: {
        defaultProps: { container: root },
      },
    },
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
