// Activity 2: Destructuring

// Task 3: Use object destructuring to extract the title and author from a book object and log them to the console.
const bookdetails = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell ",
};
const { title, author } = bookdetails;
console.log(title, author);

// Task 4: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array = [1, 2, 3, 4, 5, 6];
const [firstElement, secondElement] = array;
console.log(firstElement, secondElement);
