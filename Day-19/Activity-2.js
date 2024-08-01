// Define the regular expression pattern to match all words that start with a capital letter
const regex = /\b[A-Z]\w*/g;

// Define the test string with words that start with a capital letter
const testString =
  "Hello, World! JavaScript is a popular programming language.";

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ 'Hello', 'World', 'JavaScript

const regex1 = /\d+/g;

// Define the test string with sequences of digits
const testString1 =
  "The numbers 123, 456, and 789 are examples of sequences of digits.";

// Use the match() method to find the matches
const matches1 = testString1.match(regex1);

// Log the matches1
console.log(matches1); // Output: [ '123', '456', '789' ]
