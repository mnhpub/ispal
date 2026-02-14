The flood fill problem, similar to the "paint bucket" tool in graphic editors, involves changing the color of a given pixel and all connected pixels of the same color to a new color. Here’s a solution in JavaScript that uses `map`, `reduce`, and `filter` where appropriate.

### Problem Description
Given a 2D array (matrix) representing an image, a starting pixel (sr, sc), and a new color, the task is to change the color of the starting pixel and all connected pixels of the same color to the new color.

### Solution
We'll implement a depth-first search (DFS) approach for the flood fill algorithm.

```javascript
const floodFill = (image, sr, sc, newColor) => {
  const oldColor = image[sr][sc];

  // If the old color is the same as the new color, no need to proceed
  if (oldColor === newColor) return image;

  // Helper function to perform DFS
  const fill = (image, sr, sc, oldColor, newColor) => {
    // Base cases
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    if (image[sr][sc] !== oldColor) return;

    // Update the color
    image[sr][sc] = newColor;

    // Recursive calls for neighboring cells
    fill(image, sr + 1, sc, oldColor, newColor);
    fill(image, sr - 1, sc, oldColor, newColor);
    fill(image, sr, sc + 1, oldColor, newColor);
    fill(image, sr, sc - 1, oldColor, newColor);
  };

  // Start the flood fill
  fill(image, sr, sc, oldColor, newColor);
  return image;
};

// Example usage
let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
];

let sr = 1, sc = 1, newColor = 2;
console.log(floodFill(image, sr, sc, newColor));
/* Output:
[
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1]
]
*/
```

### Explanation:

1. **Initial Setup**:
   - `oldColor` is the color of the starting pixel `(sr, sc)`.
   - If `oldColor` is the same as `newColor`, there’s no need to proceed further, as the image would remain unchanged.

2. **Helper Function (`fill`)**:
   - The `fill` function performs a depth-first search (DFS) to update the color of connected pixels.
   - It includes base cases to check boundaries and ensure the current pixel has the `oldColor`.
   - The pixel’s color is updated to `newColor`.
   - The function recursively calls itself for the four neighboring pixels (up, down, left, right).

3. **Flood Fill Execution**:
   - The `fill` function is initially called with the starting pixel.
   - The updated image is returned after completing the flood fill.

### Usage of `map`, `reduce`, `filter`:

### Notes
