import React from "react";

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
    <main className="container mt-24 flex flex-col gap-7">
      <div className="flex flex-row gap-4">
        {students}
        {children}
      </div>
      {examRecords}
    </main>
  );
}
