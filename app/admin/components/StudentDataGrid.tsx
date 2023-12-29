"use client";
import {
  useGridApiRef,
  DataGrid,
  GridColDef,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer,
  GridRowModes,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Add } from "@mui/icons-material";
import { randomId } from "@mui/x-data-grid-generator";
import { allGrades } from "@/lib/prisma/helper";

interface RowDefinition {
  id: string;
  fullname: string;
  fathername: string;
}

const initialColumns: GridColDef[] = [
  {
    field: "fullname",
    type: "string",
    headerName: "Full name",
    flex: 3,
    editable: true,
  },
  {
    field: "fathername",
    headerName: "Father name",
    type: "string",
    flex: 3,
    editable: true,
  },
  {
    field: "mothername",
    headerName: "Mother name",
    type: "string",
    flex: 3,
    editable: true,
  },
  {
    field: "caste",
    headerName: "Caste",
    type: "string",
    flex: 2,
    editable: true,
  },
  {
    field: "grade",
    headerName: "Grade",
    type: "singleSelect",
    valueOptions: allGrades,
  },
];
const initialRows: RowDefinition[] = [
  {
    id: "3",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "3",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "3",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "3",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
];

interface EditToolBarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}
function EditToolbar({ setRows, setRowModesModel }: EditToolBarProps) {
  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, fullname: "", fathername: "", grade: "I" }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "fullname" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button startIcon={<Add />} onClick={handleClick}>
        Add student
      </Button>
    </GridToolbarContainer>
  );
}
export default function StudentDataGrid() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const apiRef = useGridApiRef();

  const processRowUpdate = (newRow: any, oldRow: any) => {};
  // memoizes the columns
  const columns = useMemo<GridColDef[]>(() => [...initialColumns], []);

  return (
    <DataGrid
      apiRef={apiRef}
      columns={columns}
      rows={rows}
      rowModesModel={rowModesModel}
      editMode="row"
      slots={{ toolbar: EditToolbar }}
      slotProps={{ toolbar: { setRows, setRowModesModel } }}
    />
  );
}
