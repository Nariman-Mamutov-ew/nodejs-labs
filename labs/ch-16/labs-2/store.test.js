"use strict";
const store = require("./store");

describe("moduleFunction", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should return an error if input is not a buffer", () => {
    const callback = jest.fn();
    const input = "not a buffer";
    store(input, callback);

    expect(callback).toHaveBeenCalledWith(Error("input must be a buffer"));
  });

  test("should return a valid id if input is a buffer", () => {
    const callback = jest.fn();
    const input = Buffer.from("test-buffer");

    store(input, callback);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledWith(
      null,
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });

  test("should return an id with exactly 4 characters", () => {
    const callback = jest.fn();
    const input = Buffer.from("another-test-buffer");

    store(input, callback);

    jest.runAllTimers();

    const id = callback.mock.calls[0][1].id;
    expect(id).toHaveLength(4);
  });
});
