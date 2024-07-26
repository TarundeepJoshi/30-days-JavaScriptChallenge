class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreeting() {
    return "30 days JavaScript Challenge";
  }
}

console.log(Person.genericGreeting());

class Student extends Person {
  static totalStudents = 0;
  constructor(name, age, StudentID) {
    super(name, age);
    this.StudentID = StudentID;
    Student.totalStudents++;
  }
}

const student1 = new Student("Manav", 20, 1234);
console.log(`Total number of students: ${Student.totalStudents}`);

const student2 = new Student("Jassi", 21, 1235);
console.log(`Total number of students: ${Student.totalStudents}`);

const student3 = new Student("Khush", 20, 1236);
const student4 = new Student("Joshi", 20, 1237);

console.log(`Total number of students: ${Student.totalStudents}`);
