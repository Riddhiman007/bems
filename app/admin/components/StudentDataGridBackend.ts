"use server";

import { DataGridProps } from "@mui/x-data-grid";
import { StudentRowModel } from ".";
import { updateStudent } from "@/lib/prisma";

export const updateRow: NonNullable<
  DataGridProps<StudentRowModel>["processRowUpdate"]
  > = async (newRow, oldRow) => {
  const {_action, ...oldRowRows} = oldRow
  const {_action:t, ...newRowRows} = newRow
  const student = await updateStudent(oldRowRows, newRowRows);
  console.log(student);

  return student as StudentRowModel;
};
