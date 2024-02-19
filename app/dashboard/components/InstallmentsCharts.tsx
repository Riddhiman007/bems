"use client";
import { PieChart, PieValueType } from "@mui/x-charts";
import React from "react";

export default function InstallMentsCharts() {
  const SchoolFee: PieValueType[] = [
    { id: "paid", value: 300, label: "Paid", color: "green" },
    { id: "paid", value: 300, label: "Due", color: "red" },
  ];
  const TransportFee: PieValueType[] = [
    { id: "paid", value: 300, label: "Paid", color: "green" },
  ];
  return (
    <>
      <PieChart
        series={[
          {
            data: SchoolFee,
            innerRadius: 70,
            highlightScope: { faded: "global", highlighted: "item" },
            highlighted: { additionalRadius: 5 },
            faded: { additionalRadius: -3 },
          },
          {
            data: TransportFee,
            outerRadius: 70,
            highlightScope: { faded: "global", highlighted: "item" },
            highlighted: { additionalRadius: 5 },
            faded: { additionalRadius: -3 },
          },
        ]}
        height={400}
        width={400}
        className="self-center justify-self-center align-middle "
        skipAnimation
        disableAxisListener
        slotProps={{
          legend: {
            direction: "row",
            position: { horizontal: "middle", vertical: "top" },
          },
        }}
      />
    </>
  );
}
