// proble- Give a positive interger "n" determine if the number is power of two or not.

// An interger is a power of two if there exists interger "x" such that "n"===2*

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
