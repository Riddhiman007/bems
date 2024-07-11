"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/dropdown";

import { Avatar } from "@nextui-org/avatar";
import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/_contexts";
import Image from "next/image";
import image from "../../photo-removebg.png";
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
import { Divider } from "@nextui-org/divider";
import { SearchIcon, SearchLinearIcon } from "@nextui-org/shared-icons";
import ShinyButton from "../ui/ShinyButton";
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
const NavigationDeskTop = ({ nonce }: { nonce?: string }) => {
  const { isDark, setIsDark } = useDarkMode();

  // get session
  const { data: session } = useSession();

  const handleThemeChange = () => setIsDark(!isDark);
  return (
    <Navbar nonce={nonce} as="nav" classNames={{ wrapper: "gap-x-80" }}>
      <NavbarBrand
        className="flex flex-row justify-center gap-2"
        as={MotionLink}
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.15 }}
        // @ts-ignore
        transition={{
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
      >
        <Image alt="braves icon" src={image} height={50} width={50} />
        <p className="text-2xl font-bold text-content1-foreground">Braves</p>
      </NavbarBrand>
      <NavbarContent as="div" justify="end" className="gap-7">
        <div className="flex flex-row gap-4">
          {NavbarItems.map((item) => (
            <NavbarItem
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
              key={item.name}
              as={MotionLink}
              href={item.href}
              // @ts-ignore
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
              className="text-content1-foreground no-underline"
            >
              {item.name.toUpperCase()}
            </NavbarItem>
          ))}
        </div>

        <NavbarItem className="flex flex-row gap-3">
          <Button
            isIconOnly
            variant="light"
            className="border-none"
            as={MotionButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.15 }}
            // @ts-ignore
            transition={{
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
            onPress={handleThemeChange}
          >
            {isDark ? (
              <MoonIcon className="size-7" />
            ) : (
              <SunIcon className="size-7 animate-slow-spin" />
            )}
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="border-none"
            href="/search"
            as={MotionLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.15 }}
            // @ts-ignore
            transition={{
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <SearchLinearIcon className="size-6" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="border-none"
            as={MotionButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.15 }}
            // @ts-ignore
            transition={{
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <BellIcon className="size-7" />
          </Button>
        </NavbarItem>

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
            <DropdownMenu classNames={{ list: "p-0 list-none" }}>
              <DropdownSection classNames={{ group: "p-0" }}>
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
              </DropdownSection>

              <DropdownSection classNames={{ group: "p-0" }}>
                <DropdownItem
                  as={MotionLink}
                  key="logOut"
                  href="/auth/logout"
                  className="capitalize text-danger-foreground no-underline"
                >
                  Log out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <ShinyButton href="/auth/login">Login</ShinyButton>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationDeskTop;
