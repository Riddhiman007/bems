"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { Avatar } from "@nextui-org/avatar";

import { useAnimate, useAnimation } from "framer-motion";

import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/contexts";
import Image from "next/image";
import image from "../../photo-removebg.png";
import "@fontsource/shrikhand";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import {
  Dashboard,
  Logout,
  NoEncryptionGmailerrorredTwoTone,
  Search,
} from "@mui/icons-material";
import { MotionButton, MotionSpan, MotionLink } from "../Motion";
import { BellIcon } from "@heroicons/react/24/outline";
interface NavbarItemsProp {
  name: string;
  href: string;
}

const NavbarItems: Array<NavbarItemsProp> = [
  { name: "home", href: "/" },
  { name: "events", href: "/events" },
  { name: "posts", href: "/posts" },
  { name: "about us", href: "/about" },
];

const UserMenuItems = [
  { name: "dashboard", href: "/dashboard", icon: <Dashboard /> },
  { name: "my achievements", href: "/myachievements", icon: <Dashboard /> },
];
const NavigationDeskTop = ({
  elevation,
  nonce,
}: {
  elevation: number;
  nonce?: string;
}) => {
  const { isDark, setIsDark } = useDarkMode();
  const [UserAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);

  // get session
  const { data: session } = useSession();

  // useEffect(() => setCurrentTheme(theme), [theme]);

  const handleThemeChange = () => setIsDark(!isDark);
  // ui logic
  const handleUserMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(e.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
  };
  return (
    <Navbar nonce={nonce} as="nav">
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
      <NavbarContent as="div" justify="end" className="gap-7">
        <div className="flex flex-row gap-4">
          {NavbarItems.map((item) => (
            <NavbarItem
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 1.1 }}
              key={item.name}
              as={MotionLink}
              href={item.href}
              className="text-content1-foreground no-underline"
            >
              {item.name.toUpperCase()}
            </NavbarItem>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <NavbarItem className="flex flex-row gap-3">
            <Button
              isIconOnly
              variant="light"
              className="border-none"
              as={MotionButton}
              onPress={handleThemeChange}
            >
              {isDark ? (
                <MoonIcon className="size-7" />
              ) : (
                <SunIcon className="size-7 animate-slow-spin" />
              )}
            </Button>
            <Button isIconOnly variant="light" className="border-none">
              <BellIcon className="size-7" />
            </Button>
          </NavbarItem>
        </div>

        {session ? (
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Avatar
                  icon={<UserIcon className="size-7" />}
                  isBordered
                  isFocusable
                  color="secondary"
                  as={MotionSpan}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.2 }}
                />
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu as="div">
              {UserMenuItems.map((item) => (
                <DropdownItem
                  key={item.name}
                  href={item.href}
                  as={MotionLink}
                  selectedIcon={item.icon}
                  className="flex flex-row gap-4 capitalize text-content3-foreground no-underline"
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button
            href="/auth/login"
            className="rounded-md bg-success-300 px-4 py-2 text-2xl capitalize text-success-900 no-underline hover:bg-success-200 active:bg-success-50"
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
  );
};

export default NavigationDeskTop;
