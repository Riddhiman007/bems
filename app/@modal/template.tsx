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
      >
        {children}
      </Modal>
    </AnimatePresence>
  );
}
