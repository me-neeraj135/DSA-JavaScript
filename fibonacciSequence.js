// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

//  Problem-Give a number "n", find the first "n" element of the fibonacci sequence

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
