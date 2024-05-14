/*
add(4)(7)(2)(10)()
add(11)(2)(10)()
add(13)(10)()
add(23)()
*/

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(4)(7)(2)(10)());