"use strict";

const { spawn } = require("child_process");

const exercise = (command, args) => {
  return spawn(command, args, {
    stdio: ["ignore", "inherit", "pipe"],
  });
};

module.exports = exercise;
