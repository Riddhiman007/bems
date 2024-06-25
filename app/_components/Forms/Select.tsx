import { Listbox } from "@nextui-org/listbox";
import { FreeSoloPopover } from "@nextui-org/popover";
import { ChevronDownIcon } from "@nextui-org/shared-icons";
import { Spinner } from "@nextui-org/spinner";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { cloneElement, ForwardedRef, ReactElement, Ref, useMemo } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { AnimatePresence } from "framer-motion";
import { useSelect, SelectProps } from "@nextui-org/select";
import { GlowComponent, GlowProps } from "../ui";

import { FocusableElement } from "@react-types/shared";
import React, { ReactNode, RefObject } from "react";
import { useFormReset } from "@react-aria/utils";
import { useInteractionModality } from "@react-aria/interactions";
import { useVisuallyHidden } from "@react-aria/visually-hidden";
import { MultiSelectProps, MultiSelectState } from "@nextui-org/use-aria-multiselect";
import { useFormValidation } from "@react-aria/form";
interface SelectData {
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  validationBehavior?: "aria" | "native";
}
const selectData = new WeakMap<MultiSelectState<any>, SelectData>();

export interface AriaHiddenSelectProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /** The text label for the select. */
  label?: ReactNode;
  /** HTML form input name. */
  name?: string;
  /** Sets the disabled state of the select and input. */
  isDisabled?: boolean;
  /** Whether the select is required. */
  isRequired?: boolean;
}

type NativeHTMLSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  keyof AriaHiddenSelectProps
>;

type CombinedAriaSelectProps = NativeHTMLSelectProps & AriaHiddenSelectProps;

export interface HiddenSelectProps<T> extends CombinedAriaSelectProps {
  /** State for the select. */
  state: MultiSelectState<T>;
  /** The selection mode for the select. */
  selectionMode: MultiSelectProps<T>["selectionMode"];
  /** A ref to the trigger element. */
  triggerRef: RefObject<FocusableElement>;
  /** A ref to the hidden `<select>` element. */
  selectRef?: RefObject<HTMLSelectElement>;
}

export interface AriaHiddenSelectOptions<T> extends CombinedAriaSelectProps {
  /** A ref to the hidden `<select>` element. */
  selectRef?: RefObject<HTMLSelectElement>;
  /** The selection mode for the select. */
  selectionMode: MultiSelectProps<T>["selectionMode"];
}

/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */
function useHiddenSelect<T>(
  props: AriaHiddenSelectOptions<T>,
  state: MultiSelectState<T>,
  triggerRef: RefObject<FocusableElement>,
) {
  let data = selectData.get(state) || {};
  let {
    autoComplete,
    name = data.name,
    isDisabled = data.isDisabled,
    selectionMode,
    onChange,
  } = props;
  let { validationBehavior, isRequired } = data;
  let modality = useInteractionModality();
  let { visuallyHiddenProps } = useVisuallyHidden();

  useFormReset(props.selectRef!, state.selectedKeys, state.setSelectedKeys);
  useFormValidation(
    {
      validationBehavior,
      focus: () => triggerRef.current?.focus(),
    },
    state,
    props.selectRef,
  );

  return {
    containerProps: {
      ...visuallyHiddenProps,
      "aria-hidden": true,
      ["data-a11y-ignore"]: "aria-hidden-focus",
    },
    inputProps: {
      type: "text",
      tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
      autoComplete,
      value: [...state.selectedKeys].join(",") ?? "",
      required: isRequired,
      style: { fontSize: 16 },
      onFocus: () => triggerRef.current?.focus(),
      disabled: isDisabled,
      // The onChange is handled by the `select` element. This avoids the `form` with input `value`
      // and no `onChange` warning.
      onChange: () => {},
    },
    selectProps: {
      name,
      tabIndex: -1,
      autoComplete,
      // TODO: Address validation for cases where an option is selected and then deselected.
      // required: validationBehavior === "native" && isRequired,
      disabled: isDisabled,
      size: state.collection.size,
      value:
        selectionMode === "multiple"
          ? [...state.selectedKeys].map((k) => String(k))
          : [...state.selectedKeys][0] ?? "",
      multiple: selectionMode === "multiple",
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        state.setSelectedKeys(e.target.value);
        onChange?.(e);
      },
    },
  };
}

