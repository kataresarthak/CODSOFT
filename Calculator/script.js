const display = document.querySelector(".calc-display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+", "="];
let currentOutput = "";

// Function to handle button clicks and calculate the result
const performCalculation = (btnValue) => {
  display.focus();
  if (btnValue === "=" && currentOutput !== "") {
    // Replace '%' with '/100' before evaluating
    currentOutput = eval(currentOutput.replace("%", "/100"));
  } else if (btnValue === "AC") {
    currentOutput = "";
  } else if (btnValue === "DEL") {
    // Remove the last character from the current output
    currentOutput = currentOutput.toString().slice(0, -1);
  } else {
    // Prevent starting with an operator
    if (currentOutput === "" && operators.includes(btnValue)) return;
    currentOutput += btnValue;
  }
  display.value = currentOutput;
};

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    performCalculation(e.target.dataset.value)
  );
});
