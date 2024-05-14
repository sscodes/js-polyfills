Array.prototype.filterPolyfill = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filterPolyfill((el) => el % 2 === 0)
);