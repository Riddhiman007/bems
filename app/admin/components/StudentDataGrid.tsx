"use client";
import {
  useGridApiRef,
  DataGrid,
  GridColDef,
  GridRowModesModel,
  GridRowsProp,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowModes,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import React, { useMemo, useState, useCallback } from "react";
import { Add } from "@mui/icons-material";
import { randomId } from "@mui/x-data-grid-generator";
import { allGrades } from "@/lib/prisma/helper";
import {
  Delete as DeleteIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from "@mui/icons-material";

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
    cellClassName: "overflow-x-auto",
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
    field: "email",
    headerName: "Email",
    type: "string",
    flex: 2,
    editable: true,
  },
  {
    field: "username",
    headerName: "Username",
    type: "string",
    // flex: 2,
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
const initialRows: GridRowsProp = [
  {
    id: "1",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "2",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "3",
    fullname: "Riddhiman Chowdhury",
    fathername: "Rudranarayan chowdhury",
  },
  {
    id: "4",
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

  // all event logic here
  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = useCallback(
    (id: GridRowId) => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    },
    [rowModesModel],
  );

  const handleSaveClick = useCallback(
    (id: GridRowId) => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    },
    [rowModesModel],
  );

  const handleDeleteClick = useCallback(
    (id: GridRowId) => {
      setRows(rows.filter((row) => row.id !== id));
    },
    [rows],
  );

  const handleCancelClick = useCallback(
    (id: GridRowId) => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });

      const editedRow = rows.find((row) => row.id === id);
      if (editedRow!.isNew) {
        setRows(rows.filter((row) => row.id !== id));
      }
    },
    [rows, rowModesModel],
  );
  const processRowUpdate = (newRow: any, oldRow: any) => {
    console.log(newRow, oldRow);
  };
  // memoizes the columns
  const columns = useMemo<GridColDef[]>(
    () => [
      ...initialColumns,
      {
        field: "actions",
        type: "actions",
        width: 100,
        getActions({ id }) {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          if (isInEditMode) {
            return [
              <GridActionsCellItem
                key="save"
                icon={<SaveIcon />}
                label="Save"
                sx={{
                  color: "primary.main",
                }}
                onClick={() => handleSaveClick(id)}
              />,
              <GridActionsCellItem
                key="cancel"
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={() => handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }

          return [
            <GridActionsCellItem
              key="edit"
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={() => handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              key="delete"
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => handleDeleteClick(id)}
              color="inherit"
            />,
          ];
        },
      },
    ],
    [
      rowModesModel,
      handleCancelClick,
      handleDeleteClick,
      handleEditClick,
      handleSaveClick,
    ],
  );

  return (
    <DataGrid
      apiRef={apiRef}
      columns={columns}
      className="overflow-x-auto"
      rows={rows}
      rowModesModel={rowModesModel}
      editMode="row"
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={(e) => {
        console.log(e);
      }}
      slots={{ toolbar: EditToolbar }}
      slotProps={{ toolbar: { setRows, setRowModesModel } }}
    />
  );
}
