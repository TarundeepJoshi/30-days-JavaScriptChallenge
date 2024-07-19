// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
const array = [1, 3, 5, 6, 7, 5];
for (let i = 0; i < array.length; i++) {
  console.log("for loop", array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
const array2 = [34, 54, 6, 6, 3, 1, 3, 8];
array2.forEach((element) => {
  console.log("for-each loop", element);
});
