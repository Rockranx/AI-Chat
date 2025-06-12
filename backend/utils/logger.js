import winston from "winston";
// import SENTRY_DSN from "../"
import * as Sentry from '@sentry/node';
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize } = format;
const customFormat = printf(({ level, message, timestamp, stack }) => {
  let msg = `${timestamp} [${level}]: ${stack || message}`;

  if (level == "error" && process.env.SENTRY_DSN) {
    // const Sentry = require("@sentry/node");
    Sentry.captureMessage(msg);
  }
  return msg;
});

const transportsList = [
  new transports.File({
    filename: "log/combined.log",
    maxsize: 5 * 1024 * 1024,
    maxFiles: 7,
  }),
  new transports.Console({
    format: combine(colorize(), customFormat),
  }),
];
const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    customFormat
  ),
  transports: transportsList,
});

export const morganStream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

export default logger;
  