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

Function.prototype.bindPolyfill = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + ' is not a function');
  }

  obj.fn = this;
  return () => obj.fn(...args);
};

fullName.bindPolyfill(person1, 24, 'Chittarangan')();

// fullName.bind(person1, 24, 'Chittarangan')();
// fullName.bind(person2, 13, 'Chittarangan')();
