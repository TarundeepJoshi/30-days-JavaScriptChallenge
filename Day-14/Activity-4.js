class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const names = name.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const instanceOfPerson = new Person("Tarundeep", "Joshi");
console.log(instanceOfPerson.fullName);

Person.fullName = "Bhola JavaScript Wala";
console.log(Person.fullName);
