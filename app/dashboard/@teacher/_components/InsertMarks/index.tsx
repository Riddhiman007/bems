"use client";
import { allGrades, getSubjectsAndGrades } from "@/_lib/prisma";
import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";
import { $Enums, ExamType } from "@prisma/client";
import React, { useMemo } from "react";
import { processRowUpdate } from "./InsertMarksBackend";
import { StudentRow } from "..";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name of the student",
    type: "string",
    width: 200,
  },
];

export default function InsertMarks({
  examType,
  subjects,
  students,
}: {
  examType: ExamType;
  subjects: $Enums.ExamSubjectsList[];
  students: StudentRow[];
}) {
  const updatedColumns = useMemo<GridColDef[]>(() => {
    let colArr = [...columns];
    subjects.forEach((val) =>
      colArr.push({ field: val, type: "number", editable: true }),
    );
    return colArr;
  }, [subjects]);
  return (
    <DataGrid
      columns={updatedColumns}
      rows={students}
      processRowUpdate={(newRow, oldRow) => processRowUpdate(newRow, oldRow, examType)}
    />
  );
}
