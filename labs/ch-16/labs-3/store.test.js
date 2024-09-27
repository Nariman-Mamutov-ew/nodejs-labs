"use strict";
const store = require("./store");
const { promisify } = require("util");

describe("generateId", () => {
  it("should throw an error if input is not a buffer", async () => {
    await expect(store("not-a-buffer")).rejects.toThrow(
      "input must be a buffer"
    );
  });

  it("should return an object with a 4 character id when input is a buffer", async () => {
    const input = Buffer.from("test");
    const result = await store(input);
    expect(result).toHaveProperty("id");
    expect(result.id).toHaveLength(4);
  });

  it("should generate unique ids", async () => {
    const input = Buffer.from("test");
    const result1 = await store(input);
    const result2 = await store(input);
    expect(result1.id).not.toEqual(result2.id);
  });

  it("should wait for at least 300ms before returning", async () => {
    const input = Buffer.from("test");

    const startTime = Date.now();
    await store(input);
    const endTime = Date.now();

    expect(endTime - startTime).toBeGreaterThanOrEqual(300);
  });
});
