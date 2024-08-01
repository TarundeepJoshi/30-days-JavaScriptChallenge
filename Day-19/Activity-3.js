// Define the regular expression pattern to capture the area code, central office code, and line number
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Define a US phone number in the format (123) 456-7890
const phoneNumber = "(123) 456-7890";

// Use the match() method to find the captures
const captures = phoneNumber.match(regex);

// Log the captures
console.log(captures); // Output: [ '(123) 456-7890', '123', '456', '7890', index: 0, input: '(123) 456-7890', groups: undefined ]

// Define the regular expression pattern to capture the username and domain from an email address
const regex1 = /(\w+)@(\w+\.\w+)/;

// Define an email address
const email = "joshi@gmail.com";

// Use the match() method to find the captures
const captures1 = email.match(regex1);

// Log the captures1
console.log(captures1);
