import React from "react";

import { Card, CardContent } from "@mui/material";

import styles from "./admin.module.css";
export default async function Admin() {
  return (
    <Card className={`${styles.admin} dark:bg-slate-900`}>
      <CardContent className="w-full">
        {/* <StudentDataGrid initialRows={students} /> */}
        hello
      </CardContent>
    </Card>
  );
}
