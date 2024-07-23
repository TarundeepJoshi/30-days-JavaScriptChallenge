const resolveAfter2Seconds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve after 2 seconds");
  }, 2000);
});

resolveAfter2Seconds.then((result) => {
  console.log(result);
});

const rejectAfter2Seconds = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
}).catch((err) => {
  console.error(err.message);
});
