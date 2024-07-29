class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return `Stack is Empty`;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return `Stack is Empty`;
    }
    return this.items[this.items.length - 1];
  }

  display() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.display());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.display());

// Task 4 ::
const reverseStr = (str) => {
  const stack = new Stack();
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
};

console.log(reverseStr("true"));
