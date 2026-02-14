Merge Sort is a divide-and-conquer algorithm that divides the input array into smaller subarrays, sorts each subarray recursively, and then merges them back together.

While Merge Sort itself doesn't directly use `map`, `reduce`, and `filter`, we can still incorporate these functions for auxiliary purposes, such as splitting the array and merging subarrays.

Here's a Merge Sort implementation in JavaScript:

```javascript
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
};

// Merge two sorted arrays
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and merge
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};

// Example usage
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
```

Explanation:

1. **Merge Sort Function**:
   - The `mergeSort` function recursively divides the array into smaller halves until each subarray contains only one element.
   - Then, it merges adjacent subarrays in sorted order using the `merge` function.

2. **Merge Function**:
   - The `merge` function takes two sorted arrays as input and merges them into a single sorted array.
   - It compares elements from both arrays and adds the smaller element to the result array until one of the arrays is exhausted.
   - Then, it adds the remaining elements from the other array to the result.

### Notes
