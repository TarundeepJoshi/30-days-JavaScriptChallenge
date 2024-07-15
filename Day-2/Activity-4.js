// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
function andOperator(a, b) {
  if (a > 10 && b < 10) {
    console.log("And Operator works");
  } else {
    console.log("Condition not met");
  }
}

andOperator(15, 5);
andOperator(20, 15);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
function orOperator(a, b) {
  if (a < 5 || b > 5) {
    console.log("Or Operator works");
  } else {
    console.log("Condition not met");
  }
}

orOperator(3, 10);
orOperator(7, 3);
orOperator(5, 5);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console
function notOperator(a, b) {
  if (!(a === b)) {
    console.log("Not Operator works");
  } else {
    console.log("Condition not met");
  }
}

notOperator;
