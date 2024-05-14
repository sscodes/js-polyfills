// Infinite Currying implementation

const addFour = (el) => {
  return el + 4;
};

const subtractSeven = (el) => {
  return el - 7;
};

const multiplyTwo = (el) => {
  return el * 2;
};

const divideByTen = (el) => {
  return el / 10;
};

const compose = (...args) => (el) => {
    let res=el;
    for (let i = args.length-1; i >=0; i--) {
        res=args[i](res);
    }
    return res;
}

const res = compose(addFour, subtractSeven, multiplyTwo, divideByTen);

console.log(res(10));