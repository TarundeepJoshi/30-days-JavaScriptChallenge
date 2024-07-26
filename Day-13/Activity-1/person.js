const person = {
  name: "Joshi",
  age: 20,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

module.exports = person;
