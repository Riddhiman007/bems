"use client";
import React, { useMemo } from "react";

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
import { useDarkMode } from "@/_contexts";

import { usePathname } from "next/navigation";
import Image from "next/image";
import image from "@/photo-removebg.png";
import MotionLink from "../Motion/MotionLink";

import styles from "./NavigationMobile.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MotionButton, MotionNav } from "../Motion";
import MainButton from "./BottomNavigationButton";
import ShinyButton from "../ui/ShinyButton";

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
  const navItemClassName = useMemo(
    () => "size-20 text-content2-foreground active:scale-110",
    [],
  );
  const navItems: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className={navItemClassName} />,
      iconOutline: <HomeIconOutline className={navItemClassName} />,
    },

    {
      label: "Events",
      href: "/events",
      icon: <CalendarIcon className={navItemClassName} />,
      iconOutline: <CalenderIconOutline className={navItemClassName} />,
    },
    {
      label: "Posts",
      href: "/posts",
      icon: <ChatBubbleLeftIcon className={navItemClassName} />,
      iconOutline: <ChatBubbleLeftIconOutline className={navItemClassName} />,
    },
    {
      label: "Me",
      href: "/me",
      icon: <UserCircleIcon className={navItemClassName} />,
      iconOutline: <UserCircleIconOutline className={navItemClassName} />,
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
          <Image alt="braves icon" src={image} height={40} width={40} />
          <p className="text-xl font-bold text-content1-foreground">Braves</p>
        </NavbarBrand>
        <NavbarContent justify="end" as="div" className="!gap-0">
          <NavbarItem as="div">
            <Button isIconOnly variant="light" className="border-none">
              <Search className="size-6 fill-content2-foreground" />
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
                <MoonIcon className="size-6" />
              ) : (
                <SunIcon className="size-6 animate-slow-spin" />
              )}
            </Button>
          </NavbarItem>
          <NavbarItem as="div">
            <Button isIconOnly variant="light" className="border-none">
              <BellIconOutline className="size-6" />
            </Button>
          </NavbarItem>
          {session === null && (
            <NavbarItem>
              <ShinyButton href="/auth/login">Login</ShinyButton>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
      {children}
      <MainButton />
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-row justify-evenly bg-content1">
        {navItems.map(({ href, icon, iconOutline, label }) => (
          <Button
            key={label}
            isIconOnly
            href={href}
            as={MotionLink}
            className="border-none bg-transparent px-4"
          >
            {currentRoute === href ? icon : iconOutline}
          </Button>
        ))}
      </div>
    </>
  );
};

export default NavigationMobile;
