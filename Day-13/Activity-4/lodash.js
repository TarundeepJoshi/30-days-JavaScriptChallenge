const _ = require("lodash");

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let chunks = _.chunk(array1, 2);
console.log("Before chunking: ", array1);
console.log("After chunking: ", chunks);
console.log();
let array2 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
let flatten = _.flatten(array2);
console.log("Original array: ", array2);
console.log("Flattened array: ", flatten);
