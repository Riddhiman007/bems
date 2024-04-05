import React from "react";
import { fetchAllStudents } from "@/lib/prisma";

import { Card, CardBody } from "@nextui-org/card";

import dynamic from "next/dynamic";
const StudentTable = dynamic(
  () => import("./components").then((mod) => mod.StudentTable),
  {
    ssr: true,
  },
);

export default async function Student() {
  const students = await fetchAllStudents();
  return (
    <Card className="bg-content1">
      <CardBody className="flex flex-col gap-3">
        <h4 className="ml-1 text-2xl">Students</h4>
        <StudentTable />
      </CardBody>
    </Card>
  );
}
