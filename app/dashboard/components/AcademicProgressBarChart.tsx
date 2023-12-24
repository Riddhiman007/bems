"use client";
import React from "react";

// charts
import BarChart from "@/components/Charts/BarChart";

import { axisClasses } from "@/components/Charts";

const dataset = [
  {
    exam_type: "Ist FA",
    english: 90,
    science: 99,
    mathematics: 100,
    computer: 96,
    hindi: 90,
    sst: 97,
  },
  {
    exam_type: "Ist SA",
    english: 90,
    science: 99,
    mathematics: 100,
    computer: 96,
    hindi: 90,
    sst: 97,
  },
  {
    exam_type: "IInd FA",
    english: 90,
    science: 99,
    mathematics: 100,
    computer: 96,
    hindi: 90,
    sst: 97,
  },
  {
    exam_type: "IInd SA",
    english: 90,
    science: 99,
    mathematics: 100,
    computer: 96,
    hindi: 90,
    sst: 97,
  },
];

export default function AcademicProgressBarChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "exam_type" }]}
      series={[
        {
          dataKey: "mathematics",
          label: "Mathematics",
          valueFormatter: (value) => value + "%",
        },
        {
          dataKey: "science",
          label: "Science",
          valueFormatter: (value) => value + "%",
        },
        {
          dataKey: "sst",
          label: "SST",
          valueFormatter: (value) => value + "%",
        },
        {
          dataKey: "english",
          label: "English",
          valueFormatter: (value) => value + "%",
        },
        {
          dataKey: "hindi",
          label: "Hindi",
          valueFormatter: (value) => value + "%",
        },
        {
          dataKey: "computer",
          label: "computer",
          valueFormatter: (value) => value + "%",
        },
      ]}
      yAxis={[
        {
          label: "percentage (mm)",
          max: 100,
        },
      ]}
      width={500}
      height={300}
      // sx={{
      //   [`.${axisClasses.left} .${axisClasses.label}`]: {
      //     transform: "translate(-20px, 0)",
      //   },
      // }}
    />
  );
}
