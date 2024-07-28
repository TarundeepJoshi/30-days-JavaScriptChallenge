function findFactorial(num) {
  if (num === 0) return 1;
  return num * findFactorial(num - 1);
}

console.log(findFactorial(3));
console.log(findFactorial(5));
console.log(findFactorial(10));

function findFibonacci(number) {
  return number <= 2
    ? 1
    : findFibonacci(number - 1) + findFibonacci(number - 2);
}
console.log(findFibonacci(15));
console.log(findFibonacci(6));
console.log(findFibonacci(10));
