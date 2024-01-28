"use client";
import { StudentFields, allGrades } from "@/lib/prisma/helpers";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Email, Face, Face2, Phone } from "@mui/icons-material";
import { Box, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function PersonalForm() {
  const [gender, setGender] = useState<"Male" | "Female" | boolean>(false);
  const { control } = useFormContext<StudentFields>();
  return (
    <Box className="flex flex-col gap-6">
      <Controller
        control={control}
        name="fullname"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-sm text-red-600">{error.message}</Typography>
              )
            }
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
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Contact No"
            type="number"
            fullWidth
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-sm text-red-600">{error.message}</Typography>
              )
            }
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
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Email"
            type="email"
            fullWidth
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-sm text-red-600">{error.message}</Typography>
              )
            }
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
          name="grade"
          render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
            <>
              <TextField
                select
                variant="standard"
                inputRef={ref}
                fullWidth
                label="Grade"
                error={Boolean(error)}
                helperText={
                  error && (
                    <Typography className="text-sm text-red-600">
                      {error.message}
                    </Typography>
                  )
                }
                placeholder="Please enter your grade"
                SelectProps={{
                  MenuProps: {
                    classes: { list: "dark:bg-slate-900" },
                  },
                }}
                {...remainingProps}
              >
                {allGrades.map((grade) => (
                  <MenuItem key={grade} value={grade} className="dark:hover:bg-slate-800">
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
          render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
            <>
              <TextField
                select
                variant="standard"
                label="Gender"
                error={Boolean(error)}
                helperText={
                  error && (
                    <Typography className="text-sm text-red-600">
                      {error.message}
                    </Typography>
                  )
                }
                inputRef={ref}
                fullWidth
                placeholder="Please enter your gender"
                SelectProps={{
                  MenuProps: {
                    classes: {
                      list: "w-fit dark:bg-slate-800",
                    },
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
                    className="dark:hover:bg-slate-800"
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
