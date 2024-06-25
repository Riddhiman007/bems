"use client";
import CardBackgroundForLightMode from "@/_components/ui/CardBackgroundForLightMode";
import { MotionButton } from "@/_components/Motion";
import SignoutButton from "@/_components/ui/SignoutButton";
import { Button } from "@nextui-org/button";
import { ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import React from "react";

export default function Logout() {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader>Log out</ModalHeader>
          <CardBackgroundForLightMode />
          <ModalBody className="flex flex-col gap-4">
            <p className="text-lg">Are you sure you want to log out?</p>
            <div className="flex justify-between">
              <Button
                variant="bordered"
                color="danger"
                type="button"
                onPress={onClose}
                as={MotionButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
              >
                Cancel
              </Button>
              <SignoutButton />
            </div>
          </ModalBody>
        </>
      )}
    </ModalContent>
  );
}
