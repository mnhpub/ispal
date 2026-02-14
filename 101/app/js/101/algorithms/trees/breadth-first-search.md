Breadth-First Search (BFS) in JavaScript using `map`, `reduce`, and `filter` where possible. BFS explores all the nodes at the present depth level before moving on to the nodes at the next depth level.

### Implementation

```javascript
const bfs = (graph, start) => {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // Get the neighbors and filter out visited ones
      const neighbors = (graph[node] || []).filter(neighbor => !visited.has(neighbor));

      // Add the unvisited neighbors to the queue
      neighbors.reduce((acc, neighbor) => {
        acc.push(neighbor);
        return acc;
      }, queue);
    }
  }

  return result;
};

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
```

### Explanation

1. **Initialization**:
   - `visited` is a set to keep track of visited nodes.
   - `queue` is an array to manage the nodes to be processed in FIFO order.
   - `result` is an array to store the order of nodes as they are visited.

2. **Processing Nodes**:
   - While the queue is not empty, take the first node (`shift`).
   - If the node hasn't been visited, mark it as visited, and add it to the `result`.
   - Get the neighbors of the node from the graph. Use `filter` to get only the unvisited neighbors.
   - Use `reduce` to enqueue the unvisited neighbors.

### Detailed Version with `map`, `reduce`, and `filter`

Here's a more detailed version, demonstrating the use of `map`, `reduce`, and `filter`:

```javascript
const bfsDetailed = (graph, start) => {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      const neighbors = graph[node] || [];

      // Filter unvisited neighbors
      const unvisitedNeighbors = neighbors.filter(neighbor => !visited.has(neighbor));

      // Map to transform neighbors (if necessary)
      const transformedNeighbors = unvisitedNeighbors.map(neighbor => neighbor);

      // Reduce to add neighbors to the queue
      transformedNeighbors.reduce((acc, neighbor) => {
        acc.push(neighbor);
        return acc;
      }, queue);
    }
  }

  return result;
};

// Example usage
console.log(bfsDetailed(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
```

### Explanation of the Detailed Version

1. **Initialization**:
   - Same as the basic version.

2. **Processing Nodes**:
   - Same as the basic version with additional usage of `map`.

3. **Filter Unvisited Neighbors**:
   - `filter` is used to get only the unvisited neighbors.

4. **Map to Transform Neighbors**:
   - `map` is used to transform neighbors if needed. In this case, it directly maps neighbors to themselves, but you can use it for more complex transformations.

5. **Reduce to Add Neighbors to Queue**:
   - `reduce` is used to add each unvisited neighbor to the queue.

### Notes
