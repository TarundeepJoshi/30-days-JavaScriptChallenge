// Task 1 : Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
const name = "Joshi";

const age = 20;

const object = {
  firstName: "Tarundeep",
  lastName: "Joshi",
};

const isTrue = false;

const countriesArray = ["India", "USA", "China", "Japan"];

const variableTypeConsoleLog = (value, type) => {
  console.log(`Value: ${value}, Type: ${typeof type}`);
};

variableTypeConsoleLog(name, name);
variableTypeConsoleLog(age, age);
variableTypeConsoleLog(object, object);
variableTypeConsoleLog(isTrue, isTrue);
variableTypeConsoleLog(countriesArray, countriesArray);

// Task 2 : Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Using let
let reAssignToLet = "30_days_Challenge";
console.log(`Initial value of reAssignToLet: ${reAssignToLet}`);

reAssignToLet = "30_days_JavaScript_Challenge";
console.log(`Reassigned value of reAssignToLet: ${reAssignToLet}`);

// Using const
const birthYear = 2001;
console.log(`Initial value of birthYear: ${birthYear}`);

try {
  birthYear = 2003;
} catch (error) {
  console.error(`Error when trying to reassign birthYear: ${error.message}`);
}
