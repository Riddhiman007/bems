"use client";
import { Search } from "@/_components/Search";
import { ModalBody, ModalContent } from "@nextui-org/modal";
import React from "react";

export default function InterceptedSearchPage() {
  return (
    <ModalContent>
      {(onClose) => (
        <ModalBody>
          <Search onSubmit={() => {}} onChange={() => {}} />
        </ModalBody>
      )}
    </ModalContent>
  );
}
