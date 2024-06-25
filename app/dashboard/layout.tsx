import { auth } from "@/_lib/auth";
import React from "react";
import Unauthenticated from "./_components/Unauthenticated";
export default async function DashboardLayout({
  children,
  student,
  teacher,
}: {
  children: React.ReactNode;
  student: React.ReactNode;
  teacher: React.ReactNode;
}): Promise<React.ReactNode> {
  const session = await auth();
  if (session?.user) {
    if (session.user.role === "Student") return student;
    if (session.user.role === "Teacher") return teacher;
  }
  return <Unauthenticated session={session} />;
}
