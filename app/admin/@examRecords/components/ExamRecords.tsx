"use client";
import { fetchAllExams } from "@/_lib/prisma";
import { TableCell } from "@mui/material";
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
