// Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatFunc = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};

repeatFunc(() => console.log("Joshi"), 5);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const composeFunctions = (func1, func2, value) => {
  return func2(func1(value));
};

const double = (x) => x * 2;
const square = (x) => x * x;
console.log(composeFunctions(double, square, 3));
