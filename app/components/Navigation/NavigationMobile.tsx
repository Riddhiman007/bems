"use client";
import React from "react";

import {
  AppBar,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

// icons
import {
  CalendarIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  CalendarIcon as CalenderIconOutline,
  HomeIcon as HomeIconOutline,
  MoonIcon as MoonIconOutline,
  SunIcon as SunIconOutline,
  UserCircleIcon as UserCircleIconOutline,
} from "@heroicons/react/24/outline";
import { Dashboard, DashboardOutlined } from "@mui/icons-material";

import "@fontsource/shrikhand";
import { useTheme } from "next-themes";
import Link from "next/link";

import MotionDiv from "../Motion/MotionDiv";
import { usePathname } from "next/navigation";
import Image from "next/image";
import image from "@/photo-removebg.png";
import MotionBottomNavigationAction from "../Motion/MotionButtonNavigation";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  iconOutline: React.ReactNode;
  label: string;
}

const NavigationMobile = ({
  children,
  elevation,
}: {
  children: React.ReactNode;
  elevation: number;
}) => {
  const { theme, setTheme } = useTheme();
  const currentRoute = usePathname();

  const navItems: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className="h-7 w-7 dark:text-slate-50" />,
      iconOutline: <HomeIconOutline className="h-7 w-7 dark:text-slate-50" />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Dashboard className="h-7 w-7 dark:text-slate-50" />,
      iconOutline: <DashboardOutlined className="h-7 w-7 dark:text-slate-50" />,
    },
    {
      label: "Events",
      href: "/events",
      icon: <CalendarIcon className="h-7 w-7 dark:text-slate-50" />,
      iconOutline: <CalenderIconOutline className="h-7 w-7 dark:text-slate-50" />,
    },
    {
      label: "Me",
      href: "/me",
      icon: <UserCircleIcon className="h-7 w-7 dark:text-slate-50" />,
      iconOutline: <UserCircleIconOutline className="h-7 w-7 dark:text-slate-50" />,
    },
  ];
  return (
    <>
      <AppBar elevation={elevation} className="bg-transparent py-4 lg:py-6">
        <Container className="flex flex-row text-center">
          <Box className=" mx-auto flex flex-row gap-2">
            <Image src={image} alt="braves" height={50} width={50} />
            <Typography
              style={{ font: "Shrikhand" }}
              className=" mt-3 text-xl mix-blend-difference"
              variant="h6"
            >
              Braves
            </Typography>
          </Box>
          <Box className="flex flex-row gap-2 md:gap-4">
            <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "dark" ? (
                <MoonIcon className="h-7 w-7 dark:text-slate-50" />
              ) : (
                <SunIcon className="h-7 w-7 dark:text-slate-50" />
              )}
            </IconButton>
            <IconButton>
              <UserIcon className="h-7 w-7 dark:text-slate-50" />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      {children}
      <BottomNavigation
        showLabels
        className="fixed inset-x-0 bottom-0 h-16 shadow-md shadow-gray-950 dark:bg-slate-900"
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            LinkComponent={Link}
            href={item.href}
            icon={item.href == currentRoute ? item.icon : item.iconOutline}
            // whileHover={{ scale: 1.2 }}
          />
        ))}
      </BottomNavigation>
    </>
  );
};

export default NavigationMobile;
