import { StudentInput, allCastes } from "@/_utils/types";
import { Cast, Face, Face2, LocationCity } from "@mui/icons-material";
import { Input, Select } from "@/_components/Forms";
import { SelectItem } from "@nextui-org/select";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function ParentalForm() {
  const { control } = useFormContext<StudentInput>();

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
            variant="faded"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            size="md"
            labelPlacement="outside"
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
            variant="faded"
            labelPlacement="outside"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
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
            variant="faded"
            labelPlacement="outside"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
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
          field: { disabled, value, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Select
            isInvalid={invalid}
            isDisabled={disabled}
            size="md"
            errorMessage={error?.message}
            label="Caste"
            placeholder="Please enter your caste"
            variant="faded"
            labelPlacement="outside"
            classNames={{
              label: "text-sm",
              trigger: ["w-[-webkit-fill-available]", "border-none"],
            }}
            listboxProps={{ classNames: { list: "list-none" } }}
            defaultSelectedKeys={value ? [value] : undefined}
            selectionMode="single"
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
