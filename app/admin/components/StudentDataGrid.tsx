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
  GridValidRowModel,
  DataGridProps,
} from "@mui/x-data-grid";
import { Button, ButtonGroup, CircularProgress, Typography } from "@mui/material";
import React, { useMemo, useState, useCallback, useRef } from "react";
import { Add, Save } from "@mui/icons-material";
import { randomId } from "@mui/x-data-grid-generator";
import { allGrades } from "@/lib/prisma/helper";
import {
  Delete as DeleteIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { StudentDatagridEditToolBarProps, StudentRowModel, UnsavedChanges } from ".";
import { updateRow } from "./StudentDataGridBackend";
import { deleteStudent } from "@/lib/prisma";

const initialColumns: GridColDef[] = [
  {
    field: "fullname",
    type: "string",
    headerName: "Full name",
    resizable: true,
    editable: true,
    // cellClassName: "overflow-x-auto",
    width: 200,
  },
  {
    field: "father_name",
    headerName: "Father name",
    resizable: true,
    type: "string",
    editable: true,
    width: 200,
  },
  {
    field: "mother_name",
    headerName: "Mother name",
    type: "string",
    width: 200,
    resizable: true,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    resizable: true,
    type: "string",
    width: 200,
    editable: true,
  },

  {
    field: "caste",
    headerName: "Caste",
    type: "singleSelect",
    valueOptions: ["Gen", "SC", "ST", "OBC", "NT"],
    editable: true,
  },
  {
    field: "grade",
    headerName: "Grade",
    type: "singleSelect",
    valueOptions: allGrades,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    type: "singleSelect",
    valueOptions: ["Male", "Female"],
    editable: true,
  },
  {
    field: "contact",
    headerName: "Contact",
    type: "number",
    editable: true,
    valueParser: (value, params) => "" + value,
  },
  { field: "address", headerName: "Address", type: "text", width: 300, editable: true },
  { field: "isNew", headerName: "Is new student", type: "boolean", editable: true },
];

function EditToolbar({
  apiRef,
  isSaving,
  setRows,
  setRowModesModel,
  handleSaveAllClick,
  hasUnsavedRows,
  handleDiscardChanges,
  setHasUnsavedRows,
  unsavedChangesRef,
}: StudentDatagridEditToolBarProps) {
  const handleNewStudClick = () => {
    const id = randomId();
    const row: StudentRowModel = {
      id,
      fullname: "",
      fathername: "",
      address: "",
      caste: "Gen",
      email: "",
      father_name: "",
      gender: "Male",
      isNew: true,
      grade: "IX",
      mother_name: "",
      contact: "",
    };
    setRows((oldRows) => [...oldRows, row]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "fullname" },
    }));
    unsavedChangesRef.current.unsavedRows[id] = { ...row, _action: "edit" };
    if (!unsavedChangesRef.current.rowsBeforeChange[id]) {
      unsavedChangesRef.current.rowsBeforeChange[id] = row;
    }
    setHasUnsavedRows(true);
    apiRef.current.updateRows([row]);
  };

  return (
    <GridToolbarContainer className="flex flex-row justify-between">
      <ButtonGroup>
        <Button
          startIcon={!isSaving && <Save />}
          disabled={!hasUnsavedRows || isSaving}
          color="success"
          onClick={handleSaveAllClick}
          variant="contained"
          className="flex flex-row gap-2 bg-green-700 px-4 py-2 text-green-50 hover:bg-green-900 disabled:bg-green-900"
        >
          {isSaving && <CircularProgress size={20} className="text-green-50" />}
          <Typography>Save all</Typography>
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          disabled={!hasUnsavedRows || isSaving}
          onClick={handleDiscardChanges}
          color="error"
        >
          Discard
        </Button>
      </ButtonGroup>
      <Button startIcon={<Add />} onClick={handleNewStudClick}>
        Add student
      </Button>
    </GridToolbarContainer>
  );
}
export default function StudentDataGrid({
  initialRows,
}: {
  initialRows: StudentRowModel[];
}) {
  const [rows, setRows] = useState<StudentRowModel[]>(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const unsavedChangesRef = useRef<UnsavedChanges>({
    unsavedRows: {},
    rowsBeforeChange: {},
  });
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedRows, setHasUnsavedRows] = useState(false);

  const apiRef = useGridApiRef();

  // all event logic here
  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = useCallback(
    (id: GridRowId, row: StudentRowModel) => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
      unsavedChangesRef.current.unsavedRows[id] = {
        ...row,
        _action: "edit",
      };
      if (!unsavedChangesRef.current.rowsBeforeChange[id]) {
        unsavedChangesRef.current.rowsBeforeChange[id] = row;
      }
      setHasUnsavedRows(true);
      apiRef.current.updateRows([row]); // to trigger row render
    },
    [rowModesModel, apiRef],
  );

  const handleSaveClick = useCallback(
    (id: GridRowId) => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    },
    [rowModesModel],
  );

  const handleDeleteClick = useCallback((id: GridRowId, row: StudentRowModel) => {
    unsavedChangesRef.current.unsavedRows[id] = {
      ...row,
      _action: "delete",
    };
    if (!unsavedChangesRef.current.rowsBeforeChange[id]) {
      unsavedChangesRef.current.rowsBeforeChange[id] = row;
    }
    setHasUnsavedRows(true);
    // apiRef.current.updateRows([row]); // to trigger row render
  }, []);

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

  const handleDiscardChanges = useCallback(() => {
    setHasUnsavedRows(false);
    apiRef.current.updateRows(Object.values(unsavedChangesRef.current.rowsBeforeChange));
    unsavedChangesRef.current = { rowsBeforeChange: {}, unsavedRows: {} };
  }, [apiRef]);

  const handleSaveAllClick = useCallback(async () => {
    try {
      setIsSaving(true);
      // TODO: call process row update

      const rowsToSave = Object.values(unsavedChangesRef.current.unsavedRows).filter(
        (row) => row._action === "edit",
      );
      rowsToSave.map((row) => {
        setRowModesModel((lastRows) => ({
          ...lastRows,
          [row.id]: { mode: GridRowModes.View },
        }));
      });

      const rowsToDelete = Object.values(unsavedChangesRef.current.unsavedRows).filter(
        (row) => row._action === "delete",
      );
      rowsToDelete.map(async (row) => {
        const deletedStudent = await deleteStudent(row.email);
        setRows((lastRow) => lastRow.filter((val) => val.id !== row.id));
        console.log(deletedStudent);
      });

      setHasUnsavedRows(false);
      unsavedChangesRef.current = {
        rowsBeforeChange: {},
        unsavedRows: {},
      };

      setIsSaving(false);
    } catch (error) {
      setIsSaving(false);
    }
  }, []);
  const processRowUpdate: NonNullable<
    DataGridProps<StudentRowModel>["processRowUpdate"]
  > = async (newRow, oldRow) => {
    console.log(newRow, oldRow);

    const rowId = newRow.id;
    unsavedChangesRef.current.unsavedRows[rowId] = newRow;
    if (!unsavedChangesRef.current.rowsBeforeChange[rowId]) {
      unsavedChangesRef.current.rowsBeforeChange[rowId] = oldRow;
    }

    // backend work
    await updateRow(newRow, oldRow);
    setHasUnsavedRows(true);
    return newRow;
  };
  // memoizes the columns
  const columns = useMemo<GridColDef<StudentRowModel>[]>(
    () => [
      ...initialColumns,
      {
        field: "actions",
        type: "actions",
        width: 100,
        // cellClassName: "fixed",
        getActions({ id, row }) {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          if (isInEditMode) {
            return [
              <GridActionsCellItem
                key="save"
                icon={<SaveIcon />}
                label="Save"
                className="text-green-300"
                onClick={() => handleSaveClick(id)}
              />,
              <GridActionsCellItem
                key="cancel"
                icon={<CancelIcon />}
                label="Cancel"
                className="text-red-600"
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
              className=""
              onClick={() => handleEditClick(id, row)}
              color="inherit"
            />,
            <GridActionsCellItem
              key="delete"
              icon={<DeleteIcon />}
              label="Delete"
              className="text-red-600"
              onClick={() => handleDeleteClick(id, row)}
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
      rows={rows}
      rowModesModel={rowModesModel}
      editMode="row"
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={(e) => {
        console.log(e);
      }}
      slots={{ toolbar: EditToolbar }}
      slotProps={{
        toolbar: {
          apiRef,
          unsavedChangesRef,
          isSaving,
          handleSaveAllClick,
          hasUnsavedRows,
          handleDiscardChanges,
          setRows,
          setRowModesModel,
          setHasUnsavedRows,
        },
      }}
    />
  );
}
