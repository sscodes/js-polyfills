// Array.flat implementation

Array.prototype.flatPolyfill = function (depth = 1) {
  let res = [];
  let arr = [...this];
  while (depth) {
    for (let i in arr) {
      if (Array.isArray(arr[i])) {
        for (let j in arr[i]) {
          res.push(arr[i][j]);
        }
      } else if (typeof arr[i] !== 'function') res.push(arr[i]);
    }
    arr = [...res];
    res = [];
    depth--;
  }
  res = [...arr];
  return [...res];
};

let arr = [
  [1, 2],
  [3, 4, [5, 6, [11, 12]], 7],
  [8, 9],
];

// [1, 2, 3, 4, [5, 6], 7, 8, 9];

const flattenedArray = arr.flatPolyfill(2);

console.log(flattenedArray);
