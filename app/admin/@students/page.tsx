import React from "react";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";
import { fetchAllStudents } from "@/_lib/prisma";

export const revalidate = 120;
const StudentTable = dynamic(
  () => import("./components").then((mod) => mod.StudentTable),
  {
    ssr: false,
    loading({ isLoading, error, retry }) {
      if (error)
        return (
          <div className="flex gap-2">
            <p>Failed to load student&apos;s record due to {error.message}</p>
            <Button size="sm" variant="light" color="danger" onClick={retry}>
              Retry
            </Button>
          </div>
        );
      return <Spinner>Loading...</Spinner>;
    },
  },
);

export default async function Student() {
  const students = await fetchAllStudents();
  return (
    <Card className="bg-content1">
      <CardHeader as="h4">Students</CardHeader>
      <CardBody className="flex flex-col gap-3 overflow-hidden">
        <StudentTable initialStudents={students} />
      </CardBody>
    </Card>
  );
}
