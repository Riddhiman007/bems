"use client";
import { allGrades, fetchAllStudents } from "@/lib/prisma";
import { useAsyncList } from "@react-stately/data";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { User } from "@nextui-org/user";

import React, { Key, useState } from "react";
import { ColumnType, StudentRowType } from ".";
import { DataType } from "@/components/Tables";

const initialColumns: ColumnType[] = [
  { key: "fullname", label: "FULL NAME", type: "string" },
  { key: "father_name", label: "FATHER NAME", type: "string" },
  { key: "mother_name", label: "MOTHER NAME", type: "string" },
  { key: "email", label: "EMAIL", type: "string" },
  { key: "caste", label: "CASTE", type: "string" },
  { key: "grade", label: "GRADE", type: "string" },
  { key: "gender", label: "GENDER", type: "string" },
  { key: "contact", label: "CONTACT", type: "string" },
  { key: "address", label: "ADDRESS", type: "string" },
  { key: "isNew", label: "IS NEW STUDENT", type: "boolean" },
];

export default function StudentTable() {
  const renderCell = (student: StudentRowType, key: Key): React.ReactNode => {
    switch (key) {
      case "fullname":
        return <User name={student.fullname} />;

      default:
        return student[key];
    }
  };
  let list = useAsyncList<StudentRowType>({
    async load({}) {
      let studs = await fetchAllStudents();
      return { items: studs };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          let first = a[sortDescriptor.column];
          // @ts-ignore
          let second = b[sortDescriptor.column];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });
  return (
    <Table removeWrapper sortDescriptor={list.sortDescriptor} onSortChange={list.sort}>
      <TableHeader columns={initialColumns}>
        {({ key, label }) => (
          <TableColumn
            key={key}
            allowsSorting
            allowsResizing
            className="text-content3-foreground"
          >
            {label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={list.items}
        isLoading={list.isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
