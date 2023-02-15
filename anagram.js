/** @format */

// string anagram problem
// hello -> llleo

// anagram--numbers of letter should be equal but arrangement can be different  and length should be same of both string.

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let counter = {};
  for (const letter of s1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (const item of s2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

let result = isAnagram(`hello`, `llheo`);

console.log(result);
