import { auth } from "@/_lib/auth";
import { UnauthenticatedError } from "@/errors";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { AcademicCapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { User } from "@nextui-org/user";
import React from "react";
import { Email, LocationCity } from "@mui/icons-material";
import { getTeacher } from "@/_lib/prisma";
import dynamic from "next/dynamic";
import ClassExams from "./_components/ClassExams";

export default async function TeacherDashboard() {
  const session = await auth();
  if (!session?.user) throw new UnauthenticatedError();
  const user = session.user;
  const teacher = await getTeacher(user.id || "", "Teacher");
  return (
    <div className="container flex flex-col gap-4">
      <Card>
        <CardBody className="justify-start">
          <User
            classNames={{
              name: "text-xl font-bold",
            }}
            name={user.fullname}
            className="justify-start"
            avatarProps={{ size: "lg" }}
            description={
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-row gap-1.5">
                  <PhoneIcon className="size-4" />
                  <p className="m-0">{user.contact}</p>
                </div>
                <div className="flex flex-row gap-1.5">
                  <LocationCity className="size-4 fill-foreground-400" />
                  <p className="m-0">{user.address}</p>
                </div>
                <div className="flex flex-row gap-1.5">
                  <AcademicCapIcon className="size-4" />
                  <p className="m-0">{teacher?.class?.grade}</p>
                </div>
                <div className="flex flex-row gap-1.5">
                  <Email className="size-4 fill-foreground-400" />
                  <p className="m-0">{user.email}</p>
                </div>
              </div>
            }
          />
        </CardBody>
      </Card>
      <ClassExams />
    </div>
  );
}
