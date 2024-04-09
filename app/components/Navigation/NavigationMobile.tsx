"use client";
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
// icons
import {
  BellIcon,
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

const NavigationMobile = ({ children }: { children: React.ReactNode }) => {
  const { isDark, setIsDark } = useDarkMode();

  const currentRoute = usePathname();
  const { data: session } = useSession();

  const handleThemeChange = () => setIsDark(!isDark);
  const navItems: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className="size-7 active:scale-110 dark:text-slate-50 " />,
      iconOutline: (
        <HomeIconOutline className="size-7 active:scale-110 dark:text-slate-50" />
      ),
    },

    {
      label: "Events",
      href: "/events",
      icon: <CalendarIcon className="size-7 active:scale-110 dark:text-slate-50" />,
      iconOutline: (
        <CalenderIconOutline className="size-7 active:scale-110 dark:text-slate-50" />
      ),
    },
    {
      label: "Posts",
      href: "/posts",
      icon: <ChatBubbleLeftIcon className="size-7 active:scale-110 dark:text-slate-50" />,
      iconOutline: (
        <ChatBubbleLeftIconOutline className="size-7 active:scale-110 dark:text-slate-50" />
      ),
    },
    {
      label: "Me",
      href: "/me",
      icon: <UserCircleIcon className="size-7 active:scale-110 dark:text-slate-50" />,
      iconOutline: (
        <UserCircleIconOutline className="size-7 active:scale-110 dark:text-slate-50" />
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
      icon: <ChatBubbleLeftIconOutline className="size-7" />,
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
      <Navbar as="nav">
        <NavbarBrand
          className="flex flex-row gap-2"
          as={MotionLink}
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.15 }}
        >
          <Image alt="braves icon" src={image} height={50} width={50} />
          <p className="text-2xl font-bold text-content1-foreground">Braves</p>
        </NavbarBrand>
        <NavbarContent justify="end" as="div">
          <NavbarItem as="div">
            <Button isIconOnly variant="light" className="border-none">
              <Search className="size-7 fill-content2-foreground" />
            </Button>
          </NavbarItem>
          <NavbarItem as="div">
            <Button
              isIconOnly
              variant="light"
              className="border-none"
              onPress={handleThemeChange}
            >
              {isDark ? (
                <MoonIcon className="size-7" />
              ) : (
                <SunIcon className="size-7 animate-slow-spin" />
              )}
            </Button>
          </NavbarItem>
          <NavbarItem as="div">
            <Button isIconOnly variant="light" className="border-none">
              <BellIconOutline className="size-7" />
            </Button>
          </NavbarItem>
          {session === null && (
            <Button
              href="/auth/login"
              className="rounded-md bg-success-300 px-4 py-2 capitalize text-success-900 no-underline hover:bg-success-200 active:bg-success-50"
              autoCapitalize="all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              as={MotionLink}
            >
              Login
            </Button>
          )}
        </NavbarContent>
      </Navbar>
      {children}
      <div className="fixed inset-0 bottom-0 bg-content2"></div>
    </>
  );
};

export default NavigationMobile;
