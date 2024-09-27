"use strict";
const uppercase = require("./uppercase");

describe("uppercase function", () => {
  test("should convert a string to uppercase", () => {
    expect(uppercase("hello")).toBe("HELLO");
    expect(uppercase("world")).toBe("WORLD");
  });

  test("should throw an error if input is not a string", () => {
    expect(() => uppercase(123)).toThrow("input must be a string");
    expect(() => uppercase(null)).toThrow("input must be a string");
    expect(() => uppercase({})).toThrow("input must be a string");
    expect(() => uppercase(() => {})).toThrow("input must be a string");
    expect(() => uppercase(new Set())).toThrow("input must be a string");
  });

  test("should handle empty strings correctly", () => {
    expect(uppercase("")).toBe("");
  });
});
