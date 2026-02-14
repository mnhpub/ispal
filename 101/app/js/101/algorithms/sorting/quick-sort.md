While Quick Sort primarily relies on partitioning and recursion, we can still incorporate `map`, `reduce`, and `filter` for certain auxiliary operations, such as partitioning the array. Here's a Quick Sort implementation in JavaScript with some usage of `map`, `reduce`, and `filter`:

```javascript
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)];

  // Partition the array into three subarrays
  const [left, equal, right] = arr.reduce(([leftArr, equalArr, rightArr], element) => {
    if (element < pivot) {
      leftArr.push(element);
    } else if (element === pivot) {
      equalArr.push(element);
    } else {
      rightArr.push(element);
    }
    return [leftArr, equalArr, rightArr];
  }, [[], [], []]);

  // Recursively sort the left and right subarrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Concatenate the sorted subarrays and the pivot
  return [...sortedLeft, ...equal, ...sortedRight];
};

// Example usage
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
```

Explanation:

1. **Partitioning the Array**:
   - We select a pivot element randomly from the array.
   - Using `reduce`, we partition the array into three subarrays: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.

2. **Recursion**:
   - We recursively sort the left and right subarrays.
   - The base case for recursion is when the array size is 0 or 1.

3. **Concatenating Results**:
   - We concatenate the sorted left subarray, the equal elements, and the sorted right subarray to form the final sorted array.

### Notes
