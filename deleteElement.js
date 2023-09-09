// delete an element from specific postion in array

function deleteElement(p) {
  let data = [10, 30, 55, 40, 99, 565];
  let position = p;

  for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  return data;
}
const result = deleteElement(5);
console.log(result);
