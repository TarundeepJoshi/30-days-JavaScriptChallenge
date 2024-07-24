function throwError() {
  try {
    throw new Error("This is an intentional error.");
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

throwError();

function divideTwoNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    } else {
      console.log(numerator / denominator);
    }
  } catch (error) {
    console.error("Caught an error: ", error.message);
  }
}
divideTwoNumbers(10, 5);
divideTwoNumbers(10, 0);
