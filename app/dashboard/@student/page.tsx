import { auth } from "@/_lib/auth";

// components
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";

// styles
import React from "react";
const AcademicProgressBarChart = dynamic(
  () => import("./_components").then((mod) => mod.AcademicProgressBarChart),
  {
    loading() {
      return <Typography variant="h3">Loading...</Typography>;
    },
  },
);
const InstallmentsCharts = dynamic(
  () => import("./_components").then((mod) => mod.InstallmentsCharts),
  {
    loading() {
      return <Typography variant="h3">Loading...</Typography>;
    },
  },
);

// datasets
interface AcademicProgressDataset {
  exam_type: "Ist FA" | "Ist SA" | "IInd FA" | "IInd SA";
  mathematics: number;
  science: number;
  sst: number;
  english: number;
  hindi: number;
  computer: number;
}

export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  return (
    <Container
      component="main"
      className="container mt-24 flex flex-col justify-center gap-7 lg:flex-row"
    >
      <div className="flex flex-col gap-7">
        {/* identity */}
        <Card className="flex flex-row rounded-md px-4 shadow-xl shadow-gray-400 dark:bg-slate-900 dark:shadow dark:shadow-black">
          <CardMedia className=" h-full">
            <Avatar className="mt-4">R</Avatar>
          </CardMedia>
          <CardContent className="flex flex-col gap-4">
            <div>
              <Typography variant="h6">Chowdhury Riddhiman</Typography>
            </div>
            <div className="flex flex-col">
              <Typography>Std: 9th</Typography>
              <Typography>
                Academic progress:{" "}
                <Typography component="span" className="text-green-600">
                  Good
                </Typography>
              </Typography>
            </div>
          </CardContent>
        </Card>

        <AcademicProgressBarChart />
      </div>

      <div className="">
        <Card className="h-full w-full shadow-xl shadow-gray-400 dark:bg-slate-900 dark:shadow dark:shadow-black">
          <CardContent className="flex flex-col">
            <Typography>Installments</Typography>
            <div className="flex flex-col">
              <InstallmentsCharts />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
