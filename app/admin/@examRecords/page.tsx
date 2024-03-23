import {
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import styles from "../admin.module.css";
import { MotionMuiButton } from "@/components/Motion";
import Link from "next/link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ExamTypeList, fetchAllExams } from "@/lib/prisma";
import { CheckCircle } from "@mui/icons-material";
import { ExamRecords } from "./components";

export default async function ExamRecord() {
  let allExams = await fetchAllExams();
  return (
    <Card className={`${styles.examRecords} dark:bg-slate-900`}>
      <CardContent className="flex flex-col gap-7">
        <Typography variant="h4">Exam Records</Typography>
        {/* new record */}
        <div className=" flex flex-row ">
          <MotionMuiButton
            color="success"
            variant="contained"
            className="bg-green-700 px-4 py-2 text-green-50 hover:bg-green-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            LinkComponent={Link}
            href="/admin/examRecord/create"
          >
            Create New Record...
          </MotionMuiButton>
        </div>
        <div className="flex flex-col gap-4">
          <ExamRecords rows={allExams} />
        </div>
      </CardContent>
    </Card>
  );
}
