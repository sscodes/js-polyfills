let calc = {
  total: 10,
  add (val) {
    this.total += val;
    return this;
  },
  subtract: function (val) {
    this.total -= val;
    return this;
  },
  multiply: function (val) {
    this.total *= val;
    return this;
  },
};

const res = calc.add(7).subtract(4).multiply(10);
console.log(res);
