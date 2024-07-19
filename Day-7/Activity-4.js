// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
const book = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
  year: 2015,
  method() {
    return this.title + " is published in year " + this.year;
  },
};
console.log(book.method());
