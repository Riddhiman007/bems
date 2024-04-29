"use client";
import {
  StudentFields,
  allGrades,
  middleGrades,
  prepGrades,
  primaryGrades,
  secondaryGrades,
} from "@/lib/prisma";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Email, Face, Face2, Phone } from "@mui/icons-material";
import { Input } from "@nextui-org/input";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function PersonalForm() {
  const [gender, setGender] = useState<"Male" | "Female" | boolean>(false);
  const { control } = useFormContext<StudentFields>();
  return (
    <div className="flex flex-col gap-6">
      <Controller
        control={control}
        name="fullname"
        render={({
          field: { disabled, ...remainingProps },
          fieldState: { error, invalid },
        }) => (
          <Input
            autoFocus
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
              <AcademicCapIcon
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            placeholder="Please enter your full name"
            label="Name"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="contact"
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
              <Phone
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            placeholder="Please enter your contact no"
            type="number"
            label="Contact"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
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
              <Email
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            type="email"
            placeholder="Please enter your email address"
            label="Email"
            errorMessage={error?.message}
            {...remainingProps}
          />
        )}
      />
      <div className="flex flex-row gap-6">
        <Controller
          control={control}
          name="grade"
          render={({
            field: { disabled, ...remainingProps },
            fieldState: { error, invalid },
          }) => (
            <Select
              isInvalid={invalid}
              isDisabled={disabled}
              size="md"
              className="max-w-xs"
              errorMessage={error?.message}
              label="Grade"
              placeholder="Please enter your grade"
              variant="underlined"
              classNames={{
                label: "text-sm",
                trigger: ["[background:none]", "border-none"],
              }}
              listboxProps={{
                classNames: { list: "p-0", base: "w-4/5" },
              }}
              startContent={
                <AcademicCapIcon
                  className={`size-6 ${!!error ? "text-danger" : "text-content4-foreground"}`}
                />
              }
              {...remainingProps}
            >
              <SelectSection showDivider title="Pre primary">
                {prepGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection showDivider title="Primary">
                {primaryGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection showDivider title="Middle">
                {middleGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection showDivider title="Secondary">
                {secondaryGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
            </Select>
          )}
        />
        <Controller
          control={control}
          name="gender"
          rules={{
            onChange(event) {
              setGender(event.target.value);
            },
          }}
          render={({
            field: { disabled, ...remainingProps },
            fieldState: { error, invalid },
          }) => (
            <Select
              isInvalid={invalid}
              isDisabled={disabled}
              size="md"
              errorMessage={error?.message}
              label="Gender"
              placeholder="Please enter your gender"
              variant="underlined"
              classNames={{
                label: "text-sm",
                trigger: ["[background:none]", "border-none"],
              }}
              listboxProps={{
                classNames: { list: "p-0", base: "w-4/5" },
              }}
              startContent={
                gender === "Male" ? (
                  <Face
                    className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                  />
                ) : (
                  gender === "Female" && (
                    <Face2
                      className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                    />
                  )
                )
              }
              {...remainingProps}
            >
              {["Male", "Female"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
}
