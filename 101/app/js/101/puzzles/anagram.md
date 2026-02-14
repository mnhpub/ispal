To solve the anagram problem in JavaScript, you can use a combination of `map`, `reduce`, and `filter` to ensure efficient and readable code. The typical anagram problem involves checking whether two strings are anagrams of each other, meaning they contain the same characters in the same frequency.

Here’s a solution that uses these array methods effectively:

```javascript
// Function to check if two strings are anagrams
const areAnagrams = (str1, str2) => {
  // Helper function to create a character frequency map
  const createCharMap = (str) => {
    return str.split('').reduce((map, char) => {
      map[char] = (map[char] || 0) + 1;
      return map;
    }, {});
  };

  // Create character maps for both strings
  const charMap1 = createCharMap(str1);
  const charMap2 = createCharMap(str2);

  // Check if both strings have the same characters with the same frequencies
  return Object.keys(charMap1).length === Object.keys(charMap2).length &&
    Object.keys(charMap1).every((char) => charMap1[char] === charMap2[char]);
};

// Example usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
```

### Explanation:

1. **Helper Function (`createCharMap`)**:
   - The `createCharMap` function takes a string and returns a character frequency map.
   - The string is split into an array of characters using `split('')`.
   - The `reduce` method is used to construct the frequency map where each character's count is recorded.

2. **Main Function (`areAnagrams`)**:
   - The function `areAnagrams` takes two strings as input.
   - It generates the character maps for both strings using the `createCharMap` function.
   - It then checks if both maps have the same number of keys (characters) and if each character has the same frequency in both maps using `Object.keys` and `every`.

3. **Efficiency**:
   - Using `reduce` to create the frequency map ensures each string is processed in linear time.
   - Using `every` to compare the character frequencies ensures the comparison is efficient.

### Notes
