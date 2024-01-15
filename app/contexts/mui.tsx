"use client";
import {
  CssBaseline,
  LinkProps,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useTheme } from "next-themes";
import React, { useEffect, useState, useContext } from "react";

export default function MuiTheme({ children }: { children: React.ReactNode }) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const { theme: CurrentTheme } = useTheme();
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
      mode: CurrentTheme as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
