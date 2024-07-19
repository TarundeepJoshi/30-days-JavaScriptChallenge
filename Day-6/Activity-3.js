// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const mapArray = [1, 2, 3, 4, 5];
const doubleNumber = mapArray.map((num) => num * 2);
console.log(doubleNumber);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
function filterArray(num) {
  if (num % 2 === 0) {
    return num;
  }
}
const filterMethod = [1, 2, 3.4, 5, 6, 7, 4, 12, 4, 3, 232].filter(filterArray);
console.log(filterMethod);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const reduceMethod = [1, 2, 4];
const reducer = reduceMethod.reduce((first, second) => {
  return first + second;
});
console.log(reducer);
