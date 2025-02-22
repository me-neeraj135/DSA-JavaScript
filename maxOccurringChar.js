function maxOccurringChar(str) {
  let charMap = {}; // Store character frequencies
  let maxChar = "";
  let maxCount = 0;

  // Count occurrences of each character
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;

    // Update maxChar if current character's count is higher
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

// Test cases
console.log(maxOccurringChar("javascript")); // Output: "a"
console.log(maxOccurringChar("hello world")); // Output: "l"
console.log(maxOccurringChar("apple pie")); // Output: "p"
