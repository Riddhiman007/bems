import { GridRowsProp, GridRowModesModel, GridValidRowModel } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { Student } from "@prisma/client";
import React from "react";

export interface UnsavedChanges {
  unsavedRows: Record<GridRowId, StudentRowModel>;
  rowsBeforeChange: Record<GridRowId, StudentRowModel>;
}

export interface StudentRowModel extends Student, GridValidRowModel {
  [key: string]: any;
  [key: symbol]: any;
}
export interface StudentDatagridEditToolBarProps {
  apiRef: React.MutableRefObject<GridApiCommunity>;
  unsavedChangesRef: React.MutableRefObject<UnsavedChanges>;
  isSaving: boolean;
  hasUnsavedRows: boolean;
  handleSaveAllClick: () => void;
  handleDiscardChanges: () => void;
  setRows: (newRows: (oldRows: StudentRowModel[]) => StudentRowModel[]) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
  setHasUnsavedRows: React.Dispatch<React.SetStateAction<boolean>>;
}
