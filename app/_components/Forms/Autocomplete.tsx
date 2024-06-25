import { useAutocomplete } from "@nextui-org/autocomplete";
import { UseAutocompleteProps } from "@nextui-org/autocomplete/dist/use-autocomplete";
import { Input } from "@/_components/Forms";
import { FreeSoloPopover } from "@nextui-org/popover";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Listbox } from "@nextui-org/listbox";
import { CloseIcon, ChevronDownIcon } from "@nextui-org/shared-icons";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Button } from "@nextui-org/button";

export default function Autocomplete<T extends object = object>(
  props: UseAutocompleteProps<T>,
) {
  const {
    Component,
    disableAnimation,
    endContent,
    clearIcon = <CloseIcon />,
    selectorIcon = <ChevronDownIcon />,
    getBaseProps,
    getEndContentWrapperProps,
    getClearButtonProps,
    getSelectorButtonProps,
    getInputProps,
    getEmptyPopoverProps,
    getListBoxProps,
    getPopoverProps,
    getListBoxWrapperProps,
    isOpen,
  } = useAutocomplete<T>(props);
  const popover = isOpen ? (
    <FreeSoloPopover {...getPopoverProps()}>
      {/* @ts-ignore */}
      <ScrollShadow {...getListBoxWrapperProps()}>
        <Listbox {...getListBoxProps()} />
      </ScrollShadow>
    </FreeSoloPopover>
  ) : (
    <div {...getEmptyPopoverProps()}></div>
  );
  return (
    <Component {...getBaseProps()}>
      <Input
        {...getInputProps()}
        endContent={
          <div {...getEndContentWrapperProps()}>
            {endContent || <Button {...getClearButtonProps()}>{clearIcon}</Button>}
            <Button {...getSelectorButtonProps()}>{selectorIcon}</Button>
          </div>
        }
      />

      {createPortal(
        disableAnimation ? popover : <AnimatePresence>{popover}</AnimatePresence>,
        document.body,
      )}
    </Component>
  );
}
