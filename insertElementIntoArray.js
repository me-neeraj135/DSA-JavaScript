function insertElm(e, p) {
  let arr = [11, 22, 33, 44, 55, 66];
  let elm = e;
  let position = p;

  if (typeof position !== `number`) {
    throw new Error(`positon is not a number`);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) {
        arr[i] = elm;
      } else if (position < 0) {
        return [elm, ...arr];
      }
    } else if (position > arr.length - 1) {
      console.log(`elm`);

      return [...arr, elm];
    }
  }
  return arr;
}
const newArray = insertElm(1000, 5);
console.log(newArray);
