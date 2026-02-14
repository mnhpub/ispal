# JS101
## Chapter 7
### 7.1 Iterate
#### 7.1.1 ( **for..of cycle** )

For example, the `for(const item of items)` cycle iterates over array items.

Let's iterate over a list of colors:

  ```javascript
  const colors = ['blue', 'green', 'white'];

  for (const color of colors) {
    console.log(color);
  }
  // 'blue'
  // 'green'
  // 'white'
  ```

On each iteration, the variable `color` is assigned with the iterated item.

**Tips:**
- You can stop iterating at any time using a `break` statement.

#### 7.1.2 ( **for cycle** )

For example, the `for(let i; i < array.length; i++)` cycle iterates over array items using an incrementing index variable.

`for` usually requires an index variable that increments on each cycle:

  ```javascript
  const colors = ['blue', 'green', 'white'];

  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    console.log(color);
  }
  // 'blue'
  // 'green'
  // 'white'
  ```

The `index` variable increments from 0 until `colors.length - 1`. This variable is used to access the item by index: `colors[index]`.

**Tips:**
- You can stop iterating at any time using a `break` statement.

#### 7.1.3 ( **array.forEach() method** )

The `array.forEach(callback)` method iterates over array items by invoking a callback function on every array item.

On each iteration, `callback(item [, index [, array]])` is invoked with arguments: the iterated item, index, and the array itself.

Let's iterate over the `colors` array:

  ```javascript
  const colors = ['blue', 'green', 'white'];

  colors.forEach(function callback(value, index) {
    console.log(value, index);
  });
  // 'blue', 0
  // 'green', 1
  // 'white', 2
  ```

`array.forEach(callback)` invokes the callback 3 times for every item in the array: 'blue', 'green', and 'white'.

**Tips:**
- You cannot break `array.forEach()` iterating.

### 7.2 Map
#### 1.2.1 ( **array.map() method** )

The `array.map(callback)` method creates a new array by using the callback invocation result on each array item.

On each iteration, `callback(item[, index[, array]])` is invoked with arguments: the current item, index, and the array itself. It should return the new item.

Let's increment the numbers of an array:

  ```javascript
  const numbers = [0, 2, 4];

  const newNumbers = numbers.map(function increment(number) {
    return number + 1;
  });

  newNumbers; // => [1, 3, 5]
  ```

`numbers.map(increment)` creates a new array from `numbers` by incrementing each array item.

**Tips:**
- `array.map()` creates a new mapped array, without mutating the original one.

#### 7.2.1 ( **Array.from() function** )

`Array.from(arrayLike[, callback])` method creates a new array by using the callback invocation result on each array item.

On each iteration, `callback(item[, index[, array]])` is invoked with arguments: the current item, index, and the array itself. It should return the new item.

Let's increment the numbers of an array:

  ```javascript
  const numbers = [0, 2, 4];

  const newNumbers = Array.from(numbers, function increment(number) {
    return number + 1;
  });

  newNumbers; // => [1, 3, 5]
  ```

`Array.from(numbers, increment)` creates a new array from `numbers` by incrementing each array item.

**Tips:**
- `Array.from()` creates a new mapped array, without mutating the original one.
- `Array.from()` fits better to map from an array-like object.

### 7.3 Reduce
#### 7.3.1 ( **array.reduce() method** )

`array.reduce(callback[, initialValue])` reduces the array to a value by invoking the callback function as a reducer.

On each iteration, `callback(accumulator, item[, index[, array]])` is invoked with arguments: the accumulator, the current item, index, and the array itself. It should return the accumulator.

The classic example is summing an array of numbers:

  ```javascript
  const numbers = [2, 0, 4];

  function summarize(accumulator, number) {
    return accumulator + number;
  }

  const sum = numbers.reduce(summarize, 0);

  sum; // => 6
  ```

At the first step, the accumulator is initialized with 0. Then the `summarize` function is invoked on each array item, accumulating the sum of numbers.

**Tips:**
- The first array item becomes the initial value if you skip the `initialValue` argument.

