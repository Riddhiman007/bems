import { GridValidRowModel } from "@mui/x-data-grid";

export { default as ClassRecord } from "./ClassRecord";
export { default as InsertMarks } from "./InsertMarks";
export interface StudentRow extends GridValidRowModel {
  id: string;
  name: string;
}
