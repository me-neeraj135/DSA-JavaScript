/** @format */

// Find the Longest Substring without repeating characters in JavaScript.

// ------****---------

// sliding window approach....

// Iterate through the string, if the character is already in the map, update the start index to the value of the character in the map.
// Update the max length to be the current index minus the start index.
// Return the max length

let longestSubString = function (str) {
  if (!str) {
    return 0;
  }

  let end = 0;
  let start = 0;
  let maxlength = 0;
  const uniqueChar = new Set();

  while (end < str.length) {
    if (!uniqueChar.has(str[end])) {
      uniqueChar.add(str[end]);
      end++;
      maxlength = Math.max(maxlength, uniqueChar.size);
    } else {
      uniqueChar.delete(str[start]);
      start++;
    }
  }
  return maxlength;
};

let res = longestSubString(`abcabcbb`);
console.log(res);
