"use client";
import { ErrorProps } from "@/errors";
import React from "react";

export default function CreatePostError({ error, reset }: ErrorProps) {
  return (
    <div>{process.env.NODE_ENV === "development" ? error.message : error.digest}</div>
  );
}
