import { DataType } from "@/components/Tables";
import { DefaultRowType } from "@/components/Tables";
import { Caste, Gender, GradeType } from "@prisma/client";

export { default as StudentTable } from "./StudentTable";

export interface ColumnType {
  key: string;
  label: string;
  // type: DataType;
}

export interface StudentRowType extends DefaultRowType {
  key: string;
  fullname: string;
  father_name: string;
  mother_name: string;
  email: string;
  address: string;
  contact: string;
  isNew: boolean;
  grade: GradeType;
  caste: Caste;
  gender: Gender;
}

