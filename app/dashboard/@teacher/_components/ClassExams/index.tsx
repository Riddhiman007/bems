"use client";

import { IClassStudentRow as IRow, IClassStudentCol as ICol } from "@/_utils/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { DeleteIcon, EditIcon, EyeIcon } from "@nextui-org/shared-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { ExamSubjectsList } from "@prisma/client";
import React, { Key, useCallback, useMemo } from "react";

const records: IRow[] = [
  {
    id: "dfasfsdf",
    fullname: "Riddhiman",
    percentage: 0,
    Computer: 0,
    English: 0,
    Hindi: 0,
    Marathi: 0,
    Mathematics: 0,
    Science: 0,
    SST: 0,
    total: 0,
  },
  {
    id: "dfasdfsdfsf",
    fullname: "Raj Biradar",
    percentage: 0,
    Computer: 0,
    English: 0,
    Hindi: 0,
    Marathi: 0,
    Mathematics: 0,
    Science: 0,
    SST: 0,
    total: 0,
  },
  {
    id: "dfasfsfs",
    fullname: "Kartiki Pathak",
    percentage: 0,
    Computer: 0,
    English: 0,
    Hindi: 0,
    Marathi: 0,
    Mathematics: 0,
    Science: 0,
    SST: 0,
    total: 0,
  },
  {
    id: "asfadfdsf",
    fullname: "Abhaypratap Chowdhury",
    percentage: 0,
    Computer: 0,
    English: 0,
    Hindi: 0,
    Marathi: 0,
    Mathematics: 0,
    Science: 0,
    SST: 0,
    total: 0,
  },
];
export default function ClassExams() {
  const columns: ICol[] = [{ id: "fullname", name: "Full Name" }];
  Object.keys(ExamSubjectsList).forEach((subject) =>
    columns.push({ id: subject, name: subject, align: "end" }),
  );
  columns.push(
    { id: "total", name: "Total", align: "end" },
    { id: "percentage", name: "Percentage", align: "end" },
    {
      id: "actions",
      name: "Actions",
    },
  );
  const renderCell = useCallback((row: IRow, key: Key) => {
    const cellValue = row[key as keyof IRow];
    switch (key) {
      case "percentage":
        return cellValue + "%";
      case "actions":
        return (
          <div className="flex flex-row">
            <Button
              isIconOnly
              variant="light"
              color="primary"
              size="sm"
              className="border-none"
            >
              <EyeIcon className="size-4 text-default-400" />
            </Button>

            <Button
              isIconOnly
              variant="light"
              color="primary"
              size="sm"
              className="border-none"
              // onPress={() => editStudent(student)}
            >
              <EditIcon className="size-4 text-default-400" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              color="danger"
              size="sm"
              className="border-none"
              // onPress={() => removeStudent(student)}
            >
              <DeleteIcon className="size-4 text-danger-400" />
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <Card>
        <CardHeader>Class Records for FA I</CardHeader>
        <CardBody>
          <ScrollShadow
            orientation="horizontal"
            overflowCheck="horizontal"
            size={60}
            hideScrollBar
          >
            <Table removeWrapper className="mr-6">
              <TableHeader columns={columns}>
                {({ id, name, align }) => (
                  <TableColumn align={align} key={id}>
                    {name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={records}>
                {(row) => (
                  <TableRow key={row.id}>
                    {(col) => (
                      <TableCell key={`${row.id}_${col}`}>
                        {renderCell(row, col)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ScrollShadow>
        </CardBody>
      </Card>
    </>
  );
}
