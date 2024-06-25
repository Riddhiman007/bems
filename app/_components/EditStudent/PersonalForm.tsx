import {
  StudentFields,
  allGrades,
  fetchStudentByEmail,
  middleGrades,
  prepGrades,
  primaryGrades,
  secondaryGrades,
} from "@/_lib/prisma";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Email, Face, Face2, Phone } from "@mui/icons-material";
import { Input, Select } from "@/_components/Forms";
import { SelectItem, SelectSection } from "@nextui-org/select";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function PersonalForm({ formType }: { formType: "new" | "update" }) {
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
            labelPlacement="outside"
            variant="faded"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            // size="sm"
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
            variant="faded"
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            size="md"
            startContent={
              <Phone
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            labelPlacement="outside"
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
        rules={{
          async validate(value) {
            console.log("running email validator");
            if (formType === "new") {
              let stud = await fetchStudentByEmail(value);
              if (stud?.email === value) {
                return ["Please enter a unique email address. This is already used."];
              }
              return true;
            }

            return true;
          },
        }}
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
            startContent={
              <Email
                className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
              />
            }
            labelPlacement="outside"
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
            field: { disabled, value, ...remainingProps },
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
              variant="faded"
              labelPlacement="outside"
              classNames={{
                label: "text-sm",
                trigger: ["border-none", "w-[-webkit-fill-available]"],
              }}
              listboxProps={{
                classNames: { list: "p-0", base: "w-4/5" },
              }}
              startContent={
                <AcademicCapIcon
                  className={`size-6 ${!!error ? "text-danger" : "text-content4-foreground"}`}
                />
              }
              defaultSelectedKeys={value ? [value] : undefined}
              selectionMode="single"
              {...remainingProps}
            >
              <SelectSection
                showDivider
                title="Pre primary"
                classNames={{ group: "list-none" }}
              >
                {prepGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection
                showDivider
                title="Primary"
                classNames={{ group: "list-none" }}
              >
                {primaryGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection
                showDivider
                title="Middle"
                classNames={{ group: "list-none" }}
              >
                {middleGrades.map((grade) => (
                  <SelectItem key={grade.toString()} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectSection>
              <SelectSection
                showDivider
                title="Secondary"
                classNames={{ group: "list-none" }}
              >
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
          render={({
            field: { disabled, value, ...remainingProps },
            fieldState: { error, invalid },
          }) => (
            <Select
              isInvalid={invalid}
              isDisabled={disabled}
              size="md"
              errorMessage={error?.message}
              label="Gender"
              placeholder="Please enter your gender"
              variant="faded"
              labelPlacement="outside"
              classNames={{
                label: "text-sm",
                trigger: ["border-none", "w-[-webkit-fill-available]"],
              }}
              listboxProps={{
                classNames: { list: "p-0 list-none", base: "w-4/5" },
              }}
              defaultSelectedKeys={value ? [value] : undefined}
              selectionMode="single"
              startContent={
                value === "Male" ? (
                  <Face
                    className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                  />
                ) : (
                  value === "Female" && (
                    <Face2
                      className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                    />
                  )
                )
              }
              {...remainingProps}
            >
              <SelectItem
                key="Male"
                value="Male"
                startContent={<Face className="size-6 fill-content4-foreground" />}
              >
                Male
              </SelectItem>
              <SelectItem
                key="Female"
                value="Female"
                startContent={<Face2 className="size-6 fill-content4-foreground" />}
              >
                Female
              </SelectItem>
            </Select>
          )}
        />
      </div>
    </div>
  );
}
