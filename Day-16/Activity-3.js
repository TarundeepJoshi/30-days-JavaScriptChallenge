function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("recursion"));

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
