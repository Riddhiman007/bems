import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function LoadingState() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-16 w-full" />
      <div className="flex flex-col gap-6">
        <Skeleton className="m-6 h-10 w-[-webkit-fill-available] rounded-medium" />

        <Skeleton className="m-6 h-10 w-[-webkit-fill-available] rounded-medium" />

        <Skeleton className="m-6 h-10 w-[-webkit-fill-available] rounded-medium" />

        <div className="flex flex-row gap-2">
          <Skeleton className="m-6 h-10 w-[-webkit-fill-available] rounded-medium" />

          <Skeleton className="m-6 h-10 w-[-webkit-fill-available] rounded-medium" />
        </div>
        <div className="flex flex-row justify-between">
          <Skeleton className="h-11 w-2.5 rounded-medium" />
          <Skeleton className="h-11 w-2.5 rounded-medium" />
        </div>
      </div>
    </div>
  );
}
