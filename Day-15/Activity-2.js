function UserIDs() {
  let lastID = 0;

  function generateID() {
    lastID += 1;
    return lastID.toString().padStart(4, "0");
  }

  function getID() {
    return lastID.toString().padStart(4, "0");
  }
  return { generateID, getID };
}

const myID = UserIDs();

console.log(myID.getID());
console.log(myID.generateID());
console.log(myID.getID());
console.log(myID.generateID());

function user(name) {
  function greet() {
    return `Hello ${name}, welcome to the 30 days JavaScript challenge`;
  }
  return greet;
}

const greetUser = user("Tarun");
console.log(greetUser());
