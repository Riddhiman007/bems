"use client";
import {
  GradeClass,
  allGrades,
  exam_defaults,
  middleGrades,
  prepGrades,
  primaryGrades,
  secondaryGrades,
} from "@/_utils/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ExamType, GradeType } from "@prisma/client";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from ".";
import { useExamContext } from "./CreateExam";

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
export default function MarksChart() {
  const { getValues } = useFormContext<FormInput>();
  const [currentExam, setCurrentExam] = useState(getValues("exam"));
  const { selectedGrades } = useExamContext();
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
  let default_marks = exam_defaults.find((val) => val.exam_type === currentExam);

  return (
    <>
      {selectedGrades.length !== 0 && (
        <DataGrid
          columns={columns}
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
