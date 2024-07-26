const { add, subtract, multiply, divide } = require("./mathOperations");
const greet = require("./greet");

console.log(`Add: ${add(10, 5)}`);
console.log(`Subtract: ${subtract(10, 5)}`);
console.log(`Multiply: ${multiply(10, 5)}`);
console.log(`Divide: ${divide(10, 5)}`);

console.log(greet("Tarundeep Joshi"));
