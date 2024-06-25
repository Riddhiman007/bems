"use client";
import React from "react";

// charts
import { BarChart, BarElement } from "@mui/x-charts/BarChart";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useIsMobile } from "@nextui-org/use-is-mobile";

import { axisClasses } from "@/_components/Charts";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import CardBackgroundForLightMode from "@/_components/ui/CardBackgroundForLightMode";

const examDataset = [
  {
    exam_type: "IInd SA",
    percentage: 97,
  },
  { exam_type: "IInd FA", percentage: 93 },
  { exam_type: "Ist SA", percentage: 90 },
  { exam_type: "Ist FA", percentage: 96 },
];
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
  const isMobile = useIsMobile();
  return (
    <>
      <Card className="shadow-xl shadow-gray-400 dark:bg-slate-900 dark:shadow dark:shadow-black">
        <CardBackgroundForLightMode />
        <CardContent>
          <div className="flex flex-row justify-center overflow-y-auto">
            <BarChart
              dataset={dataset}
              xAxis={
                !isMobile
                  ? [{ scaleType: "band", dataKey: "exam_type", id: "exam_type" }]
                  : undefined
              }
              layout={isMobile ? "horizontal" : "vertical"}
              series={[
                {
                  dataKey: "mathematics",
                  label: "Mathematics",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
                {
                  dataKey: "science",
                  label: "Science",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
                {
                  dataKey: "sst",
                  label: "SST",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
                {
                  dataKey: "english",
                  label: "English",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
                {
                  dataKey: "hindi",
                  label: "Hindi",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
                {
                  dataKey: "computer",
                  label: "Computer",
                  valueFormatter: (value) => value + "%",
                  highlightScope: { faded: "global", highlighted: "item" },
                },
              ]}
              yAxis={[
                {
                  label: !isMobile ? "percentage" : undefined,
                  max: 100,
                  scaleType: isMobile ? "band" : undefined,
                  dataKey: isMobile ? "exam_type" : undefined,
                  id: "exam_type",
                },
              ]}
              height={400}
              slotProps={{
                legend: {
                  drawingArea: {
                    height: 600,
                    width: isMobile ? 400 : 600,
                    bottom: 400,
                    top: 400,
                    left: 0,
                    right: 0,
                  },
                },
              }}
              width={isMobile ? 400 : 600}
            />
          </div>
        </CardContent>
      </Card>
      {isMobile && (
        <Card className="shadow-xl shadow-gray-400 dark:bg-slate-950 dark:shadow dark:shadow-black">
          <CardContent>
            <div className="flex flex-row justify-center"></div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
