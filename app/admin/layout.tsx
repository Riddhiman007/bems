import React from "react";

interface Props {
  children: React.ReactNode;
  students: React.ReactNode;
  examRecords: React.ReactNode;
}

export default function AdminLayout({ children, students, examRecords }: Props) {
  return (
    <main className="container mt-24 flex flex-col gap-7">
      {students}
      {examRecords}
    </main>
  );
}
