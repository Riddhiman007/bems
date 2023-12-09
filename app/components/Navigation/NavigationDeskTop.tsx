"use client";
import {
  Box,
  Container,
  Typography,
  IconButton,
  AppBar,
  Button,
} from "@mui/material";
import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid/";
import React from "react";
import "@fontsource/shrikhand";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import Link from "next/link";
import { MotionDiv } from "../Motion";

interface AppBarItem {
  name: string;
  href: string;
}

const AppBarItems: Array<AppBarItem> = [
  { name: "home", href: "/" },
  { name: "dashboard", href: "/dashboard" },
  { name: "results", href: "/results" },
  { name: "about us", href: "/about" },
];
const NavigationDeskTop = ({ elevation }: { elevation: number }) => {
  const { isDark, setIsDark } = React.useContext(DarkModeContext);
  return (
    <AppBar
      elevation={elevation}
      className="bg-transparent dark:bg-transparent/40 py-4 lg:py-6"
    >
      <Container className="flex flex-row justify-between">
        <Box className="ml-7 grow-[3]">
          <Typography
            style={{ font: "Shrikhand" }}
            className=" m-1 textxl mix-blend-difference"
            variant="h6"
          >
            Braves
          </Typography>
        </Box>
        <Box className="flex flex-row justify-between gap-7">
          <Box className="flex flex-row gap-4">
            {AppBarItems.map((item) => (
              <Button
                key={item.name}
                LinkComponent={Link}
                href={item.href}
                variant="text"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box className="flex flex-row  gap-4">
            <IconButton
              onClick={() => setIsDark(!isDark)}
              className="h-fit w-fit m-1"
            >
              {isDark ? (
                <MoonIcon className="text-slate-950 dark:text-slate-100 h-7 w-7" />
              ) : (
                <SunIcon className="text-slate-950 dark:text-slate-100 h-7 w-7" />
              )}
            </IconButton>
            <IconButton className="h-fit w-fit m-1">
              <UserIcon className="text-slate-100 h-7 w-7" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationDeskTop;
