"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { cn } from "@/_utils";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  className: string;
  href: string;
  children: React.ReactNode;
}
const ShinyButton = ({ className, href, children }: Partial<Props>) => {
  const router = useRouter();
  return (
    <motion.button
      // @ts-ignore
      initial={{ "--x": "100%", scale: 1 }}
      //@ts-ignore
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={() => (href ? router.push(href) : undefined)}
      className={cn(
        "relative rounded-md px-6 py-2",
        styles["radial-gradient"],
        className,
      )}
    >
      <span
        className={cn(
          "relative block h-full w-full font-light tracking-wide text-neutral-100",
          styles["linear-mask"],
        )}
      >
        {children}
      </span>
      <span
        className={cn("absolute inset-0 block rounded-md p-px", styles["linear-overlay"])}
      />
    </motion.button>
  );
};

export default ShinyButton;
