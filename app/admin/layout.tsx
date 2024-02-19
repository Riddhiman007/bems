import { Container } from "@mui/material";
import React from "react";
import styles from "./admin.module.css";

export default function AdminLayout({
  children,
  students,
}: {
  children: React.ReactNode;
  students: React.ReactNode;
}) {
  return (
    <Container className={styles.main} component="main">
      {students}
      {children}
    </Container>
  );
}
