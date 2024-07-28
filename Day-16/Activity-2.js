function findSum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + findSum(arr.slice(1));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30, 40];
const array3 = [7, -3, 2, 5];

console.log(findSum(array1));
console.log(findSum(array2));
console.log(findSum(array3));

function findMax(arr) {
  if (arr.length === 1) return arr[0];
  const restMax = findMax(arr.slice(1));
  return arr[0] > restMax ? arr[0] : restMax;
}

const array4 = [1, 2, 3, 4, 5];
const array5 = [10, 20, 30, 40];
const array6 = [7, -3, 2, 5];

console.log(findMax(array4));
console.log(findMax(array5));
console.log(findMax(array6));
