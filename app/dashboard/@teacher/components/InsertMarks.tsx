"use client";
import { allGrades, getSubjectsAndGrades } from "@/lib/prisma";
import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";
import { $Enums } from "@prisma/client";
import React, { useMemo } from "react";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name of the student",
    type: "string",
    width: 200,
  },
  // {
  //   field: "grade",
  //   headerName: "Grade",
  //   type: "singleSelect",
  //   valueOptions: allGrades,
  // },
];
interface SudentRow extends GridValidRowModel {
  id: string;
  name: string;
}

export default function InsertMarks({
  subjects,
  students,
}: {
  subjects: $Enums.ExamSubjectsList[];
  students: SudentRow[];
}) {
  const updatedColumns = useMemo<GridColDef[]>(() => {
    let colArr = [...columns];
    subjects.forEach((val) =>
      colArr.push({ field: val, type: "number", editable: true }),
    );
    return colArr;
  }, [subjects]);
  return <DataGrid columns={updatedColumns} rows={students} />;
}
