```javascript
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const weight = weights[i - 1];
        const value = values[i - 1];
        for (let j = 0; j <= capacity; j++) {
            if (weight <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // Backtrack to find items included in the knapsack
    let totalValue = dp[n][capacity];
    const items = [];
    let remainingCapacity = capacity;
    for (let i = n; i > 0 && totalValue > 0; i--) {
        if (totalValue !== dp[i - 1][remainingCapacity]) {
            items.push(i - 1);
            totalValue -= values[i - 1];
            remainingCapacity -= weights[i - 1];
        }
    }

    return {
        totalValue: dp[n][capacity],
        items: items.reverse()
    };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

const result = knapsack(weights, values, capacity);
console.log("Total value:", result.totalValue);
console.log("Selected items:", result.items.map((item) => `Item ${item}`));
```

### Notes
