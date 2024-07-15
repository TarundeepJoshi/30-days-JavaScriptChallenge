// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let number_1 = 100;
let number_2 = 200;
let greaterNumbers = number_1 > number_2;
let smallerNumbers = number_1 < number_2;
console.log(`Is ${number_1} greater than ${number_2}: `, greaterNumbers);
console.log(`Is ${number_1} smaller than ${number_2}: `, smallerNumbers);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let number_3 = 10;
let number_4 = 10;
let greaterThanOrEqual = number_3 >= number_4;
let smallerThanOrEqual = number_3 <= number_4;
console.log(
  `Is ${number_3} greater than or equal to ${number_4}: `,
  greaterThanOrEqual
);
console.log(
  `Is ${number_3} smaller than or equal to ${number_4}: `,
  smallerThanOrEqual
);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let number_5 = 50;
let number_6 = "50";
let strictEqality = number_5 == number_6;
let looseEquality = number_5 === number_6;
console.log(
  `Is ${number_5} equal to "${number_6}" by use of (==) operator: `,
  strictEqality
);
console.log(
  `Is ${number_5} equal to "${number_6}" by use of (===) operator: `,
  looseEquality
);
