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
  SpeedDial,
  SpeedDialAction,
  Button,
} from "@mui/material";

// icons
import {
  CalendarIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  CalendarIcon as CalenderIconOutline,
  HomeIcon as HomeIconOutline,
  UserCircleIcon as UserCircleIconOutline,
  UserIcon as UserIconOutline,
  ChatBubbleLeftIcon as ChatBubbleLeftIconOutline,
  BellIcon as BellIconOutline,
} from "@heroicons/react/24/outline";
import {
  CloseOutlined,
  DashboardOutlined,
  LogoutOutlined,
  Search,
} from "@mui/icons-material";

import "@fontsource/shrikhand";
import { useDarkMode } from "@/contexts";

import { usePathname } from "next/navigation";
import Image from "next/image";
import image from "@/photo-removebg.png";
import MotionLink from "../Motion/MotionLink";

import styles from "./NavigationMobile.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MotionNav } from "../Motion";

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
  const { isDark, setIsDark } = useDarkMode();
  const currentRoute = usePathname();
  const { data: session } = useSession();
  const navItems: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className="h-7 w-7 active:scale-110 dark:text-slate-50 " />,
      iconOutline: (
        <HomeIconOutline className="h-7 w-7 active:scale-110 dark:text-slate-50" />
      ),
    },

    {
      label: "Events",
      href: "/events",
      icon: <CalendarIcon className="h-7 w-7 active:scale-110 dark:text-slate-50" />,
      iconOutline: (
        <CalenderIconOutline className="h-7 w-7 active:scale-110 dark:text-slate-50" />
      ),
    },
    {
      label: "Posts",
      href: "/posts",
      icon: (
        <ChatBubbleLeftIcon className="h-7 w-7 active:scale-110 dark:text-slate-50" />
      ),
      iconOutline: (
        <ChatBubbleLeftIconOutline className="h-7 w-7 active:scale-110 dark:text-slate-50" />
      ),
    },
    {
      label: "Me",
      href: "/me",
      icon: <UserCircleIcon className="h-7 w-7 active:scale-110 dark:text-slate-50" />,
      iconOutline: (
        <UserCircleIconOutline className="h-7 w-7 active:scale-110 dark:text-slate-50" />
      ),
    },
  ];

  const speedDialItems = [
    {
      title: "logout",
      href: "/auth/logout",
      icon: <LogoutOutlined />,
      idx: "[--i:1]",
    },
    {
      title: "my posts",
      href: "/posts",
      icon: <ChatBubbleLeftIconOutline className="h-7 w-7" />,
      idx: "[--i:2]",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardOutlined />,
      idx: "[--i:3]",
    },
  ];
  return (
    <>
      <AppBar
        elevation={elevation}
        component={MotionNav}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="bg-transparent py-4 lg:py-6"
      >
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
            <IconButton className=" mt-3 h-fit w-fit hover:scale-[1.1]">
              <Search className="h-7 w-7 dark:text-slate-50" />
            </IconButton>
            <IconButton
              className=" mt-3 h-fit w-fit hover:scale-[1.1]"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <MoonIcon className="h-7 w-7 dark:text-slate-50 " />
              ) : (
                <SunIcon className="h-7 w-7 dark:text-slate-50" />
              )}
            </IconButton>
            <IconButton className=" mt-3 h-fit w-fit hover:scale-[1.1]">
              <BellIconOutline
                aria-label="notifications"
                className="h-7 w-7 dark:text-slate-50"
              />
            </IconButton>
            {!session && (
              <Button
                className="my-2 bg-green-700 !py-2 px-4 text-green-50 hover:bg-green-900"
                component={MotionLink}
                whileHover={{ scale: 1.1 }}
                href="/auth/login"
              >
                Login
              </Button>
            )}
          </Box>
        </Container>
      </AppBar>
      {children}
      <BottomNavigation className=" fixed inset-x-0 bottom-0 z-[120] gap-7 px-7 shadow-md shadow-gray-950 dark:bg-slate-900">
        {navItems.map((item) => (
          <BottomNavigationAction
            showLabel={item.href === currentRoute}
            key={item.label}
            id={item.label}
            TouchRippleProps={{ className: "z-20" }}
            label={item.label}
            component={MotionLink}
            className={`dark:bg-slate-900  ${
              item.href === currentRoute
                ? `${styles.indicator} dark:[--shadow-color:#0f172a;]`
                : ""
            }`}
            href={item.href}
            icon={item.href == currentRoute ? item.icon : item.iconOutline}
          />
        ))}
      </BottomNavigation>
      {session && (
        <SpeedDial
          icon={<UserIconOutline className="h-8 w-8 text-green-50" />}
          className={styles.speedDial}
          FabProps={{
            style: { zIndex: 100 },
            className:
              "h-[4.25rem] w-[4.25rem] relative bottom-10 bg-green-700 active:bg-green-900 active:scale-150 z-[140]",
          }}
          ariaLabel="user info"
          openIcon={<CloseOutlined />}
        >
          {speedDialItems.map((item) => (
            <SpeedDialAction
              key={item.title}
              tooltipTitle={item.title}
              icon={item.icon}
              FabProps={{
                LinkComponent: Link,
                href: item.href,
                className:
                  "hover:scale-125 dark:text-slate-50 dark:bg-slate-800 dark:hover:bg-slate-900 z-[120]" +
                  item.idx,
              }}
            />
          ))}
        </SpeedDial>
      )}
    </>
  );
};

export default NavigationMobile;
