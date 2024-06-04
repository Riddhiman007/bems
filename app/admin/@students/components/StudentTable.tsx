"use client";
import {
  StudentFields,
  allCastes,
  allGrades,
  deleteStudent,
  fetchAllStudents,
} from "@/lib/prisma";
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
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { EditStudent } from "@/components/EditStudent";

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
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "fullname",
    direction: "ascending",
  });
  const {
    isOpen,
    onOpenChange,
    onOpen: modalOpen,
    onClose,
  } = useDisclosure({
    onClose() {
      studentToBeEdited.current = undefined;
    },
  });
  const studentToBeEdited = useRef<StudentFields>();
  const router = useRouter();

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

  const editStudent = ({
    address,
    caste,
    contact,
    email,
    father_name,
    fullname,
    gender,
    grade,
    isNew,

    mother_name,
  }: StudentRowType) => {
    studentToBeEdited.current = {
      address,
      contact,
      email,
      father_name,
      fullname,
      gender,
      grade,
      isNew,
      mother_name,
      caste,
    };
    console.log(studentToBeEdited.current);

    modalOpen();
    // studentToBeEdited.current = undefined;
  };
  const removeStudent = async (student: StudentRowType) => {
    setStudents(students.filter((stud) => stud.key !== student.id));
    let deletedStud = await deleteStudent(student.email);
    console.log(deletedStud);

    console.log(students);
  };
  const renderCell = (student: StudentRowType, key: Key): React.ReactNode => {
    const cellValue = student[key as keyof StudentRowType];

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
              onPress={() => editStudent(student)}
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
          </div>
        );
      default:
        return cellValue;
    }
  };
  //   [studentRowModesModel, students],
  // );

  return (
    <>
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
            <Button
              variant="light"
              color="primary"
              size="md"
              className="border-none"
              onPress={() => router.push("/enroll")}
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

      <Modal
        scrollBehavior="outside"
        classNames={{ base: "mt-4" }}
        // closeButton={<button hidden></button>}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        placement="top-center"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },

            exit: {
              y: -300,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent key="editStudent">
          {(onClose) => (
            <>
              <ModalHeader>Edit Student</ModalHeader>
              <ModalBody>
                <EditStudent
                  onClose={onClose}
                  email={studentToBeEdited.current ? studentToBeEdited.current.email : ""}
                  defaultValues={studentToBeEdited.current}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
