fetch("https://api.github.com/orgs/nodejs")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.created_at);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

const fetchUsingAsyncAwait = async () => {
  const url = "https://api.github.com/orgs/nodejs";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json.updated_at);
  } catch (error) {
    console.error(error.message);
  }
};

fetchUsingAsyncAwait();
