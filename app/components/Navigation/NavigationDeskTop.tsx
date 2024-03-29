"use client";

import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar/AppBar";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/contexts";
import Link from "next/link";
import Image from "next/image";
import image from "../../photo-removebg.png";
import "@fontsource/shrikhand";
import MotionDiv from "../Motion/MotionDiv";
import React, { useEffect, useState } from "react";
import MotionLink from "../Motion/MotionLink";
import { useSession } from "next-auth/react";
import {
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Popover,
} from "@mui/material";
import {
  Dashboard,
  Logout,
  NoEncryptionGmailerrorredTwoTone,
  Search,
} from "@mui/icons-material";
import { MotionNav } from "../Motion";
interface AppBarItem {
  name: string;
  href: string;
}

const AppBarItems: Array<AppBarItem> = [
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

  // ui logic
  const handleUserMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(e.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
  };
  return (
    <AppBar
      nonce={nonce}
      component={MotionNav}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      elevation={elevation}
      className="bg-transparent py-4 lg:py-6"
    >
      <Container className="flex flex-row justify-between gap-4">
        <Link href="/">
          <MotionDiv
            nonce={nonce}
            whileHover={{ scale: 1.1 }}
            className="flex grow-[3] flex-row gap-1"
          >
            <Image src={image} alt="braves" height={50} width={50} />
            <Typography
              style={{ font: "Shrikhand" }}
              className="mt-3 text-xl font-semibold no-underline mix-blend-difference dark:text-slate-50"
              variant="h6"
            >
              Braves
            </Typography>
          </MotionDiv>
        </Link>
        <div className="flex flex-row justify-between gap-4 lg:gap-7">
          <div className="flex flex-row gap-4">
            {AppBarItems.map((item) => (
              <Button
                nonce={nonce}
                component={MotionLink}
                whileHover={{ scale: 1.1 }}
                className="text-xs  dark:text-slate-50"
                key={item.name}
                href={item.href}
                variant="text"
              >
                {item.name}
              </Button>
            ))}
          </div>
          <div className="flex flex-row">
            <IconButton nonce={nonce} className=" mt-3 h-fit w-fit hover:scale-[1.1]">
              <Search className="h-7 w-7 dark:text-slate-50" />
            </IconButton>

            <IconButton
              nonce={nonce}
              onClick={(e) => setIsDark(!isDark)}
              className="mt-3 h-fit w-fit hover:scale-[1.1]"
            >
              {isDark ? (
                <MoonIcon className=" h-7 w-7 dark:text-slate-100" />
              ) : (
                <SunIcon className=" h-7 w-7 dark:text-slate-100" />
              )}
            </IconButton>

            {session ? (
              <>
                <Tooltip title="me" nonce={nonce}>
                  <IconButton
                    nonce={nonce}
                    className="m-1 h-fit w-fit hover:scale-[1.1]"
                    onClick={handleUserMenuOpen}
                  >
                    <Avatar className="bg-teal-700 dark:text-slate-100">
                      {session.user?.fullname[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Popover
                  anchorEl={UserAnchorEl}
                  nonce={nonce}
                  component="div"
                  className=""
                  open={Boolean(UserAnchorEl)}
                  onClose={handleUserMenuClose}
                  onClick={handleUserMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  elevation={24}
                >
                  <div className="p-2 dark:bg-slate-900">
                    <div className="flex flex-row gap-4">
                      <Avatar>E</Avatar>
                      <div className="flex flex-col gap-2">
                        <Typography>{session.user?.fullname}</Typography>
                        <Typography>{session.user?.role}</Typography>
                      </div>
                    </div>
                    <List component="div" className="dark:bg-slate-900">
                      {UserMenuItems.map((item) => (
                        <ListItemButton
                          key={item.name}
                          nonce={nonce}
                          component={Link}
                          // LinkComponent={Link}
                          href={item.href}
                          className="flex flex-row"
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <Typography>{item.name}</Typography>
                        </ListItemButton>
                      ))}

                      <Divider />
                      <ListItemButton
                        nonce={nonce}
                        component={Link}
                        className="flex flex-row "
                        href="/auth/logout"
                      >
                        <ListItemIcon>
                          <Logout />
                        </ListItemIcon>
                        <Typography>Logout</Typography>
                      </ListItemButton>
                    </List>
                  </div>
                </Popover>
              </>
            ) : (
              <Button
                className="my-2 bg-green-700 !py-1 px-4 text-green-50 hover:bg-green-900"
                nonce={nonce}
                component={MotionLink}
                whileHover={{ scale: 1.1 }}
                href="/auth/login"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default NavigationDeskTop;
