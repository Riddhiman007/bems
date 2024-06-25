"use client"
export interface DefaultRowType {
  [key: string]: any;
  [key: symbol]: any;
}
export type DataType = "string" | "number" | "boolean";
export type TableMode = "edit"|"delete"
export interface TableRowModesModel{
  [key:string]: {mode:TableMode, ignoreModifications?:boolean};
}

export  interface UnsavedChanges<T> {
    unsavedChanges: {
      [key: string]: T;
    };
    rowsBeforeChange: {
      [key: string]: T;
    };
  }
export * from "@nextui-org/table";