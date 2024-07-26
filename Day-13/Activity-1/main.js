const addNumbers = require("./addNumbers");
const person = require("./person");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

console.log(person.greet());
