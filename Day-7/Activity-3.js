// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Central Library",
  books: [
    {
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      year: 1954,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },
  ],
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library Name: ${library.name}`);

library.books.forEach((book) => console.log(`- ${book.title}`));
