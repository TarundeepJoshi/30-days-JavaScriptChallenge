// Task 1: Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

function arithmeticOperations(a, b) {
  console.log(`The addition of ${a} and ${b} is: `, a + b);
  console.log(`The subtraction of ${a} and ${b} is: `, a - b);
  console.log(`The multiplication of ${a} and ${b} is: `, a * b);
  console.log(`The division of ${a} and ${b} is: `, a / b);
  console.log(`The remainder of ${a} and ${b} is: `, a % b);
}
arithmeticOperations(10, 20);

// Task 2: Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
function func(a, b) {
  if (!((a === 10 && b === 10) || a >= b)) {
    console.log("Hello World !!");
  } else {
    console.log("Error");
  }
}

func(10, 10);
func(20, 10);
func(10, 20);

// Task 3: Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
function ternaryOperator(num) {
  if (num === 0) {
    console.log("Zero is neither positive nor negative !!");
  } else {
    const result = num > 0 ? "Number is Positive !!" : "Number is Negative !!";
    console.log(result);
  }
}

ternaryOperator(-10);
ternaryOperator(10);
ternaryOperator(0);
