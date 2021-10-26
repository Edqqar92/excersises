const merge = require("./merge");

test("merge two arrays", () => {
    expect(merge([3, 7, 8, 12], [1, 9, 10])).toEqual([1, 3, 7, 8, 9, 10, 12])
})