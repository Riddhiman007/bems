"use client";
import {
  CssBaseline,
  LinkProps,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { useDarkMode } from "./DarkModeProvider";
import React, { useEffect, useState, useContext } from "react";

export default function MuiTheme({ children }: { children: React.ReactNode }) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const { isDark } = useDarkMode();
  useEffect(() => {
    setRoot(document.querySelector("body"));
  }, []);

  const MuiTheme = createTheme({
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
    // typography(palette) {
    //   if (palette.mode === "dark") {
    //     return { allVariants: { color: "rgb(16 19 23)" } };
    //   }
    //   return { allVariants: { color: "rgb(250 250 250)" } };
    // },
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
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
