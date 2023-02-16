/** @format */

// checking square in another array
// arr1=[1,2,3,4],arr2=[1,9,4,16]
// arr1=[1,2,4,2], arr2=[1,4,4,16]

// obj1={1:1,2:1,3:1,4:1}
// obj2={1:1,9:1,4:1,16:1 }

function checkSquare(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  for (let item of arr1) {
    obj1[item] = (obj1[item] || 0) + 1;
  }
  for (let item of arr2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }
  for (let key in obj1) {
    if (!obj2[key * key]) {
      return false;
    }

    if (obj1[key] !== obj2[key * key]) {
      return false;
    }
  }
  return true;
}

let result = checkSquare([1, 2, 4, 2], [1, 4, 4, 5]);

console.log(result);
