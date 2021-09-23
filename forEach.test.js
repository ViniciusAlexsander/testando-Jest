const forEach = require("./forEach");

const mockCallback = jest.fn((x) => 42 + x);

test("teste callback", () => {
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});
