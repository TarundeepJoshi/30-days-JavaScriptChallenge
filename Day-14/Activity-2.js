class Person {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Welcome, ${this.name}. Your assigned ID is: ${this.id}`;
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.id = studentId;
  }
  method() {
    return this.id;
  }
  greeting() {
    return `Hello, my name is ${this.name}. My student ID is ${this.id}`;
  }
}

const instanceOfStudent = new Student("Tarundeep Joshi", 2116095);
console.log(instanceOfStudent.greeting());
