const assert = require("assert");

// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

// function Leopard() {}
// Leopard.prototype.hiss = function () {
//   console.log("Felix the cat: hsss");
// };

// function Lynx() {}
// Lynx.prototype = Object.create(Leopard.prototype);
// Lynx.prototype.purr = function () {
//   console.log("Felix the cat: prrr");
// };

// function Cat() {}
// Cat.prototype = Object.create(Lynx.prototype);
// Cat.prototype.meow = function () {
//   console.log("Felix the cat: meow");
// };

class Leopard {
  name = "";
  constructor(name) {
    this.name = name;
  }
  hiss() {
    console.log(`${this.name} the cat: hsss`);
  }
}

class Lynx extends Leopard {
  name = "";
  constructor(name) {
    super();
    this.name = name;
  }
  purr() {
    console.log(`${this.name} the cat: prrr`);
  }
}

class Cat extends Lynx {
  name = "";
  constructor(name) {
    super();
    this.name = name;
  }
  meow() {
    console.log(`${this.name} the cat: meow`);
  }
}
const felix = new Cat("Felix");

felix.meow(); // prints Felix the cat: meow
felix.purr(); // prints Felix the cat: prrr
felix.hiss(); // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix);
const felixProtoProto = Object.getPrototypeOf(felixProto);
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto);

assert(Object.getOwnPropertyNames(felixProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(typeof felixProto.meow, "function");
assert(typeof felixProtoProto.purr, "function");
assert(typeof felixProtoProtoProto.hiss, "function");
console.log("prototype checks passed!");
