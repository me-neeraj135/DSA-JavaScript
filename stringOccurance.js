/** @format */

// find the maximum occuring character in given string

function getCharStr(str) {
  const obj = {};
  str.split(``).forEach(element => {
    obj[element] = obj[element] ? obj[element] + 1 : 1;
  });

  let max = 1;
  char = str[0];
  for (let k in obj) {
    if (obj[k] > max) {
      max = obj[k];
      char = k;
    }
  }
  return char;
}

let res = getCharStr(`hello world`);
console.log(res);
