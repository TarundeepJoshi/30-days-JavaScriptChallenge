// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const Day = 2;

switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Incorrect  Input");
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const score = 80;

switch (true) {
  case score >= 80 && score <= 100:
    console.log("Grade A");
    break;
  case score >= 60 && score < 80:
    console.log("Grade B");
    break;
  case score >= 40 && score < 60:
    console.log("Grade C");
    break;
  case score >= 20 && score < 40:
    console.log("Grade D");
    break;
  case score >= 0 && score < 20:
    console.log("Grade F");
    break;
  default:
    console.log("Enter score between 1 to 100");
    break;
}
