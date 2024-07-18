"use client";
import { Button } from "@nextui-org/button";
import { AddNoteBulkIcon } from "@nextui-org/shared-icons";
import { cn } from "@nextui-org/theme";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Add, DashboardOutlined, LogoutOutlined } from "@mui/icons-material";
import { ChatBubbleLeftIcon, UserIcon } from "@heroicons/react/24/outline";
import styles from "./styles.module.css";
import { MotionButton } from "@/_components/Motion";
export default function CircularNavigation() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isTriggered, setIsTriggered] = useState(false);
  useEffect(() => {
    if (isTriggered) {
      menuRef.current?.classList.add(styles.active);
    } else {
      menuRef.current?.classList.remove(styles.active);
    }
  }, [isTriggered]);

  const handleTrigger = useCallback(
    () => setIsTriggered((isTriggered) => !isTriggered),
    [],
  );
  const startTrigger = useCallback(() => setIsTriggered(true), []);
  const endTrigger = useCallback(() => setIsTriggered(false), []);
  const speedDialItems = useMemo(
    () => [
      {
        title: "profile",
        icon: <UserIcon className="size-7" />,
        href: "/profile",
        idx: "[--i:0]",
      },
      {
        title: "profile",
        icon: <UserIcon className="size-7" />,
        href: "/profile",
        idx: "[--i:1]",
      },
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: <DashboardOutlined />,
        idx: "[--i:2]",
      },
      {
        title: "my posts",
        href: "/posts",
        icon: <ChatBubbleLeftIcon className="size-7" />,
        idx: "[--i:3]",
      },

      {
        title: "logout",
        href: "/auth/logout",
        icon: <LogoutOutlined />,
        idx: "[--i:4]",
      },
    ],
    [],
  );
  return (
    <div
      className={cn("fixed bottom-8 z-50 flex items-end justify-center ", styles.menu)}
      ref={menuRef}
    >
      <Button
        as={MotionButton}
        isIconOnly
        className={cn(
          "z-[999] rounded-full border-transparent bg-success ring-4 ring-success",
          styles.trigger,
        )}
        onPress={handleTrigger}
        // drag
        // dragConstraints={{ top: 100, left: 100, right: 100, bottom: 100 }}
        // onDragStart={startTrigger}
        // onDragEnd={endTrigger}
      >
        <Add className="size-12 text-white" />
      </Button>
      {speedDialItems.map(({ href, icon, idx, title }) => (
        <Button
          isIconOnly
          title={title}
          key={title}
          href={href}
          className={cn("rounded-full ring-success", idx, styles["menu-item"])}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
}
