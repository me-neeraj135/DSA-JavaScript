/** @format */

// A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

function checkPal(str) {
  str = str.toLowerCase();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

console.log(checkPal("madam"));

