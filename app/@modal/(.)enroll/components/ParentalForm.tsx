"use client";
import { StudentFields } from "@/lib/prisma";
import { Cast, Face, Face2, LocationCity } from "@mui/icons-material";
import { Box, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
export default function ParentalForm() {
  const { control } = useFormContext<StudentFields>();

  return (
    <Box className="flex flex-col gap-4">
      <Controller
        control={control}
        name="father_name"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Father name"
            className="w-full"
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-base text-red-600">
                  {error.message}
                </Typography>
              )
            }
            placeholder="Please enter your father name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="mother_name"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Mother name"
            className="w-full"
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-base text-red-600">
                  {error.message}
                </Typography>
              )
            }
            placeholder="Please enter your mother name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Face2 />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Address"
            className="w-full"
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-base text-red-600">
                  {error.message}
                </Typography>
              )
            }
            placeholder="Please enter where you live"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
      <Controller
        control={control}
        name="caste"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Caste"
            select
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-base text-red-600">
                  {error.message}
                </Typography>
              )
            }
            className="w-full"
            placeholder="Please enter your caste"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Cast />
                </InputAdornment>
              ),
            }}
            SelectProps={{
              MenuProps: {
                classes: {
                  list: "dark:bg-slate-800",
                },
              },
            }}
            {...remainingProps}
          >
            {["Gen", "SC", "ST", "OBC", "NT"].map((caste) => (
              <MenuItem key={caste} value={caste} className="dark:hover:bg-slate-800">
                {caste}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  );
}
