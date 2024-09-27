"use strict";
const { promisify } = require("util");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

const opAPromise = promisify(opA);
const opBPromise = promisify(opB);
const opCPromise = promisify(opC);

const oldFashion = () => {
  opAPromise()
    .then((result) => {
      print(null, result);
      return opBPromise();
    })
    .then((result) => {
      print(null, result);
      return opCPromise();
    })
    .then((result) => {
      print(null, result);
    });
};

oldFashion();

const sequence = async () => {
  const resultA = await opAPromise();
  print(null, resultA);
  const resultB = await opBPromise();
  print(null, resultB);
  const resultC = await opCPromise();
  print(null, resultC);
};

sequence();
