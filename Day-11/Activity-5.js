const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  // reject(new Error("reject"));
  setTimeout(() => resolve("five"), 5000);
});

Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 200);
});
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 200);
});
const p8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});

Promise.race([p6, p7, p8])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });
