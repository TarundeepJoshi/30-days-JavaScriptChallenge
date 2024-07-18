// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfTwoNumber = (num1, num2) => {
  return console.log(`The sum of ${num1} and ${num2} is: `, num1 + num2);
};
sumOfTwoNumber(5, 10);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const stringContainCharacter = (string, char) => {
  return string.includes(char) ? true : false;
};

console.log(stringContainCharacter("Tarundeep", "deep"));
