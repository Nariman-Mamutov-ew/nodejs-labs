"use strict";
const {
  Readable,
  Writable,
  Transform,
  PassThrough,
  pipeline,
} = require("stream");
const assert = require("assert");
const createWritable = () => {
  const sink = [];
  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString());
      cb();
    },
  });
  writable.sink = sink;
  return writable;
};
const readable = Readable.from(["a", "b", "c"]);
const writable = createWritable();

// TODO: replace the pass through stream
// with a transform stream that uppercases
// incoming characters
const transform = new PassThrough({
  transform(chunk, _, callback) {
    this.push(chunk.toString().toUpperCase()), callback();
  },
});

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err);
  assert.deepStrictEqual(writable.sink, ["A", "B", "C"]);
  console.log("passed!");
});
