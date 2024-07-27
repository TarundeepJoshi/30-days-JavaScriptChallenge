function outerFunction() {
  var outerVarible = "This variable accessed by innner function";
  function innerFunction() {
    console.log(outerVarible);
  }
  innerFunction();
}

outerFunction();

function counterFunction() {
  let count = 0;

  function incrementCounter() {
    count++;
  }

  function getValue() {
    return count;
  }

  return { incrementCounter, getValue };
}

const counter = counterFunction();

counter.incrementCounter();
counter.incrementCounter();
console.log(counter.getValue());
