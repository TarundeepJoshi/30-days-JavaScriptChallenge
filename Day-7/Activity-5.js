// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const bookdetails = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
  year: 2015,
};

for (const property in bookdetails) {
  console.log(`${property}: ${bookdetails[property]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const bookdetails2 = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
  year: 2015,
};

const keys = Object.keys(bookdetails2);
console.log("Keys:", keys);

const values = Object.values(bookdetails2);
console.log("Values:", values);
