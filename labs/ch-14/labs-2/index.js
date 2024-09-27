"use strict";

const os = require("os");

setTimeout(() => {
  console.log(process.uptime()); // TODO output uptime of process
  console.log(os.uptime()); // TODO output uptime of OS
  console.log(os.totalmem()); // TODO output total system memory
  const { heapTotal } = process.memoryUsage();
  console.log(heapTotal); // TODO output total heap memory
}, 1000);
