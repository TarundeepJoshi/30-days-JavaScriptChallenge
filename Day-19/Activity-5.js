// Define the regular expression pattern to validate a simple password
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/;

// Define the test password
const password = "Bharat@123";

// Test the password against the regular expression
const isValid = regex.test(password);

// Log whether the password is valid
console.log(`Password is valid: ${isValid}`); // Output: Password is valid: true

// Define the regular expression pattern to validate a URL
const regex1 = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,}){1,2}$/;

// Define the test URL
const url = "https://www.google.com";

// Test the URL against the regular expression
const isValid1 = regex1.test(url);

// Log whether the URL is valid
console.log(`URL is valid: ${isValid1}`); // Output: URL is valid: true
