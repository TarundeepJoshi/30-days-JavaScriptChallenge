const asyncCall = async () => {
  console.log("Waiting for completion of promise");
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
  console.log(result);
};

asyncCall();

const awaitCall = async () => {
  try {
    console.log("Waiting for rejection of promise");
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Promise reject after 3 seconds"));
      }, 3000);
    });
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

awaitCall();
