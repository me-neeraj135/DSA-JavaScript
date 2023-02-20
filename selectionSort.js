/** @format */

// selection sort
// [0,2,34,22,10,19]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // let temp;
    if (i !== min) {
      temp = array[i];
      console.log(temp, `temp`);
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

let res = selectionSort([0, 2, 34, 22, 10, 19]);
console.log(res);
