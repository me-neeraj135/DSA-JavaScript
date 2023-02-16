/** @format */
// binary search
// divide and conquerer technics

// Find the index of given no (7),in the sorted array
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function searchIndex(array, num) {
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < num) {
      min = array[midIndex] + 1;
    } else if (array[midIndex] > num) {
      max = array[midIndex] - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let result = searchIndex(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  11
);

console.log(result);
