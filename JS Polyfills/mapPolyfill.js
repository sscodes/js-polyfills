// Array.map implementation

// [1,2,3].map((el,i) => el*2);

Array.prototype.mapPolyfill = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i));
  }
  return res;
};

let arr = [1, 2, 3];
console.log(arr.mapPolyfill((el, i) => el * 2));
