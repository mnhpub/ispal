Bubble Sort algorithm in JavaScript and utilize `map`, `reduce`, and `filter` where possible. Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### Implementation

```javascript
const bubbleSort = (arr) => {
  // Clone the array to avoid mutating the original array
  const sortedArray = [...arr];

  // Perform the bubble sort
  for (let i = 0; i < sortedArray.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      // Swap if the current element is greater than the next element
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is sorted
    if (!swapped) {
      break;
    }
  }

  return sortedArray;
};

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
```

### Explanation

1. **Cloning the Array**:
   - We clone the input array using the spread operator (`...`) to avoid mutating the original array.

2. **Bubble Sort Logic**:
   - We use two nested loops to iterate through the array.
   - In the inner loop, we compare adjacent elements and swap them if they are in the wrong order.
   - We keep track of whether any swaps were made in each pass. If no swaps were made in a pass, the array is already sorted, and we can break out of the outer loop.

3. **Returning the Sorted Array**:
   - We return the sorted array after the sorting process is complete.

### Usage of `map`, `reduce`, `filter`

Bubble Sort inherently doesn't lend itself well to the use of `map`, `reduce`, and `filter` because it's primarily an iterative algorithm focused on swapping elements. However, you could theoretically use `map` to apply a transformation to each element before sorting, but it's not a standard use case for Bubble Sort.

Here's a conceptual example of how `map`, `reduce`, and `filter` could be used:

```javascript
const mappedArray = unsortedArray.map(num => num * 2); // Example transformation
console.log("Mapped Array:", mappedArray);

const filteredArray = unsortedArray.filter(num => num % 2 === 0); // Example filtering
console.log("Filtered Array:", filteredArray);

const sum = unsortedArray.reduce((acc, num) => acc + num, 0); // Example reduction
console.log("Sum of Array:", sum);
```

### Notes
