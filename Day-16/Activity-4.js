function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7));
console.log(binarySearch(sortedArray, 2));
console.log(binarySearch(sortedArray, 15));

function countOccurrences(arr, target) {
  if (arr.length === 0) return 0;

  const countInRest = countOccurrences(arr.slice(1), target);

  return (arr[0] === target ? 1 : 0) + countInRest;
}

const array = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(array, 2));
console.log(countOccurrences(array, 4));
console.log(countOccurrences(array, 6));
