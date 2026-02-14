The Bellman-Ford algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph.

```javascript
function bellmanFord(graph, source) {
    const vertices = Object.keys(graph);
    const distances = {};
    const predecessors = {};

    // Initialize distances and predecessors
    vertices.forEach(vertex => {
        distances[vertex] = Infinity;
        predecessors[vertex] = null;
    });
    distances[source] = 0;

    // Relax edges repeatedly
    for (let i = 0; i < vertices.length - 1; i++) {
        vertices.forEach(vertex => {
            if (distances[vertex] !== Infinity) {
                graph[vertex].forEach(edge => {
                    const { destination, weight } = edge;
                    if (distances[vertex] + weight < distances[destination]) {
                        distances[destination] = distances[vertex] + weight;
                        predecessors[destination] = vertex;
                    }
                });
            }
        });
    }

    // Check for negative cycles
    vertices.forEach(vertex => {
        graph[vertex].forEach(edge => {
            const { destination, weight } = edge;
            if (distances[vertex] + weight < distances[destination]) {
                throw new Error("Graph contains a negative-weight cycle");
            }
        });
    });

    return { distances, predecessors };
}

// Example usage:
const graph = {
    A: [{ destination: 'B', weight: -1 }, { destination: 'C', weight: 4 }],
    B: [{ destination: 'C', weight: 3 }, { destination: 'D', weight: 2 }, { destination: 'E', weight: 2 }],
    C: [],
    D: [{ destination: 'B', weight: 1 }, { destination: 'C', weight: 5 }],
    E: [{ destination: 'D', weight: -3 }]
};
const source = 'A';

try {
    const { distances, predecessors } = bellmanFord(graph, source);
    console.log("Shortest distances:", distances);
    console.log("Predecessors:", predecessors);
} catch (error) {
    console.error(error.message);
}
```

### Notes
