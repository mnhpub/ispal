Heap Sort is a comparison-based sorting algorithm that builds a heap data structure from the array and repeatedly extracts the maximum (for max heap) element from the heap and rebuilds the heap.

While Heap Sort inherently doesn't lend itself directly to the use of `map`, `reduce`, and `filter`, we can still incorporate these functions for auxiliary purposes, such as building the heap or extracting elements from the heap.

Here's a Heap Sort implementation in JavaScript:

```javascript
const heapSort = (arr) => {
  // Build max heap
  const buildMaxHeap = () => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  };

  // Heapify a subtree rooted with node i
  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  };

  // Perform heap sort
  const n = arr.length;
  buildMaxHeap();
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }

  return arr;
};

// Example usage
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = heapSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
```

Explanation:

1. **Build Max Heap**:
   - The `buildMaxHeap` function builds a max heap from the input array.
   - It starts from the last non-leaf node and calls `heapify` on each node in reverse order.

2. **Heapify**:
   - The `heapify` function ensures that the subtree rooted at node `i` satisfies the heap property.
   - It compares the node with its children and swaps if necessary to maintain the heap property.

3. **Perform Heap Sort**:
   - After building the max heap, the largest element (root) is repeatedly swapped with the last element of the heap.
   - The heap size is reduced by 1, and the heap is heapified again to restore the heap property.

### Notes
