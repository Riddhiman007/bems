"use client";
import { ExamTypeList, fetchAllExams } from "@/lib/prisma";
import {
  CheckCircle,
  CheckCircleOutline,
  CancelOutlined,
  RadioButtonUncheckedOutlined,
  Cancel,
} from "@mui/icons-material";
import { TableCell } from "@mui/material";
import { GridColDef, GridRowModel, GridValidRowModel } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import { useAsyncList } from "@react-stately/data";
import React from "react";


export default function ExamRecords() {
  const examRecords = useAsyncList({
    async load() {
      const records = await fetchAllExams();
      return {
        items: records,
      };
    },
  });
  return (
    <Table>
      <TableHeader>
        <TableColumn key="type">Exam Type</TableColumn>
        <TableColumn key="isComplete">Is Exam Completed?</TableColumn>
      </TableHeader>
      <TableBody items={examRecords.items}>
        {(item) => (
          <TableRow>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
