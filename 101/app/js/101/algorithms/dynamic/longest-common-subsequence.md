```javascript
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the longest common subsequence
    let i = m, j = n;
    const result = [];
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            result.unshift(text1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result.join('');
}

// Example usage:
const text1 = "ABCBDAB";
const text2 = "BDCABB";
const lcs = longestCommonSubsequence(text1, text2);
console.log("Longest Common Subsequence:", lcs);
```

### Notes
