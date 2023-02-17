/** @format */

// Linear search

const users = [{ username: `abc` }, { username: `xyz` }, { username: `efg` }];

function isUserExist(array, value) {
  for (let item of array) {
    if (item[`username`] === value) {
      return true;
    }
  }
  return false;
}

let result = isUserExist(users, `xyz`);
console.log(result);
