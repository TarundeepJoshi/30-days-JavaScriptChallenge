// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return console.log([(nums[i] = i), (nums[j] = j)]);
//       }
//     }
//   }
// }

// let result1 = twoSum([2, 7, 11, 15], 17);
// let result2 = twoSum([3, 2, 5], 8);
// let result3 = twoSum([1, 15, 78, 5], 16);

// OPTIMIZED APPROACH

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 2, 3, 4, 5], 10));
