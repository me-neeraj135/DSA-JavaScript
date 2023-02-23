/** @format */

// A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

function checkPal(str) {
  let newStr = str.toLowerCase();
  //   console.log(newStr, `newString`);
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
let res = checkPal(`madam`);

console.log(res);
