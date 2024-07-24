function tryCatchFinally() {
  try {
    console.log("Entering the try block.");

    throw new Error("An error occurred in the try block.");

    console.log("This will not be logged.");
  } catch (error) {
    console.log("Entering the catch block.");
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Entering the finally block.");
    console.log(
      "This block executes regardless of whether an error was thrown or not."
    );
  }

  console.log("After the try-catch-finally block.");
}

tryCatchFinally();
