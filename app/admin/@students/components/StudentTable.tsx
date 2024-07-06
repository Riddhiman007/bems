"use client";
import { StudentFields, StudentFieldsWithId, deleteStudent } from "@/_lib/prisma";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import bravesIcon from "@/other-favicon.ico";
import { Spinner } from "@nextui-org/spinner";
import { User } from "@nextui-org/user";

import React, { Key, useCallback, useMemo, useRef, useState } from "react";
import { ColumnType, StudentRowType } from ".";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { DeleteIcon, EditIcon, EyeIcon, SearchIcon } from "@nextui-org/shared-icons";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import dynamic from "next/dynamic";
import { EditStudentLoadingState } from "@/_components/EditStudent";
import { createPortal } from "react-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
const EditStudent = dynamic(
  () => import("@/_components/EditStudent").then((mod) => mod.EditStudent),
  {
    ssr: false,
    loading: ({ isLoading }) => (isLoading ? <EditStudentLoadingState /> : null),
  },
);

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

  const studentToBeEdited = useRef<StudentFieldsWithId>();
  const studentToBeDeleted = useRef<{ email: string; fullname: string }>();
  const router = useRouter();
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
  const deleteModal = useDisclosure({
    onClose() {
      studentToBeDeleted.current = undefined;
    },
  });
  const [isStudentDeleting, setIsStudentDeleting] = useState(false);
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
    key,
    mother_name,
  }: StudentRowType) => {
    studentToBeEdited.current = {
      id: key,
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
  const removeStudent = ({ email, fullname }: StudentRowType) => {
    studentToBeDeleted.current = { email, fullname };
    deleteModal.onOpen();
  };
  const handleDeleteStudent = () => {
    setIsStudentDeleting(true);
    deleteStudent(studentToBeDeleted.current?.email || "").finally(() => {
      setIsStudentDeleting(false);
      deleteModal.onClose();
      router.refresh();
    });
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
      case "isNew":
        return student.isNew ? (
          <XCircleIcon className="size-6 bg-danger-500" />
        ) : (
          <XCircleIcon />
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
            startContent={<SearchIcon className="size-6" />}
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
        <ScrollShadow
          orientation="horizontal"
          overflowCheck="horizontal"
          size={60}
          hideScrollBar
        >
          <Table
            removeWrapper
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
            className="mr-8"
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
        </ScrollShadow>
      </div>

      {createPortal(
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
        >
          <ModalContent key="editStudent">
            {(onClose) => (
              <>
                <ModalHeader>Edit Student</ModalHeader>
                <ModalBody>
                  <EditStudent
                    onClose={onClose}
                    id={studentToBeEdited.current ? studentToBeEdited.current.id : ""}
                    defaultValues={studentToBeEdited.current}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>,
        document.body,
      )}
      {createPortal(
        <Modal
          scrollBehavior="outside"
          classNames={{ base: "mt-4" }}
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.onClose}
          onOpenChange={deleteModal.onOpenChange}
          placement="top-center"
          isDismissable
          isKeyboardDismissDisabled={true}
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Delete student</ModalHeader>
                <ModalBody className="flex flex-col">
                  <p>
                    Are you sure you want to delete{" "}
                    {studentToBeDeleted.current?.fullname || ""}?
                  </p>
                  <div className="flex flex-row justify-between ">
                    <Button variant="bordered" color="danger" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="solid"
                      color="danger"
                      className="border-danger-300 bg-danger-400"
                      onPress={handleDeleteStudent}
                    >
                      Delete
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>,
        document.body,
      )}
    </>
  );
}
