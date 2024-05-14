const fullName = function (age, hometown) {
  console.log(
    this.firstName +
      ' ' +
      this.lastName +
      ' is of age ' +
      age +
      ' and is from ' +
      hometown
  );
};

const person1 = {
  firstName: 'Sanket',
  lastName: 'Sarkar',
};

const person2 = {
  firstName: 'Soham',
  lastName: 'Sarkar',
};

Function.prototype.callPolyfill = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + ' is not a function');
  }

  obj.fn = this;
  obj.fn(...args);
};

fullName.callPolyfill(person1, 24, 'Chittarangan');

// fullName.call(person1, 24, 'Chittarangan');
// fullName.call(person2, 13, 'Chittarangan');
