import { createLogger, transports, format, Container } from "winston";
import("winston-daily-rotate-file");
import TransportStream from "winston-transport";
import prisma from "@/_lib/prisma";
import { LogLevel, PrismaClient } from "@prisma/client";

class PrismaTransport extends TransportStream {
  private prisma: PrismaClient;
  constructor() {
    super();
    this.prisma = prisma;
  }
  public log(info: Record<string, any>, next: () => void) {
    const { prisma, emit } = this;
    prisma.log
      .create({
        data: {
          name: info.name as string,
          level: (this.level as LogLevel) || "info",
          message: info,
        },
      })
      .then(() => {
        emit("finish");
      })
      .catch(() => emit("error"))
      .finally(() => {
        emit("close");
        next();
      });
  }
}
const { colorize, combine, timestamp, json, errors, printf } = format;
const container = new Container({
  defaultMeta: { environment: process.env.NODE_ENV },
  format: combine(
    colorize({ level: true }),
    timestamp({ format: "YYYY:MM:DD HH:mm:ss" }),
    errors({ stack: true }),
    json(),
  ),
  transports: [
    new transports.Console({ format: combine(colorize(), timestamp(), json()) }),
    new PrismaTransport(),
    new transports.File({ dirname: "logs", filename: "logger.log" }),
    new transports.File({
      dirname: "logs",
      filename: "exeptions.log",
      handleExceptions: true,

      // level: "error",
      format: combine(timestamp(), json()),
    }),
  ],

  exitOnError: false,
});
const logger = container.add("defaultLogger", {
  level: "info",
  defaultMeta: { name: "defaultLogger" },
  transports: [new transports.File({ dirname: "logs", filename: "logger.log" })],
  exceptionHandlers: [
    new transports.File({ dirname: "logs", filename: "exeptions.log" }),
  ],
  exitOnError: false,
});

const studentLogger = container.add("studentLogger", {
  defaultMeta: { name: "studentLogger" },
  transports: [
    new transports.File({
      dirname: "logs",
      filename: "students.log",
      format: combine(json(), timestamp()),
    }),
    new transports.Console(),
    new PrismaTransport(),
  ],
});
const searchLogger = container.add("searchLogger", {
  defaultMeta: { name: "searchLogger" },
  transports: [
    new transports.File({
      dirname: "logs",
      filename: "search.log",
      format: combine(json(), timestamp()),
    }),
    new transports.Console(),
    new PrismaTransport(),
  ],
});

export default container;
export { studentLogger, logger, searchLogger };