### 7.4 Concat
#### 7.4.1 ( **array.concat() method** )

`array.concat(array1[, array2, ...])` concatenates to the original array one or more arrays.

Let's concatenate 2 arrays of names:

  ```javascript
  const heroes = ['Batman', 'Robin'];
  const villains = ['Joker', 'Bane'];

  const everyone = heroes.concat(villains);

  everyone; // => ['Batman', 'Robin', 'Joker', 'Bane']
  ```

`heroes.concat(villains)` creates a new array by concatenating `heroes` and `villains` arrays.

**Tips:**
- `array.concat()` creates a new array, without mutating the original one.
- `array.concat(array1[, array2, ...])` accepts multiple arrays to concatenate.

#### 7.4.2 ( **Spread Operator** )

You can use the spread operator with an array literal to concatenate arrays: `[...array1, ...array2]`.

Let’s concatenate 2 arrays of names:

  ```javascript
  const heroes = ['Batman', 'Catwoman'];
  const villains = ['Joker', 'Bane'];

  const names = [...heroes, ...villains];

  names; // => ['Batman', 'Catwoman', 'Joker', 'Bane']
  ```

`[...heroes, ...villains]` spreads `heroes` and `villains` items, then creates a new array containing all spread items.

You can concatenate as many arrays as you need using the spread operator.

### 7.5 Slice
#### 7.5.1 ( **array.slice() method** )

`array.slice([fromIndex[, toIndex]])` returns a slice of the array starting `fromIndex` and ending `toIndex` (excluding `toIndex` itself). The `fromIndex` optional argument defaults to 0, and the `toIndex` optional argument defaults to `array.length`.

Let's get some array slices:

  ```javascript
  const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

  const heroes = names.slice(0, 2);
  const villains = names.slice(2);

  heroes; // => ['Batman', 'Catwoman']
  villains; // => ['Joker', 'Bane']
  ```

`names.slice(0, 2)` returns a slice of 2 items from the `names` array.

`names.slice(2)` returns a slice of 2 items. The end argument defaults to `names.length`.

**Tips:**
- `array.slice()` creates a new array, without mutating the original one.

### 7.6 Clone
#### 7.6.1 ( **Spread Operator** )

An easy way to clone an array is to use the spread operator: `const clone = [...array]`.

Let's clone an array of colors:

  ```javascript
  const colors = ['white', 'black', 'gray'];

  const clone = [...colors];

  clone; // => ['white', 'black', 'gray']
  colors === clone; // => false
  ```

`[...colors]` creates a clone of the `colors` array.

**Tips:**
- `[...array]` creates a shallow copy.

#### 7.6.2 ( **array.concat() method** )

`[].concat(array)` is yet another approach to how to clone an array.

  ```javascript
  const colors = ['white', 'black', 'gray'];

  const clone = [].concat(colors);

  clone; // => ['white', 'black', 'gray']
  colors === clone; // => false
  ```

`[].concat(colors)` creates a clone of the `colors` array.

**Tips:**
- `[].concat(array)` creates a shallow copy.

#### 7.6.3 ( **array.slice() method** )

`array.slice()` is another approach to how to clone an array.

  ```javascript
  const colors = ['white', 'black', 'gray'];

  const clone = colors.slice();

  clone; // => ['white', 'black', 'gray']
  colors === clone; // => false
  ```

`colors.slice()` creates a clone of the `colors` array.

**Tips:**
- `colors.slice()` creates a shallow copy.

### 7.7 Search
#### 7.7.1 ( **array.includes() method** )

`array.includes(itemToSearch[, fromIndex])` returns a boolean whether the array contains `itemToSearch`. The optional argument `fromIndex`, defaulting to 0, indicates the index to start searching.

