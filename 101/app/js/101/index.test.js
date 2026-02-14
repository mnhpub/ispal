const solution = require("./index");

let leftArr = [3, 6, 2, 9, -1, 10]; // Left
let rightArr = [1, 4, 100, 5]; // Right
let equalArr = [1, 10, 5, 1, 12, 6]; // Equal
let emptyArr = []; // Empty tree
let rootOnlyArr = [1]; // Only root node

test("Left Branch Sum: ", () => {
    expect(solution(leftArr)).toBe("Left");
});

test("Right Branch Sum: ", () => {
    expect(solution(rightArr)).toBe("Right");
});

test("Right Branch Sum: ", () => {
    expect(solution(equalArr)).toBe("Equal");
});

test("Empty Tree: ", () => {
    expect(solution(emptyArr)).toBe(0);
});

test("Root Only: ", () => {
    expect(solution(rootOnlyArr)).toBe(0);
});
