"use client";
import { allGrades } from "@/lib/prisma/helper";
import { Student } from "@/lib/prisma/schemas";
import { AcademicCapIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ContactPhone, Email, Face, Face2, Phone } from "@mui/icons-material";
import { Box, InputAdornment, MenuItem, Radio, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function PersonalForm() {
  const [gender, setGender] = useState<"Male" | "Female" | boolean>(false);
  const { control } = useFormContext<Student>();

  return (
    <Box className="flex flex-col gap-6">
      <Controller
        control={control}
        name="fullname"
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Name"
            className="w-full"
            placeholder="Please enter your name"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AcademicCapIcon className="h-6 w-6 dark:text-slate-50" />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="contact"
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Contact No"
            type="number"
            fullWidth
            placeholder="Please enter your contact number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone className="h-6 w-6 dark:text-slate-50" />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Email"
            type="email"
            fullWidth
            placeholder="Please enter your email address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email className="h-6 w-6 dark:text-slate-50" />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Box className="flex flex-row gap-6">
        <Controller
          control={control}
          name="grade_name"
          render={({ field: { ref, ...remainingProps } }) => (
            <>
              <TextField
                select
                variant="standard"
                inputRef={ref}
                fullWidth
                label="Grade"
                placeholder="Please enter your grade"
                SelectProps={{
                  MenuProps: {
                    className: "w-fit dark:bg-slate-900",
                  },
                }}
                {...remainingProps}
              >
                {allGrades.map((grade) => (
                  <MenuItem
                    key={grade}
                    value={grade}
                    className=" dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    {grade}
                  </MenuItem>
                ))}
              </TextField>
            </>
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
          render={({ field: { ref, ...remainingProps } }) => (
            <>
              <TextField
                select
                variant="standard"
                label="Gender"
                inputRef={ref}
                fullWidth
                placeholder="Please enter your gender"
                SelectProps={{
                  MenuProps: {
                    className: "w-fit dark:bg-slate-900",
                  },
                }}
                InputProps={{
                  startAdornment: gender ? (
                    <InputAdornment position="start">
                      {gender === "Male" ? <Face /> : <Face2 />}
                    </InputAdornment>
                  ) : undefined,
                }}
                {...remainingProps}
              >
                {["Male", "Female"].map((gender) => (
                  <MenuItem
                    key={gender}
                    value={gender}
                    className=" dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
        />
      </Box>
    </Box>
  );
}
