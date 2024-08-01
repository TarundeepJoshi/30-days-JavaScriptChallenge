// Define the regular expression pattern to match the word "JavaScript"
const regex = /JavaScript/g;

// Define the test string
const testString =
  "JavaScript is a popular programming language. JavaScript is used for web development.";

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ 'JavaScript', 'JavaScript' ]

// Define the regular expression pattern to match all digits
const regex1 = /\d/g;

// Define the test string with digits
const testString1 = "The number 123 is an example of a number with digits.";

// Use the match() method to find the matches
const matches1 = testString1.match(regex1);

// Log the matches1
console.log(matches1); // Output: [ '1', '2', '3' ]

// Define the regular expression pattern to match all digits
const regex2 = /\d+/g;

console.log(testString1.match(regex2)); // Output: [ '123' ]
