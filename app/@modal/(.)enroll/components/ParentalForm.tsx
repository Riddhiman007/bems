"use client";
import { Student } from "@/lib/prisma/schemas";
import { Cast, Face, Face2, LocationCity } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function ParentalForm() {
  const { control } = useFormContext<Student>();
  return (
    <Box className="flex flex-col gap-4">
      <Controller
        control={control}
        name="father_name"
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Father name"
            className="w-full"
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
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Mother name"
            className="w-full"
            multiline
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
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Address"
            className="w-full"
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
        render={({ field: { ref, ...remainingProps } }) => (
          <TextField
            inputRef={ref}
            variant="standard"
            label="Caste"
            className="w-full"
            placeholder="Please enter your caste"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Cast />
                </InputAdornment>
              ),
            }}
            {...remainingProps}
          />
        )}
      />
    </Box>
  );
}
