// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
  name: "Arjun",
  age: 20,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const key = "job";
const value = "Software Engineer";

const personDetails = {
  [key]: value,
  city: "New York",
};

console.log(personDetails);
