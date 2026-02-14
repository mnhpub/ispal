To solve the palindrome problem in JavaScript using `map`, `reduce`, and `filter`, we'll check whether a given string is a palindrome. A palindrome is a string that reads the same backward as forward.

Here's how we can achieve this using the mentioned array methods:

1. **Normalize the string**: Remove non-alphanumeric characters and convert it to lowercase.
2. **Check for palindrome**: Compare the string with its reversed version.

### Solution

```javascript
const isPalindrome = (str) => {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str
    .toLowerCase()
    .split('')
    .filter(char => /[a-z0-9]/.test(char))
    .join('');

  // Reverse the normalized string
  const reversedStr = normalizedStr
    .split('')
    .reduce((acc, char) => char + acc, '');

  // Compare the normalized string with its reversed version
  return normalizedStr === reversedStr;
};

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

### Explanation

1. **Normalization**:
   - `toLowerCase()` is used to convert the string to lowercase.
   - `split('')` converts the string into an array of characters.
   - `filter(char => /[a-z0-9]/.test(char))` filters out non-alphanumeric characters using a regular expression.
   - `join('')` joins the filtered characters back into a string.

2. **Reversing the String**:
   - `split('')` splits the normalized string into an array of characters.
   - `reduce((acc, char) => char + acc, '')` reverses the string by adding each character to the beginning of the accumulator.

3. **Comparison**:
   - The original normalized string is compared with its reversed version to determine if it is a palindrome.

### Usage of `map`, `reduce`, `filter`:

- **`filter`**: Used to remove non-alphanumeric characters from the string.
- **`reduce`**: Used to reverse the string by accumulating characters in reverse order.

### Notes
