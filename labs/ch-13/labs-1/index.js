"use strict";
const assert = require("assert");
const { join, basename } = require("path");
const fs = require("fs");
const project = join(__dirname, "project");
try {
  fs.rmSync(project, { recursive: true });
} catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2));
});
files.sort();
fs.mkdirSync(project);
for (const f of files) fs.closeSync(fs.openSync(f, "w"));

const out = join(__dirname, "out.txt");

function exercise() {
  const filenames = fs.readdirSync(project);
  const names = filenames.join(",");
  fs.writeFileSync(out, names);
  // TODO read the files in the project folder
  // and write the to the out.txt file
}

exercise();
assert.deepStrictEqual(
  fs
    .readFileSync(out)
    .toString()
    .split(",")
    .map((s) => s.trim()),
  files.map((f) => basename(f))
);
console.log("passed!");
