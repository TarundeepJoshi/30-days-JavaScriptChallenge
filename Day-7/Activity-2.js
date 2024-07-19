// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const bookdetails = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
  year: "2015",
  method() {
    return this.title + " by " + this.author;
  },
};

console.log(bookdetails.method());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const book = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
  year: 2015,
  updateYear(newYear) {
    this.year = newYear;
  },
};

book.updateYear(2024);
console.log(book);
