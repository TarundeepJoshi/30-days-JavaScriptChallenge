// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const productOfTwoNumbers = (num1, num2 = 10) => {
  return console.log(`The product of ${num1} and ${num2} is: `, num1 * num2);
};

productOfTwoNumbers(5);

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.

function greeting(name, age = 20) {
  return console.log(`Hi ${name}, it's great that now you are ${age}`);
}

greeting("Joshi");