function HiddenSelect<T>(props: HiddenSelectProps<T>) {
  let { state, triggerRef, selectRef, label, name, isDisabled } = props;

  let { containerProps, inputProps, selectProps } = useHiddenSelect(
    { ...props, selectRef },
    state,
    triggerRef,
  );

  // If used in a <form>, use a hidden input so the value can be submitted to a server.
  // If the collection isn't too big, use a hidden <select> element for this so that browser
  // autofill will work. Otherwise, use an <input type="hidden">.
  if (state.collection.size <= 300) {
    return (
      <div {...containerProps} data-testid="hidden-select-container">
        <input {...inputProps} />
        <label>
          {label}
          {/* @ts-ignore */}
          <select {...selectProps} ref={selectRef}>
            <option />
            {[...state.collection.getKeys()].map((key) => {
              let item = state.collection.getItem(key);

              if (item?.type === "item") {
                return (
                  <option key={item.key} value={item.key}>
                    {item.textValue}
                  </option>
                );
              }
            })}
          </select>
        </label>
      </div>
    );
  } else if (name) {
    return (
      <input
        autoComplete={selectProps.autoComplete}
        disabled={isDisabled}
        name={name}
        type="hidden"
        value={[...state.selectedKeys].join(",") ?? ""}
      />
    );
  }

  return null;
}
interface Props<T extends object = object> extends SelectProps<T>, GlowProps {}

export default function Select<T extends object = object>({
  disableGlow,
  glowRadius,
  glowColor,
  ...props
}: Props<T>) {
  const {
    Component,
    state,
    label,
    hasHelper,
    isLoading,
    triggerRef,
    selectorIcon = <ChevronDownIcon />,
    description,
    errorMessage,
    isInvalid,
    startContent,
    endContent,
    placeholder,
    renderValue,
    isOutsideLeft,
    disableAnimation,
    getBaseProps,
    getLabelProps,
    getTriggerProps,
    getValueProps,
    getListboxProps,
    getPopoverProps,
    getSpinnerProps,
    getMainWrapperProps,
    getInnerWrapperProps,
    getHiddenSelectProps,
    getHelperWrapperProps,
    getListboxWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getSelectorIconProps,
  } = useSelect<T>({ ...props });

  const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

  const clonedIcon = cloneElement(selectorIcon as ReactElement, getSelectorIconProps());

  const helperWrapper = useMemo(() => {
    if (!hasHelper) return null;

    return (
      <div {...getHelperWrapperProps()}>
        {isInvalid && errorMessage ? (
          <div {...getErrorMessageProps()}>{errorMessage}</div>
        ) : description ? (
          <div {...getDescriptionProps()}>{description}</div>
        ) : null}
      </div>
    );
  }, [
    hasHelper,
    isInvalid,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps,
  ]);

  const renderSelectedItem = useMemo(() => {
    if (!state.selectedItems?.length) return placeholder;

    if (renderValue && typeof renderValue === "function") {
      const mappedItems = [...state.selectedItems].map((item) => ({
        key: item.key,
        data: item.value,
        type: item.type,
        props: item.props,
        textValue: item.textValue,
        rendered: item.rendered,
        "aria-label": item["aria-label"],
      }));

      return renderValue(mappedItems);
    }

    return state.selectedItems.map((item) => item.textValue).join(", ");
  }, [state.selectedItems, renderValue, placeholder]);

  const renderIndicator = useMemo(() => {
    if (isLoading) {
      //@ts-ignore
      return <Spinner {...getSpinnerProps()} />;
    }

    return clonedIcon;
  }, [isLoading, clonedIcon, getSpinnerProps]);

  const popoverContent = useMemo(
    () =>
      state.isOpen ? (
        <FreeSoloPopover {...getPopoverProps()}>
          {/* @ts-ignore */}
          <ScrollShadow {...getListboxWrapperProps()}>
            <Listbox {...getListboxProps()} />
          </ScrollShadow>
        </FreeSoloPopover>
      ) : null,
    [
      state.isOpen,
      getPopoverProps,
      state,
      triggerRef,
      getListboxWrapperProps,
      getListboxProps,
    ],
  );

  return (
    <div {...getBaseProps()}>
      <HiddenSelect {...getHiddenSelectProps()} />
      {isOutsideLeft ? labelContent : null}
      <div {...getMainWrapperProps()}>
        {!disableGlow || props.variant === "faded" || props.variant === "flat" ? (
          <GlowComponent glowColor={glowColor} radius={glowRadius}>
            <Component {...getTriggerProps()}>
              {!isOutsideLeft ? labelContent : null}
              <div {...getInnerWrapperProps()}>
                {startContent}
                <span {...getValueProps()}>{renderSelectedItem}</span>
                {endContent && state.selectedItems && (
                  <VisuallyHidden elementType="span">,</VisuallyHidden>
                )}
                {endContent}
              </div>
              {renderIndicator}
            </Component>
          </GlowComponent>
        ) : (
          <Component {...getTriggerProps()}>
            {!isOutsideLeft ? labelContent : null}
            <div {...getInnerWrapperProps()}>
              {startContent}
              <span {...getValueProps()}>{renderSelectedItem}</span>
              {endContent && state.selectedItems && (
                <VisuallyHidden elementType="span">,</VisuallyHidden>
              )}
              {endContent}
            </div>
            {renderIndicator}
          </Component>
        )}
        {helperWrapper}
      </div>
      {disableAnimation ? (
        popoverContent
      ) : (
        <AnimatePresence>{popoverContent}</AnimatePresence>
      )}
    </div>
  );
}
