// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const checkNumberStatus = (number) => {
  if (number > 0) {
    return "number is positive";
  } else if (number < 0) {
    return "number is negative";
  } else if (number === 0) {
    return "number is zero";
  }
};
console.log(checkNumberStatus(10));

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.a
const checkPersonAge = (age) => {
  if (age >= 18) {
    return "Person is eligible to vote";
  } else {
    return "Person is not eligible to vote";
  }
};
console.log(checkPersonAge(20));
