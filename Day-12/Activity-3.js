class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwErrorFunction() {
  throw new CustomError("This is a custom error message.");
}

try {
  throwErrorFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a custom error:", error.message);
  } else {
    console.error("Caught an unexpected error:", error);
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new ValidationError("Input cannot be empty.");
  }
  console.log("Valid input:", input);
}

try {
  const userInput = "tarun";
  validateInput(userInput);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Caught a validation error:", error.message);
  } else {
    console.error("Caught an unexpected error:", error);
  }
}
