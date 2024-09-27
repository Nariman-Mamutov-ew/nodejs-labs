"use strict";
const { EventEmitter } = require("events");

process.on("uncaughtException", (err) => {
  console.error("Caught exception:", err);
});

process.nextTick(console.log, "passed!");

const ee = new EventEmitter();

ee.emit("error", Error("timeout"));
