// Array.reduce implementation

Array.prototype.reducePolyfill = function (cb) {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    res = cb(res, this[i]);
  }
  return res;
};

let arr = [1, 2, 3];
console.log(
  arr.reducePolyfill((acc, curr) => {
    acc += curr;
    return acc;
  })
);
