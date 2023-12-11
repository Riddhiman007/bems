"use client";
import {
  Box,
  Container,
  Typography,
  IconButton,
  AppBar,
  Button,
} from "@mui/material";
import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid";
import React from "react";
import "@fontsource/shrikhand";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import Link from "next/link";
import Image from "next/image";
import image from "@/photo-removebg.png";
import "@fontsource/shrikhand";
import MotionDiv from "../Motion/MotionDiv";
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
  const { isDark, setIsDark } = React.useContext(DarkModeContext);
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
            className="grow-[3] flex flex-row gap-1"
          >
            <Image src={image} alt="braves" height={50} width={50} />
            <Typography
              style={{ font: "Shrikhand" }}
              className=" mt-3 text-xl dark:text-slate-50 no-underline font-semibold mix-blend-difference"
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
                className="dark:text-slate-50  text-xs"
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
              onClick={() => setIsDark(!isDark)}
              className="h-fit w-fit m-1 hover:scale-[1.1]"
            >
              {isDark ? (
                <MoonIcon className=" dark:text-slate-100 h-7 w-7" />
              ) : (
                <SunIcon className=" dark:text-slate-100 h-7 w-7" />
              )}
            </IconButton>
            <IconButton className="h-fit w-fit m-1 hover:scale-[1.1]">
              <UserIcon className="dark:text-slate-100 h-7 w-7" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationDeskTop;
