let memo = {
  cache: {},
  memo: function (fn) {
    return (...args) => {
      let key = JSON.stringify(args);
      if (this.cache[key] === undefined) this.cache[key] = fn(...args);
      return this.cache[key];
    };
  },
};

const expensiveFunction = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}

  return num1 + num2;
};

console.time('First Call');
console.log(memo.memo(expensiveFunction)(4, 7));
console.timeEnd('First Call');

console.time('Second Call');
console.log(memo.memo(expensiveFunction)(4, 7));
console.timeEnd('Second Call');
