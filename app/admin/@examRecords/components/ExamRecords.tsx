"use client";
import { ExamTypeList } from "@/lib/prisma";
import {
  CheckCircle,
  CheckCircleOutline,
  CancelOutlined,
  RadioButtonUncheckedOutlined,
  Cancel,
} from "@mui/icons-material";
import { GridColDef, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  {
    field: "type",
    headerName: "Exam Type",
    type: "singleSelect",
    valueOptions: ExamTypeList,
  },
  {
    field: "isComplete",
    headerName: "Is Exam Completed?",
    type: "boolean",
    width: 200,
    renderCell(params) {
      return params.value ? (
        <CheckCircle className="fill-green-400" />
      ) : (
        <CancelOutlined className="fill-red-500" />
      );
    },
  },
];
export default function ExamRecords({ rows }: { rows: GridValidRowModel[] }) {
  return <DataGrid columns={columns} rows={rows} />;
}