Let's determine if 2 and 99 exist in an array of numbers:

  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  numbers.includes(2);  // => true
  numbers.includes(99); // => false
  ```

`numbers.includes(2)` returns true because 2 exists in the `numbers` array.

`numbers.includes(99)` is, however, false because `numbers` doesn't contain 99.

#### 7.7.2 ( **array.find() method** )

`array.find(predicate)` method returns the first array item that satisfies the predicate function.

On each iteration, `predicate(item[, index[, array]])` function is invoked with the arguments: the iterated item, index, and the array itself.

For example, let's find the first even number:

  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  function isEven(number) {
    return number % 2 === 0;
  }

  const evenNumber = numbers.find(isEven);

  evenNumber; // => 2
  ```

`numbers.find(isEven)` returns the first even number inside `numbers`, which is 2.

**Tips:**
- `array.find()` returns `undefined` if no item has satisfied the predicate.

#### 7.7.3 ( **array.indexOf() method** )

`array.indexOf(itemToSearch[, fromIndex])` returns the index of the first appearance `itemToSearch` in the array. The optional argument `fromIndex`, defaulting to 0, is the index to start searching.

Let's find the index of 'Joker':

  ```javascript
  const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

  const index = names.indexOf('Joker');

  index; // => 2
  ```

The index of 'Joker' inside `names` is 2.

**Tips:**
- `array.indexOf(itemToSearch)` returns -1 if the item hasn't been found.
- `array.findIndex(predicate)` is an alternative to find the index using a predicate function.

### 7.8 Query
#### 7.8.1 ( **array.every() method** )

`array.every(predicate)` method returns true if every item passes the predicate check.

On each iteration, `predicate(item[, index[, array]])` predicate function is invoked with the arguments: the iterated item, index, and the array itself.

Let's determine whether arrays `evens` and `mix` contain only even numbers:

  ```javascript
  const evens = [0, 2, 4, 6];
  const numbers = [0, 1, 4, 6];

  function isEven(number) {
    return number % 2 === 0;
  }

  evens.every(isEven); // => true
  numbers.every(isEven); // => false
  ```

`evens.every(isEven)` is true because all numbers in `evens` are even.

However, `numbers.every(isEven)` evaluates to false because `numbers` contains an odd number 1.

#### 7.8.2 ( **array.some() method** )

`array.some(predicate)` method returns true if at least one item passes predicate check.

On each iteration, `predicate(item[, index[, array]])` function is invoked with the arguments: the iterated item, index, and the array itself.

Let's determine whether the arrays contain at least one even number:

  ```javascript
  const numbers = [1, 5, 7, 10];
  const odds = [1, 3, 3, 3];

  function isEven(number) {
    return number % 2 === 0;
  }

  numbers.some(isEven); // => true
  odds.some(isEven);   // => false
  ```

`numbers.some(isEven)` is true because at least one even number, 10, exists in `numbers`.

But `odds.some(isEven)` is false because `odds` contains only odd numbers.

### 7.9 Filter
#### 7.9.1 ( **array.filter()** )

`array.filter(predicate)` method returns a new array with items that have passed predicate check.

On each iteration, `predicate(item[, index[, array]])` function is invoked with the arguments: the iterated item, index, and the array itself.

Let's filter an array to have only even numbers:

  ```javascript
  const numbers = [1, 5, 7, 10];

  function isEven(number) {
    return number % 2 === 0;
  }

  const evens = numbers.filter(isEven);

  evens; // => [10]
  ```

`numbers.filter(isEven)` creates a new array `evens` by filtering `numbers` to contain only even numbers.

**Tips:**
- `array.filter()` creates a new array, without mutating the original one.

### 7.10 Insert
#### 7.10.1 ( **array.push() method** )

`array.push(item1[..., itemN])` method appends one or more items to the end of an array, returning the new length.

Let's append 'Joker' at the end of the `names` array:

  ```javascript
  const names = ['Batman'];

  names.push('Joker');

  names; // ['Batman', 'Joker']
  ```

`names.push('Joker')` inserts a new item 'Joker' at the end of the `names` array.

**Tips:**
- `array.push()` mutates the array in place.
- `array.push(item1, item2, ..., itemN)` can push multiple items.

#### 7.10.2 ( **array.unshift() method** )

`array.unshift(item1[..., itemN])` method appends one or more items to the beginning of an array, returning the new length of the array.

