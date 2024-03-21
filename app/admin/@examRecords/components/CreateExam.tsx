"use client";
import MotionMuiButton from "@/components/Motion/MotionMuiButton";
import {
  ExamTypeList,
  GradeClass,
  allGrades,
  createNewExam,
  exam_defaults,
  isExamPresent,
  middleGrades,
  prepGrades,
  primaryGrades,
  secondaryGrades,
} from "@/lib/prisma";
import { Divider, MenuItem, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { ExamType, GradeType } from "@prisma/client";
import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const columns: GridColDef[] = [
  { field: "grade", type: "singleSelect", valueOptions: allGrades, headerName: "Grade" },
  {
    field: "mainSub",
    type: "number",
    headerName: "Main Subject Marks",
    editable: true,
    width: 200,
  },
  {
    field: "optionalSub",
    type: "number",
    headerName: "Optional Subject Marks",
    editable: true,
    width: 200,
  },
];
function ExamMarksChart({ rows }: { rows: GridValidRowModel[] }) {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      processRowUpdate={(newRow, oldRow) => {
        console.log(`${newRow} - ${oldRow}`);

        return newRow;
      }}
    />
  );
}
export default function CreateExam() {
  interface FormInput {
    exam: ExamType;
    fromGrade: GradeType;
    toGrade: GradeType;
  }

  const { handleSubmit, control, watch, getValues } = useForm<FormInput>({ mode: "all" });
  const [currentExam, setCurrentExam] = useState<ExamType | undefined>();
  const [selectedGrades, setSelectedGrades] = useState<GradeType[]>([]);

  /// Change grade
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
  // Exam type

  let default_marks = exam_defaults.find((val) => val.exam_type === currentExam);

  // grade changes
  let gradeType: GradeClass[] = [];
  selectedGrades.map((grade) => {
    if (!gradeType.includes("primary")) {
      if (primaryGrades.includes(grade)) {
        gradeType.push("primary");
      }
    }
    if (!gradeType.includes("middle")) {
      if (middleGrades.includes(grade)) {
        gradeType.push("middle");
      }
    }
    if (!gradeType.includes("secondary")) {
      if (secondaryGrades.includes(grade)) {
        gradeType.push("secondary");
      }
    }
    if (!gradeType.includes("prep")) {
      if (prepGrades.includes(grade)) {
        gradeType.push("prep");
      }
    }
  });

  const eligibleGrades = useMemo<GradeType[]>(() => {
    if (currentExam === "FA1" || currentExam === "SA1") return allGrades;
    if (currentExam === "FA2" || currentExam === "SA2")
      return prepGrades.concat(primaryGrades, middleGrades, ["VIII"]);
    if (currentExam === "Prelim1" || currentExam === "Prelim2") return ["IX", "X"];
    if (currentExam === "Board") return ["X"];
    return [];
  }, [currentExam]);
  const onSubmit = async ({ exam, fromGrade, toGrade }: FormInput) => {
    await createNewExam({ exam_type: exam, fromGrade, toGrade });
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <form className="flex flex-row gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Typography>Create</Typography>
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
              required: "Please select an exam",
              onChange() {
                setCurrentExam(getValues("exam"));
              },
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

          <Typography>from</Typography>
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

          <Typography>to</Typography>
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
          <MotionMuiButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            type="submit"
            className="ml-4 bg-blue-700 px-2 py-1 text-blue-50"
          >
            Submit
          </MotionMuiButton>
        </form>
      </div>
      {selectedGrades.length !== 0 && (
        <ExamMarksChart
          rows={gradeType.map((grade) => ({
            id: grade,
            grade: grade,
            mainSub:
              grade === "primary"
                ? default_marks?.primary_main_sub_marks
                : grade === "middle"
                  ? default_marks?.middle_main_sub_marks
                  : grade === "secondary"
                    ? default_marks?.secondary_main_sub_marks
                    : undefined,
            optionalSub:
              grade === "primary"
                ? default_marks?.primary_optional_sub_marks
                : grade === "middle"
                  ? default_marks?.middle_optional_sub_marks
                  : grade === "secondary"
                    ? default_marks?.secondary_optional_sub_marks
                    : undefined,
          }))}
        />
      )}
    </>
  );
}
