"use server";

import { DataGridProps } from "@mui/x-data-grid";
import { StudentRowModel } from ".";
import { createNewStudent, updateStudent } from "@/lib/prisma";

export const updateRow: NonNullable<
  DataGridProps<StudentRowModel>["processRowUpdate"]
> = async (newRow, oldRow) => {
  const { _action, ...newRowRows } = newRow;
  let student;
  if (oldRow.email === "") {
    student = await createNewStudent(newRowRows);
  } else {
    student = await updateStudent(oldRow.email, newRowRows);
  }

  console.log(student);

  return student as StudentRowModel;
};
