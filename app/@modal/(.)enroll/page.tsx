"use client";
import React from "react";

import {
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalHeaderProps,
} from "@nextui-org/modal";
import dynamic from "next/dynamic";
import { EditStudentLoadingState } from "@/_components/EditStudent";
const EnrollComponent = dynamic(() => import("./_components/EnrollComponent"), {
  ssr: false,
  loading: ({ isLoading }) => (isLoading ? <EditStudentLoadingState /> : null),
});

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
