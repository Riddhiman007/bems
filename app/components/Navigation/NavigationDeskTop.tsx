"use client";
import { Box, Container, Typography, IconButton, AppBar, Button } from "@mui/material";
import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import image from "../../photo-removebg.png";
import "@fontsource/shrikhand";
import MotionDiv from "../Motion/MotionDiv";
import React, { useEffect, useState } from "react";
interface AppBarItem {
  name: string;
  href: string;
}

const AppBarItems: Array<AppBarItem> = [
  { name: "home", href: "/" },
  { name: "dashboard", href: "/dashboard" },
  { name: "events", href: "/events" },
  { name: "about us", href: "/about" },
];
const NavigationDeskTop = ({ elevation }: { elevation: number }) => {
  const { theme, setTheme } = useTheme();
  const [CurrentTheme, setCurrentTheme] = useState("light");
  useEffect(() => setCurrentTheme(theme), [theme]);
  return (
    <AppBar
      component="header"
      elevation={elevation}
      className="bg-transparent py-4 lg:py-6"
    >
      <Container className="flex flex-row justify-between gap-4">
        <Link href="/">
          <Box
            component={MotionDiv}
            whileHover={{ scale: 1.1 }}
            className="flex grow-[3] flex-row gap-1"
          >
            <Image src={image} alt="braves" height={50} width={50} />
            <Typography
              style={{ font: "Shrikhand" }}
              className=" mt-3 text-xl font-semibold no-underline mix-blend-difference dark:text-slate-50"
              variant="h6"
            >
              Braves
            </Typography>
          </Box>
        </Link>
        <Box className="flex flex-row justify-between gap-4 lg:gap-7">
          <Box className="flex flex-row gap-4">
            {AppBarItems.map((item) => (
              <Button
                component={MotionDiv}
                whileHover={{ scale: 1.1 }}
                className="text-xs  dark:text-slate-50"
                key={item.name}
                LinkComponent={Link}
                href={item.href}
                variant="text"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box className="flex flex-row ">
            <IconButton
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="m-1 h-fit w-fit hover:scale-[1.1]"
            >
              {CurrentTheme === "dark" ? (
                <MoonIcon className=" h-7 w-7 dark:text-slate-100" />
              ) : (
                <SunIcon className=" h-7 w-7 dark:text-slate-100" />
              )}
            </IconButton>

            <IconButton
              className="m-1 h-fit w-fit hover:scale-[1.1]"
              LinkComponent={Link}
              href="/auth/login"
            >
              <UserIcon className="h-7 w-7 dark:text-slate-100" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationDeskTop;
