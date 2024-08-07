"use client";
import { ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { LoginForm } from "@/_components/Forms";

import React, { useState } from "react";
import CardBackgroundForLightMode from "@/_components/ui/CardBackgroundForLightMode";

export default function ModalLoginPage() {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <CardBackgroundForLightMode />
          <ModalHeader className="text-lg">Login</ModalHeader>
          <ModalBody
          // as="form"
          // onSubmit={handleSubmit(onSubmit)}
          // className="flex flex-col gap-4 p-4"
          >
            <LoginForm isModal={{ onClose }} />
            {/* <Input
              autoFocus
              isDisabled={disabled || isSubmitting}
              isInvalid={invalid}
              variant="faded"
              className="border-none"
              classNames={{
                errorMessage: "text-danger text-base",
                input: "border-none",
                label: ["text-sm", !!error ? "text-danger-900" : ""],
                inputWrapper: "w-[-webkit-fill-available]",
              }}
              size="md"
              startContent={
                <Email
                  className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                />
              }
              placeholder="Please enter your email address"
              label="Email"
              errorMessage={error?.message}
              {...other}
            />
            <div className="flex justify-between">
              <Button
                as={MotionButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                color="danger"
                variant="bordered"
                onPress={() => {
                  onClose();
                  setTimeout(router.back, 500);
                }}
                type="button"
                isDisabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                as={MotionButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                color="success"
                variant="ghost"
                className="bg-success-200 !text-success-800 hover:bg-success-100 active:bg-success-50"
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </div> */}
          </ModalBody>
        </>
      )}
    </ModalContent>
  );
}
