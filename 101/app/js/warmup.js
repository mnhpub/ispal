// Arrays

// TODO
// - Create an array of numbers, 1 through 10

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO
// - Write a function, called forLoop
// - It takes an array as a parameter
// - It runs the array through a for(...) loop
// - It does a console.log() of each element

function forLoop(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log("forLoop()");
forLoop(nums);
console.log("------------------\n\n");

// TODO Write a function, called whileLoop
// - It takes an array as a parameter
// - It runs the array through a while(...) loop
// - It does a console.log() of each element

function whileLoop(arr) {
  var i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

console.log("whileLoop()");
whileLoop(nums);
console.log("------------------\n\n");

// Implement the .map() function from scratch
// - Function takes in an array as a parameter

function map(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

console.log("map()");
let squares = map(nums, (val) => val * val);
console.log({ squares });
console.log("------------------\n\n");

// Implement the .filter() function from scratch
// - Function takes in an array as a parameter

function filter(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) result.push(arr[i]);
  }
  return result;
}

console.log("filter()");
let odds = filter(nums, (val) => !!(val % 2));
console.log({ odds });
console.log("------------------\n\n");

// Implement the .reduce() function from scratch
// - Function takes in an array as a parameter

function reduce(arr, cb, init) {
  for (var i = 0; i < arr.length; i++) {
    init = cb(init, arr[i], i);
  }
  return init;
}

console.log("reduce()");
let sum = reduce(
  nums,
  (acc, num) => {
    acc += num;
    return acc;
  },
  0,
);
console.log({ sum });
console.log("------------------\n\n");

// Objects

// Characters
const characters = ["Pepe", "Brian", "Roger"];

console.log({ characters });
console.log("------------------\n\n");

// Things
const things = {
  instrument: "marimba",
  stage: "wooden",
  aeroplane: "prop",
  cars: ["Ford", "Toyota", "GM"],
};

console.log({ things });
console.log("------------------\n\n");

// TODO
// - Using spread and destructuring assignment
// - Create a new array called `newcharacters', which is a copy of the `characters` array
// - Add a character named 'Pepe' to the beginning
// - Add a character named 'Garfield' added to the end

let newCharacters = ["Pepe", ...characters, "Garfield"];

console.log({ newCharacters });
console.log("------------------\n\n");

// TODO
// Using spread and destructuring assignment
// - Create a new object called `newThing', which is a copy of the `things` object
// - Add a new car added to the end of the `cars` array within the 'things' object

const newThing = { ...things, cars: [...things.cars, "Rolls"] };

console.log({ newThing });
console.log("------------------\n\n");

// TODO
// - Create a `state` object with keys of characters and things that contain the `characters` and `things` data
// - Do this using object destructuring assignment

let state = { characters, things };

console.log({ state });
console.log("------------------\n\n");

// TODO
// - Using spread and destructuring assignments, create a new object called `newSate`
// - Repeating the `newcharacters` and `newThing` steps above but directly within the characters and things nodes of the state object
// * Do not spread in `newcharacters` and `newThing`

let newState = {
  ...state,
  characters: ["Pepe", ...state.characters, "Garfield"],
  things: { ...state.things, cars: [...state.things.cars, "Rolls"] },
};

console.log({ newState });
console.log("------------------\n\n");

// Prove that the original characters, things, and state are unchanged.
