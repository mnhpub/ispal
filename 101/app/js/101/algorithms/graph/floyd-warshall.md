The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph.

```javascript
function floydWarshall(graph) {
    const vertices = Object.keys(graph);
    const distances = {};
    const next = {};

    // Initialize distances and next
    vertices.forEach(u => {
        distances[u] = {};
        next[u] = {};
        vertices.forEach(v => {
            distances[u][v] = u === v ? 0 : Infinity;
            next[u][v] = null;
        });
        graph[u].forEach(edge => {
            const { v, weight } = edge;
            distances[u][v] = weight;
            next[u][v] = v;
        });
    });

    // Update distances and next
    vertices.forEach(k => {
        vertices.forEach(i => {
            vertices.forEach(j => {
                if (distances[i][j] > distances[i][k] + distances[k][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                    next[i][j] = next[i][k];
                }
            });
        });
    });

    return { distances, next };
}

// Example usage:
const graph = {
    A: [{ v: 'B', weight: 3 }, { v: 'C', weight: 7 }],
    B: [{ v: 'A', weight: 8 }, { v: 'C', weight: 2 }],
    C: [{ v: 'A', weight: 5 }, { v: 'B', weight: 1 }]
};

const { distances, next } = floydWarshall(graph);
console.log("Shortest distances:", distances);
console.log("Next nodes:", next);
```

### Notes
