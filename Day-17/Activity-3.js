class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return `Queue is Empty`;
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return `Queue is Empty`;
    }
    return this.items[0];
  }

  display() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.display());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.display());

// Task 6 ::
const printJob = (jobs) => {
  const queue = new Queue();
  for (let i = 0; i < jobs.length; i++) {
    queue.enqueue(jobs[i]);
  }
  while (queue.items.length > 0) {
    console.log(queue.dequeue());
  }
};

const jobs = ["A", "B", "C", "D"];
printJob(jobs);
