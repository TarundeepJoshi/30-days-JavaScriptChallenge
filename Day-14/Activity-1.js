class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Happy ${this.age}th Birthday, ${this.name}`;
  }
  update(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const instanceofPerson = new Person("Joshi", 20);

console.log(instanceofPerson.greeting());

instanceofPerson.update(21);
console.log(instanceofPerson.greeting());
