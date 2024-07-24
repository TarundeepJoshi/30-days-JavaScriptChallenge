function randomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved successfully.");
    } else {
      reject("Promise rejected.");
    }
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });

async function handleRandomPromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

handleRandomPromise();
