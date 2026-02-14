Dijkstra's algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph.

```javascript
function dijkstra(graph, source) {
    const vertices = Object.keys(graph);
    const distances = {};
    const predecessors = {};
    const visited = {};

    // Initialize distances and predecessors
    vertices.forEach(vertex => {
        distances[vertex] = Infinity;
        predecessors[vertex] = null;
        visited[vertex] = false;
    });
    distances[source] = 0;

    while (true) {
        // Find the vertex with the shortest distance that hasn't been visited yet
        const unvisitedVertices = vertices.filter(vertex => !visited[vertex]);
        if (unvisitedVertices.length === 0) break;
        const currentVertex = unvisitedVertices.reduce((minVertex, vertex) =>
            distances[vertex] < distances[minVertex] ? vertex : minVertex
        );

        // Mark the current vertex as visited
        visited[currentVertex] = true;

        // Update distances to neighboring vertices
        graph[currentVertex].forEach(edge => {
            const { destination, weight } = edge;
            const newDistance = distances[currentVertex] + weight;
            if (newDistance < distances[destination]) {
                distances[destination] = newDistance;
                predecessors[destination] = currentVertex;
            }
        });
    }

    return { distances, predecessors };
}

// Example usage:
const graph = {
    A: [{ destination: 'B', weight: 4 }, { destination: 'C', weight: 2 }],
    B: [{ destination: 'C', weight: 5 }, { destination: 'D', weight: 10 }],
    C: [{ destination: 'D', weight: 3 }],
    D: []
};
const source = 'A';

const { distances, predecessors } = dijkstra(graph, source);
console.log("Shortest distances:", distances);
console.log("Predecessors:", predecessors);
```

### Notes
