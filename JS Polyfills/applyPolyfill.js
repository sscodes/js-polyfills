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

Function.prototype.applyPolyfill = function (obj, args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + ' is not a function');
  }

  obj.fn = this;
  obj.fn(...args);
};

fullName.applyPolyfill(person1, [24, 'Chittarangan']);

// fullName.apply(person1, [24, 'Chittarangan']);
// fullName.apply(person2, [13, 'Chittarangan']);
