"use client";
import { allCastes, allGrades, deleteStudent, fetchAllStudents } from "@/lib/prisma";
import { useAsyncList } from "@react-stately/data";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";

import bravesIcon from "@/other-favicon.ico";
import { Spinner } from "@nextui-org/spinner";
import { User } from "@nextui-org/user";

import React, { Key, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ColumnType, StudentRowType } from ".";
import { DataType, TableRowModesModel, UnsavedChanges } from "@/components/Tables";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { DeleteOutline, EditOutlined, Search } from "@mui/icons-material";
import { DeleteIcon, EditIcon, EyeIcon } from "@/components/Icons";
import { Select, SelectItem } from "@nextui-org/select";

const initialColumns: ColumnType[] = [
  { key: "fullname", label: "FULL NAME" },
  { key: "father_name", label: "FATHER NAME" },
  { key: "mother_name", label: "MOTHER NAME" },
  { key: "caste", label: "CASTE" },
  { key: "grade", label: "GRADE" },
  { key: "gender", label: "GENDER" },
  { key: "contact", label: "CONTACT" },
  { key: "address", label: "ADDRESS" },
  { key: "isNew", label: "IS NEW STUDENT" },
  { key: "actions", label: "ACTIONS" },
];

export default function StudentTable({
  initialStudents,
}: {
  initialStudents: StudentRowType[];
}) {
  const [students, setStudents] = useState(initialStudents);
  const [studentRowModesModel, setStudentRowModesModel] = useState<TableRowModesModel>(
    {},
  );
  const [isSaving, setIsSaving] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "fullname",
    direction: "ascending",
  });

  const unsavedChangesRef = useRef<UnsavedChanges<StudentRowType>>({
    rowsBeforeChange: {},
    unsavedChanges: {},
  });

  const addStudent = useCallback(() => {
    const newRandomId = crypto.randomUUID();
    const newStudent: StudentRowType = {
      address: "",
      caste: "Gen",
      contact: "",
      email: "",
      father_name: "",
      mother_name: "",
      fullname: "",
      gender: "Male",
      grade: "I",
      isNew: true,
      key: newRandomId,
    };
    setStudentRowModesModel((studentRowModesModel) => ({
      ...studentRowModesModel,
      [newStudent.key]: { mode: "edit" },
    }));
    setStudents((students) => [...students, newStudent]);
    unsavedChangesRef.current.unsavedChanges[newStudent.key] = newStudent;
    if (!unsavedChangesRef.current.rowsBeforeChange[newStudent.key])
      unsavedChangesRef.current.rowsBeforeChange[newStudent.key] = newStudent;
  }, []);
  const filterStudents = useCallback(
    (input: string) => {
      setStudents(
        initialStudents.filter(
          (stud) =>
            stud.fullname.toLowerCase().includes(input.toLowerCase()) ||
            stud.father_name.toLowerCase().includes(input.toLowerCase()) ||
            stud.mother_name.toLowerCase().includes(input.toLowerCase()) ||
            stud.address.toLowerCase().includes(input.toLowerCase()) ||
            stud.contact.toLowerCase().includes(input.toLowerCase()) ||
            stud.email.toLowerCase().includes(input.toLowerCase()) ||
            stud.gender.toLowerCase().includes(input.toLowerCase()) ||
            stud.grade.toLowerCase().includes(input.toLowerCase()),
        ),
      );
      if (input === "") setStudents(initialStudents);
    },
    [initialStudents],
  );
  const sortStudents = useMemo(() => {
    let sortedStudents = students.sort((a, b) => {
      // @ts-ignore
      let firstCol = a[sortDescriptor.column];
      // @ts-ignore
      let secondCol = b[sortDescriptor.column];
      let c =
        (parseInt(firstCol) || firstCol) < (parseInt(secondCol) || secondCol) ? -1 : 1;
      if (sortDescriptor.direction === "descending") c *= -1;
      return c;
    });
    return sortedStudents;
  }, [sortDescriptor, students]);

  const editStudent = useCallback((stud: StudentRowType) => {
    setStudentRowModesModel((studentRowModesModel) => {
      studentRowModesModel[stud.key] = { mode: "edit" };
      return studentRowModesModel;
    });
  }, []);

  const removeStudent = useCallback(async (student: StudentRowType) => {
    let deletedStud = await deleteStudent(student.email);
    console.log(deletedStud);
    setStudents((studs) => studs.filter((stud) => stud.key !== student.id));
  }, []);
  const renderCell = (student: StudentRowType, key: Key): React.ReactNode => {
    const cellValue = student[key as keyof StudentRowType];
    console.log(studentRowModesModel);

    if (
      studentRowModesModel[student.key] &&
      studentRowModesModel[student.key].mode === "edit"
    ) {
      switch (key) {
        case "fullname":
          return (
            <User
              avatarProps={{ src: bravesIcon.src }}
              name={
                <Input
                  classNames={{ input: "border-none" }}
                  size="sm"
                  variant="underlined"
                  label="Full name"
                  placeholder="Enter name of new student"
                />
              }
              description={
                <Input
                  classNames={{ input: "border-none" }}
                  size="sm"
                  variant="underlined"
                  label="Email"
                  placeholder="Enter email of new student"
                />
              }
            />
          );
        case "father_name":
          return (
            <Input
              classNames={{ input: "border-none" }}
              size="sm"
              variant="underlined"
              label="Father name"
              placeholder="Enter father's name of new student"
            />
          );
        case "mother_name":
          return (
            <Input
              classNames={{ input: "border-none" }}
              size="sm"
              variant="underlined"
              label="Mother name"
              placeholder="Enter mother's name of new student"
            />
          );
        case "contact":
          return (
            <Input
              classNames={{ input: "border-none" }}
              size="sm"
              variant="underlined"
              label="Contact"
              type="tel"
              placeholder="Enter contact name of new student"
            />
          );
        case "mother_name":
          return (
            <Input
              classNames={{ input: "border-none" }}
              size="sm"
              variant="underlined"
              label="Mother name"
              placeholder="Enter mother's name of new student"
            />
          );
        case "caste":
          return (
            <Select variant="underlined" size="sm">
              {allCastes.map((caste) => (
                <SelectItem key={caste} value={caste}>
                  {caste}
                </SelectItem>
              ))}
            </Select>
          );
        case "grade":
          return (
            <Select variant="underlined" size="sm">
              {allGrades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  {grade}
                </SelectItem>
              ))}
            </Select>
          );
        case "gender":
          return (
            <Select variant="underlined" size="sm">
              {["Male", "Female"].map((gender) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </Select>
          );
        case "isNew":
          return <Checkbox value="isNew" />;
        default:
          return cellValue;
      }
    }
    switch (key) {
      case "fullname":
        return (
          <User
            name={cellValue}
            avatarProps={{ src: bravesIcon.src }}
            description={student.email}
          />
        );
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
              onPress={() => {
                editStudent(student);
                console.log(studentRowModesModel);
                console.log(student.key);
              }}
            >
              <EditIcon className="size-4 text-default-400" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              color="danger"
              size="sm"
              className="border-none"
              onPress={() => removeStudent(student)}
            >
              <DeleteIcon className="size-4 text-danger-400" />
            </Button>
            {/* <Button isIconOnly><DeleteOutline className="size-6 fill-danger-400"/></Button> */}
          </div>
        );
      default:
        return cellValue;
    }
  };
  //   [studentRowModesModel, students],
  // );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-14">
        <Input
          variant="flat"
          startContent={<Search className="size-6 fill-content4-foreground" />}
          className="w-1/3"
          classNames={{
            input: "border-none",
          }}
          placeholder="Type here to search"
          onValueChange={filterStudents}
        />
        <div className="flex flex-row justify-between gap-4">
          <ButtonGroup
            isDisabled={
              isSaving ||
              Object.keys(unsavedChangesRef.current.unsavedChanges).length === 0
            }
          >
            <Button
              variant="ghost"
              size="md"
              className="bg-success-200 text-success-700"
              color="success"
            >
              Save all...
            </Button>
            <Button variant="ghost" size="md" color="danger">
              Discard all...
            </Button>
          </ButtonGroup>
          <Button
            variant="light"
            color="primary"
            size="md"
            className="border-none"
            onPress={addStudent}
          >
            Add student
          </Button>
        </div>
      </div>

      <Table
        removeWrapper
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={initialColumns}>
          {(col) => (
            <TableColumn
              defaultWidth={200}
              width={400}
              key={col.key}
              allowsSorting
              allowsResizing
            >
              {col.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"Sorry, no student record found."}
          loadingContent={<Spinner>Loading...</Spinner>}
          items={sortStudents}
        >
          {(row) => (
            <TableRow key={row.key}>
              {(col) => (
                <TableCell key={`${row.key}${col}`}>{renderCell(row, col)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
