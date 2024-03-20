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
import { $Enums } from "@prisma/client";
import { ExamTypeList, allGrades } from "@/lib/prisma";
import MotionMuiButton from "@/components/Motion/MotionMuiButton";
import { CreateExam } from "./components";

export default function ExamRecord() {
  return (
    <Card className={`${styles.examRecords} dark:bg-slate-900`}>
      <CardContent className="flex flex-col gap-7">
        <Typography variant="h4">Exam Records</Typography>
        {/* new record */}
        <CreateExam />
      </CardContent>
    </Card>
  );
}
