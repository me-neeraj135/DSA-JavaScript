/** @format */

// [1,2,3,4,3,5,4,6,7,8]->length=10
// count largest sum of consecutive digits
// num=4
// loop formula -> array.length-4+1
//10-4+1=7 time loop will iterate

function findLargestSum(array, num) {
  if (num > array) {
    throw new Error(`num is grater than array`);
  } else {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

let result = findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);

console.log(result);
