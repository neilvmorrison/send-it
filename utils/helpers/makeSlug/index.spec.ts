import makeSlug from ".";

describe("makeSlug", () => {
  test("when given a name with letters, spaces, numbers, special characters and capital letters, it returns only letters and numbers", () => {
    const test = makeSlug("forM!ula %1");
    expect(test).toEqual("formula1");
  });
});
