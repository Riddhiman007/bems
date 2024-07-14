"use client";
import { MenuItem, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormInput } from ".";
import { isExamPresent } from "@/_lib/prisma";
import { allGrades, middleGrades, prepGrades, primaryGrades } from "@/_lib/prisma";
import { ExamTypeList } from "@/_utils/types";
import { useExamContext } from "./CreateExam";
import { ExamType, GradeType } from "@prisma/client";

export default function BasicInfo() {
  const [currentExam, setCurrentExam] = useState<ExamType | undefined>();
  const { control, getValues } = useFormContext<FormInput>();
  const { selectedGrades, setSelectedGrades } = useExamContext();
  function changeGrade() {
    let fromGrade = getValues("fromGrade");
    let toGrade = getValues("toGrade");
    if (fromGrade && toGrade) {
      let grades = allGrades.filter((val) => {
        for (
          let index = allGrades.findIndex((val) => val === fromGrade);
          index <= allGrades.findIndex((val) => val === toGrade);
          index++
        ) {
          if (val === allGrades[index]) {
            return val;
          }
        }
      });

      setSelectedGrades(grades);
      console.log(selectedGrades);
    }
  }
  const eligibleGrades = useMemo<GradeType[]>(() => {
    if (currentExam === "FA1" || currentExam === "SA1") return allGrades;
    if (currentExam === "FA2" || currentExam === "SA2")
      return prepGrades.concat(primaryGrades, middleGrades, ["VIII"]);
    if (currentExam === "Prelim1" || currentExam === "Prelim2") return ["IX", "X"];
    if (currentExam === "Board") return ["X"];
    return [];
  }, [currentExam]);
  return (
    <>
      <div className="flex flex-row gap-2">
        <Typography>Exam Type:</Typography>
        <Controller
          control={control}
          name="exam"
          rules={{
            async validate(val) {
              if (val) {
                let res = await isExamPresent(val);
                if (res) {
                  return "Exam already exists";
                } else if (res === false) {
                  return true;
                }
              }
            },
            onChange() {
              setCurrentExam(getValues("exam"));
              changeGrade();
            },
            required: "Please select an exam",
          }}
          render={({ field: { ref, ...other }, fieldState: { error, invalid } }) => (
            <TextField
              error={Boolean(error) || invalid}
              variant="outlined"
              select
              size="small"
              placeholder="Exam type"
              label="Exam"
              className="w-24"
              helperText={
                error && (
                  <Typography className="text-sm text-red-500">
                    {error.message}
                  </Typography>
                )
              }
              SelectProps={{
                MenuProps: {
                  classes: { list: "dark:bg-slate-900" },
                },
              }}
              inputRef={ref}
              {...other}
            >
              {ExamTypeList.map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </div>
      <div className="flex flex-row gap-2">
        <Typography>From:</Typography>
        <Controller
          control={control}
          rules={{
            required: "Please enter grade",
            onChange() {
              changeGrade();
            },
          }}
          name="fromGrade"
          render={({ field: { ref, ...other }, fieldState: { invalid, error } }) => (
            <TextField
              error={Boolean(error) || invalid}
              select
              disabled={eligibleGrades.length === 0}
              variant="outlined"
              size="small"
              placeholder="Please enter grade"
              label="Grade"
              className="w-24"
              SelectProps={{
                MenuProps: {
                  classes: { list: "dark:bg-slate-900" },
                },
              }}
              helperText={
                error && (
                  <Typography className="text-sm text-red-500">
                    {error.message}
                  </Typography>
                )
              }
              inputRef={ref}
              {...other}
            >
              {eligibleGrades.map((grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </div>
      <div className="flex flex-row gap-2">
        <Typography>To:</Typography>
        <Controller
          control={control}
          name="toGrade"
          rules={{
            required: "Please enter a grade",
            onChange() {
              changeGrade();
            },
          }}
          render={({ field: { ref, ...other }, fieldState: { invalid, error } }) => (
            <TextField
              select
              disabled={eligibleGrades.length === 0}
              error={Boolean(error) || invalid}
              variant="outlined"
              size="small"
              placeholder="Please enter grade"
              label="Grade"
              className="w-24"
              SelectProps={{
                MenuProps: {
                  classes: { list: "dark:bg-slate-900" },
                },
              }}
              helperText={
                error && (
                  <Typography className="text-sm text-red-500">
                    {error.message}
                  </Typography>
                )
              }
              inputRef={ref}
              {...other}
            >
              {eligibleGrades.map((grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </div>
    </>
  );
}
