"use client";
import { StudentFields, allCastes } from "@/lib/prisma";
import { Cast, Face, Face2, LocationCity } from "@mui/icons-material";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function ParentalForm() {
  const { control } = useFormContext<StudentFields>();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        control={control}
        name="father_name"
        render={({
          field: { disabled, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Input
            isDisabled={disabled}
            isInvalid={invalid}
            variant="underlined"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-auto",
            }}
            size="md"
            startContent={
              <Face
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            placeholder="Please enter your fathers's name"
            label="Father's name"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="mother_name"
        render={({
          field: { disabled, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Input
            isDisabled={disabled}
            isInvalid={invalid}
            variant="underlined"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-auto",
            }}
            size="md"
            startContent={
              <Face2
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            placeholder="Please enter your mother's name"
            label="Mother's name"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({
          field: { disabled, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Input
            isDisabled={disabled}
            isInvalid={invalid}
            variant="underlined"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-auto",
            }}
            size="md"
            startContent={
              <LocationCity
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            placeholder="Please enter your address"
            label="Address"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="caste"
        render={({
          field: { disabled, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Select
            isInvalid={invalid}
            isDisabled={disabled}
            size="md"
            errorMessage={error?.message}
            label="Caste"
            placeholder="Please enter your caste"
            variant="underlined"
            classNames={{
              label: "text-sm",
              trigger: ["[background:none]", "border-none"],
            }}
            {...remainingProps}
          >
            {allCastes.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
}