Let's append 'Catwoman' at the beginning of `names` array:

  ```javascript
  const names = ['Batman'];

  names.unshift('Catwoman');

  names; // ['Catwoman', 'Batman']
  ```

`names.unshift('Catwoman')` inserts a new item 'Catwoman' at the beginning of the `names` array.

**Tips:**
- `array.unshift()` mutates the array in place.
- `array.unshift(item1, item2, ..., itemN)` can insert multiple items.

#### 7.10.3 ( **Spread Operator** )

You can insert items in an array in an immutable manner by combining the spread operator with the array literal.

Appending an item at the end of an array:

  ```javascript
  const names = ['Joker', 'Bane'];

  const names2 = [
    ...names,
    'Batman',
  ];

  names2; // => ['Joker', 'Bane', 'Batman'];
  ```

Appending an item at the beginning of an array:

  ```javascript
  const names = ['Joker', 'Bane'];

  const names2 = [
    'Batman',
    ...names
  ];

  names2; // => ['Batman', 'Joker', 'Bane'];
  ```

Inserting an item at any index:

  ```javascript
  const names = ['Joker', 'Bane'];
  const indexToInsert = 1;

  const names2 = [
    ...names.slice(0, indexToInsert),
    'Batman',
    ...names.slice(indexToInsert)
  ];

  names2; // => ['Joker', 'Batman', 'Bane'];
  ```

### 7.11 Remove
#### 7.11.1 ( **array.pop() method** )

In JavaScript, there are several methods to remove objects (or elements) from arrays. Here are some of the most common ways:

#### 1. Remove Using `splice()`
The `splice()` method can add or remove elements from an array.

**Syntax:**
```javascript
array.splice(start, deleteCount, item1, ..., itemN)
```

**Example:**
Removing a specific object:
```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Removes 1 element at index 2
console.log(array); // [1, 2, 4, 5]
```

#### 2. Remove Using `filter()`
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Example:**
Removing an object based on a condition:
```javascript
let array = [1, 2, 3, 4, 5];
array = array.filter(element => element !== 3);
console.log(array); // [1, 2, 4, 5]
```

#### 3. Remove Using `pop()`
The `pop()` method removes the last element from an array and returns that element.

**Example:**
Removing the last object:
```javascript
let array = [1, 2, 3, 4, 5];
array.pop(); // Removes the last element
console.log(array); // [1, 2, 3, 4]
```

#### 4. Remove Using `shift()`
The `shift()` method removes the first element from an array and returns that element.

**Example:**
Removing the first object:
```javascript
let array = [1, 2, 3, 4, 5];
array.shift(); // Removes the first element
console.log(array); // [2, 3, 4, 5]
```

#### 5. Remove Using `slice()`
The `slice()` method returns a shallow copy of a portion of an array into a new array object.

**Example:**
Creating a new array excluding a specific range:
```javascript
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(0, 2).concat(array.slice(3));
console.log(newArray); // [1, 2, 4, 5]
```

#### 6. Remove Using `delete`
The `delete` operator removes an element from an array but does not change the array length, leaving `undefined` in its place.

**Example:**
```javascript
let array = [1, 2, 3, 4, 5];
delete array[2]; // Deletes the element at index 2
console.log(array); // [1, 2, undefined, 4, 5]
```

#### 7. Remove Using `reduce()`
The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

**Example:**
Removing specific elements:
```javascript
let array = [1, 2, 3, 4, 5];
let newArray = array.reduce((acc, curr) => {
    if (curr !== 3) acc.push(curr);
    return acc;
}, []);
console.log(newArray); // [1, 2, 4, 5]
```

#### 8. Remove Using `findIndex()` and `splice()`
First find the index of the element and then use `splice()` to remove it.

**Example:**
```javascript
let array = [1, 2, 3, 4, 5];
let index = array.findIndex(element => element === 3);
if (index !== -1) array.splice(index, 1);
console.log(array); // [1, 2, 4, 5]
```

These methods provide different ways to manipulate arrays depending on your specific use case, whether it's removing specific elements, the first or last element, or elements based on a condition.