function ComputeAmount() {
  let total = 0;

  this.thousand = function (val) {
    total += val * 1000;
    return this;
  };
  this.lacs = (val) => {
    total += val * 100000;
    return this;
  };
  this.crore = (val) => {
    total += val * 10000000;
    return this;
  };
  this.value = () => {
    return total;
  };
}

/*
class ComputeAmount {
  constructor() {
    this.total = 0;

    this.thousand = function (val) {
      this.total += val * 1000;
      return this;
    };
    this.lacs = (val) => {
      this.total += val * 100000;
      return this;
    };
    this.crore = (val) => {
      this.total += val * 10000000;
      return this;
    };
    this.value = () => {
      return this.total;
    };
  }
}
*/

const computeAmount = () => new ComputeAmount();

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
