/** @format */

// Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order. The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    // console.log(i);
    let isSwapped;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return array;
}

let result = bubbleSort([9, 6, 2, 3, 4, 5, 6, 7, 8]);
console.log(result);
