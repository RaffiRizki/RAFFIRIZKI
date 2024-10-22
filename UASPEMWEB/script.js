const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      output = output.replace(/(\d+(\.\d+)?)%/g, (match, p1) => `(${p1} / 100)`);
      output = output.replace(/(\d+(\.\d+)?)(\s*[\+\-]\s*)(\(\d+(\.\d+)? \/ 100\))/g, (match, num, _, operator, percentage) => {
        return `${num} ${operator} ${num} * ${percentage}`;
      });

      output = eval(output);
    } catch {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if (btnValue === "sin") {
    output = Math.sin(parseFloat(output)).toString();
  } else if (btnValue === "cos") {
    output = Math.cos(parseFloat(output)).toString();
  } else if (btnValue === "tan") {
    output = Math.tan(parseFloat(output)).toString();
  } else if (btnValue === "sqrt") {
    output = Math.sqrt(parseFloat(output)).toString();
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
