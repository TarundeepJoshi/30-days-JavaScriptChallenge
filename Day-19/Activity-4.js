// Define the word to match at the beginning of the string
const wordToMatch = "Hello";

// Define the regular expression pattern to match a word at the beginning of a string
const regex = new RegExp(`^${wordToMatch}\\b`);

// Define the test string with words at the beginning
const testString =
  "Hello, World! JavaScript is a popular programming language.";

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches, handle case where no matches are found
if (matches) {
  console.log(matches);
} else {
  console.log("No matches found.");
}

// Define the word to match at the end of the string
const wordToMatch1 = "language";

// Define the regular expression pattern to match a word at the end of a string
const regex1 = new RegExp(`\\b${wordToMatch1}$`);

// Define the test string with words at the end
const testString1 =
  "Hello, World! JavaScript is a popular programming language";

// Use the match() method to find the matches
const matches1 = testString1.match(regex1);

// Log the matches1, handle case where no matches1 are found
if (matches1) {
  console.log(matches1);
} else {
  console.log("No matches1 found.");
}
