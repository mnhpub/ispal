# Prims

Prim's algorithm is used to find a minimum spanning tree for a connected, undirected graph.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    remove() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minValue;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex].weight < this.heap[parentIndex].weight) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let nextIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].weight < this.heap[nextIndex].weight) {
                nextIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].weight < this.heap[nextIndex].weight) {
                nextIndex = rightChildIndex;
            }

            if (nextIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[currentIndex]];
                currentIndex = nextIndex;
            } else {
                break;
            }
        }
    }
}

function prims(graph) {
    const vertices = Object.keys(graph);
    const visited = {};
    const minHeap = new MinHeap();
    const minSpanningTree = {};

    // Initialize visited and minHeap
    vertices.forEach(vertex => {
        visited[vertex] = false;
        minHeap.add({ vertex, weight: Infinity });
    });

    // Start from an arbitrary vertex
    const startVertex = vertices[0];
    minHeap.heap[0].weight = 0;

    while (!minHeap.isEmpty()) {
        const { vertex: currentVertex, weight: currentWeight } = minHeap.remove();
        visited[currentVertex] = true;

        if (currentVertex !== startVertex) {
            minSpanningTree[currentVertex] = currentWeight;
        }

        graph[currentVertex].forEach(({ destination, weight }) => {
            if (!visited[destination] && weight < minHeap.heap.find(node => node.vertex === destination).weight) {
                minHeap.heap.find(node => node.vertex === destination).weight = weight;
            }
        });
    }

    return minSpanningTree;
}

// Example usage:
const graph = {
    A: [{ destination: 'B', weight: 2 }, { destination: 'C', weight: 3 }],
    B: [{ destination: 'A', weight: 2 }, { destination: 'C', weight: 4 }, { destination: 'D', weight: 1 }],
    C: [{ destination: 'A', weight: 3 }, { destination: 'B', weight: 4 }, { destination: 'D', weight: 5 }],
    D: [{ destination: 'B', weight: 1 }, { destination: 'C', weight: 5 }]
};

const minSpanningTree = prims(graph);
console.log("Minimum Spanning Tree:", minSpanningTree);
```

### Notes
