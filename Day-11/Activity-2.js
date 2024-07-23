const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 2000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 1500);
  });
};

fetchData1()
  .then((message1) => {
    console.log(message1);
    return fetchData2();
  })
  .then((message2) => {
    console.log(message2);
    return fetchData3();
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });
