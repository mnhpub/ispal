The Word Break problem involves determining if a given string can be segmented into a space-separated sequence of one or more dictionary words. 

### Problem Description
Given a string `s` and a dictionary of words `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

### Solution
We'll solve the problem using dynamic programming and incorporate `map`, `reduce`, and `filter` where appropriate.

### Implementation

```javascript
const wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict);

  // Initialize the dp array with false values
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string can be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

// Example usage
const s = "leetcode";
const wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict)); // true

const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];

console.log(wordBreak(s2, wordDict2)); // true

const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s3, wordDict3)); // false
```

### Explanation

1. **Dynamic Programming Array (dp)**:
   - `dp[i]` indicates whether the substring `s[0...i-1]` can be segmented into words in the dictionary.
   - Initialize `dp[0]` to `true` because an empty string can always be segmented.

2. **Nested Loops**:
   - The outer loop iterates over the length of the string `s` from 1 to `s.length`.
   - The inner loop iterates over the substring `s[0...i-1]` and checks every possible segmentation point `j`.
   - If `dp[j]` is `true` and the substring `s[j...i-1]` is in the dictionary (`wordSet`), set `dp[i]` to `true`.

3. **Returning the Result**:
   - The result is the value of `dp[s.length]`, indicating whether the entire string `s` can be segmented.

### Usage of `map`, `reduce`, `filter`

To demonstrate `map`, `reduce`, and `filter`, let's create an optimized version where we use these functions to transform and filter data:

```javascript
const wordBreakOptimized = (s, wordDict) => {
  const wordSet = new Set(wordDict);

  // Initialize the dp array with false values
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string can be segmented

  // Create a list of possible segment lengths based on the words in the dictionary
  const lengths = [...wordSet].map(word => word.length);

  for (let i = 1; i <= s.length; i++) {
    dp[i] = lengths
      .filter(len => i - len >= 0 && dp[i - len])
      .map(len => s.slice(i - len, i))
      .some(segment => wordSet.has(segment));
  }

  return dp[s.length];
};

// Example usage
console.log(wordBreakOptimized(s, wordDict)); // true
console.log(wordBreakOptimized(s2, wordDict2)); // true
console.log(wordBreakOptimized(s3, wordDict3)); // false
```

### Explanation of the Optimized Solution

1. **Transform Word Lengths**:
   - Use `map` to create an array of word lengths from `wordDict`.

2. **Filter and Map Segments**:
   - For each position `i` in the string `s`, use `filter` to find valid lengths `len` such that the previous segment (`i - len`) is valid (`dp[i - len]`).
   - Use `map` to create the corresponding substrings (`s.slice(i - len, i)`).

3. **Check Segments**:
   - Use `some` to check if any of these segments exist in the `wordSet`.

### Notes
