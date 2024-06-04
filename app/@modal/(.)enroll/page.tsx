"use client";
import React from "react";

import {
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalHeaderProps,
} from "@nextui-org/modal";
import EnrollComponent from "./components/EnrollComponent";
import MotionDiv from "@/components/Motion/MotionDiv";

export default function AdmissionForm() {
  return (
    <>
      <ModalContent key="enrollCard">
        {(onClose) => (
          <>
            <ModalHeader>Enroll guide</ModalHeader>
            <ModalBody>
              <EnrollComponent onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </>
  );
}
