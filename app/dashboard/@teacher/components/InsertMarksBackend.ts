import { updateRecord } from "@/lib/prisma";
import { StudentRow } from ".";
import { ExamType } from "@prisma/client";

export async function processRowUpdate(
  newRow: StudentRow,
  oldRow: StudentRow,
  examType: ExamType,
) {
  let k = Object.keys(newRow);
  let t = k.filter((val) => val !== "id");
  t = t.filter((val) => val !== "name");
  console.log(t);
  let subs = {};
  t.forEach((val) => {
    subs[val] = newRow[val];
  });
  console.log(subs);

  console.log(oldRow, newRow);
  await updateRecord(examType, newRow.id, subs);
  return newRow;
}
