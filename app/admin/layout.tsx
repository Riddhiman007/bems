import { Container } from "@mui/material";
import React from "react";
import styles from "./admin.module.css";

export default function AdminLayout({
  children,
  students,
  examRecords,
}: {
  children: React.ReactNode;
  students: React.ReactNode;
  examRecords: React.ReactNode;
}) {
  return (
    <Container className="mt-24 flex flex-col gap-7" component="main">
      <div className="flex flex-row gap-4">
        {students}
        {children}
      </div>
      {examRecords}
    </Container>
  );
}
