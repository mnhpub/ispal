let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const characters = ["Pepe", "Brian", "Roger"];
const things = {
  instrument: "marimba",
  stage: "wooden",
  aeroplane: "prop",
  cars: ["Ford", "Toyota", "GM"],
};

// ---------------------------------------------------- //

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let array = [...arr];
  while (array.length) {
    console.log(array.shift());
  }
}

function map(arr, cb) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr, cb) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function reduce(arr, cb, newThing) {
  for (let i = 0; i < arr.length; i++) {
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

// ---------------------------------------------------- //

console.log("forLoop()");
forLoop(numbers);
console.log("------------------\n\n");

console.log("whileLoop()");
whileLoop(numbers);
console.log("------------------\n\n");

console.log("map()");
let squares = map(numbers, (val) => val * val);
console.log({ squares });
console.log("------------------\n\n");

console.log("filter()");
let odds = filter(numbers, (val) => !!(val % 2));
console.log({ odds });
console.log("------------------\n\n");

console.log("reduce()");
let sum = reduce(
  numbers,
  (acc, num) => {
    acc += num;
    return acc;
  },
  0,
);

console.log({ sum });
console.log("------------------\n\n");

// ---------------------------------------------------- //

const state = { pets, things };
let newCharacters = ["Pepe", ...pets, "Garfield"];
const newThing = { ...things, cars: [...things.cars, "GMC"] };
let newState = {
  ...state,
  characters: ["Pepe", ...pets, "Garfield"],
  things: { ...things, cars: [...things.cars, "Rolls"] },
};

console.log({ characters });
console.log("------------------\n\n");

console.log({ newCharacters });
console.log("------------------\n\n");

console.log({ things });
console.log("------------------\n\n");

console.log({ newThing });
console.log("------------------\n\n");

console.log({ state });
console.log("------------------\n\n");

console.log({ newState });
console.log("------------------\n\n");
