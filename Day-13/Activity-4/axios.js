const axios = require("axios");
console.log("Making a network request...");
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    const user = response.data;
    console.log("User information: ");
    console.log("Name: ", user.name);
    console.log("Email: ", user.email);
    console.log(
      "Address: ",
      user.address.street,
      user.address.suite,
      user.address.city,
      user.address.zipcode
    );
  })
  .catch((error) => {
    console.log("An error occurred: ", error.message);
  });
