import { auth } from "@/lib/auth";
import React from "react";

export default async function Dashboard() {
  const session = await auth();
  console.log(session);

  return <div>Dashboard</div>;
}
