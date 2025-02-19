"use strict";
const format = require("./format");

if (require.main === module) {
  const pino = require("pino");
  const logger = pino();
  logger.info(format.upper("start"));
  process.stdin.resume();
} else {
  const reverseAndUpper = (str) => {
    return format.upper(str).split("").reverse().join("");
  };
  module.exports = reverseAndUpper;
}
