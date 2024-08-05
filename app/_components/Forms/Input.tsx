"use client";
import { useInput } from "@nextui-org/input";
import { UseInputProps } from "@nextui-org/input/dist/use-input";
import React, { useMemo } from "react";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { CloseFilledIcon } from "../Icons";
import { cn } from "@/_utils";
import { GlowComponent, GlowProps } from "../ui";

interface Props<T extends HTMLTextAreaElement | HTMLInputElement = HTMLInputElement>
  extends UseInputProps<T>,
    GlowProps {}
export default function Input<
  T extends HTMLTextAreaElement | HTMLInputElement = HTMLInputElement,
>({ disableGlow, glowRadius, glowColor, ...props }: Props<T>) {
  const {
    Component,
    shouldLabelBeInside,
    shouldLabelBeOutside,
    description,
    errorMessage,
    domRef,
    isClearable,
    endContent,
    startContent,
    label,
    getBaseProps,
    getClearButtonProps,
    getDescriptionProps,
    getErrorMessageProps,

    getInnerWrapperProps,
    getInputProps,
    getInputWrapperProps,
    getLabelProps,
  } = useInput<T>({ ...props });

  const labelContent = useMemo(
    () => <label {...getLabelProps()}>{label}</label>,
    [getLabelProps, label],
  );

  const end = React.useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps, endContent]);

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div
          className={cn(
            "group-focus-visible:outline-none group-focus-visible:ring-[2px]  group-focus-visible:ring-default-600",
          )}
          {...getInnerWrapperProps()}
        >
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      {!disableGlow || props.variant === "faded" || props.variant === "flat" ? (
        <GlowComponent radius={glowRadius} glowColor={glowColor}>
          <div
            //  style={{ width: "-webkit-fill-available" }}
            {...getInputWrapperProps()}
            onClick={() => {
              domRef.current?.focus();
            }}
          >
            {shouldLabelBeInside ? labelContent : null}
            {innerWrapper}
          </div>
        </GlowComponent>
      ) : (
        <div
          onClick={() => {
            domRef.current?.focus();
          }}
          {...getInputWrapperProps()}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </div>
      )}
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
}
