"use client";
import { allExamSubjects } from "@/lib/prisma";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { number } from "zod";

const cols: GridColDef[] = [
  { field: "fullname", headerName: "Full Name", width: 200, type: "string" },
];
export default function ClassRecord({ rows }: { rows: GridValidRowModel[] }) {
  const updatedColumns = useMemo<GridColDef[]>(() => {
    let updatedCol = [...cols];
    allExamSubjects.forEach((sub) => {
      updatedCol.push({ field: sub, headerName: sub, type: "number" });
    });

    updatedCol.push(
      { field: "totalMarks", type: "number", headerName: "Total Marks" },
      {
        field: "percentage",
        headerName: "Percentage",
        type: "number",
        valueFormatter(params) {
          return params.value + "%";
        },
      },
      {
        field: "rank",
        headerName: "Rank",
        type: "number",
        sortComparator: (v1, v2, cellParams1, cellParams2) => {
          if (v1 || v2) {
            return v2 - v1;
          }
        },
        valueFormatter(params) {
          if (params.value) {
            if (params.value === 1) return params.value + "st rank";
            else if (params.value === 2) return params.value + "nd rank";
            else if (params.value === 3) return params.value + "rd rank";
            else return params.value + "th rank";
          }
        },
        renderCell(params) {
          if (params.value) {
            return (
              <div
                className={`MuiDataGrid-cell MuiDataGrid-cell--textRight MuiDataGrid-withBorderColor ${
                  params.value === 1
                    ? "font-extrabold"
                    : params.value === 2
                      ? "font-bold"
                      : params.value === 3
                        ? "font-semibold"
                        : "font-normal"
                }`}
                role="cell"
                data-field="percentage"
                data-colindex="9"
                aria-colindextext="10"
                tabIndex={-1}
                aria-colspan={1}
                style={{
                  minWidth: 100 + "px",
                  maxWidth: 100 + "px",
                  minHeight: 52 + "px",
                  maxHeight: 52 + "px",
                }}
              >
                {params.formattedValue}
              </div>
            );
          }
        },
      },
    );
    return updatedCol;
  }, []);
  return <DataGrid columns={updatedColumns} rows={rows} />;
}
