"use client";
import { AnimatePresence } from "@/_components/Motion";
import { Modal, useDisclosure } from "@nextui-org/modal";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const { isOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: true,
  });
  return (
    <AnimatePresence mode="wait">
      <Modal
        scrollBehavior="outside"
        classNames={{ base: "mt-4" }}
        closeButton={<button hidden></button>}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        placement="top-center"
        isDismissable={false}
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },

            exit: {
              y: -300,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        {children}
      </Modal>
    </AnimatePresence>
  );
}
