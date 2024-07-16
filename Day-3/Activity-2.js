// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const checkLargestNumber = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return "A is the largest number";
    } else {
      return "C is the largest number";
    }
  } else if (b > c) {
    return "B is the largest nummber";
  } else {
    return "C is the largest number";
  }
};
console.log(checkLargestNumber(1, 0, 15));
