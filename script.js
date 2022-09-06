let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let oper = prompt("Enter the operator that you want (-,+,*,/):");

let ans = calc(num1, num2, oper);

function calc(num1, num2, oper) {
  if (oper === "+") {
    return num1 + num2;
  }
  if (oper === "-") {
    return num1 - num2;
  }
  if (oper === "*") {
    return num1 * num2;
  }
  if (oper === "/") {
    return num1 / num2;
  }
}

console.log("The result of", num1, oper, num2, "=", ans);
alert("The result of " + num1 + oper + num2 + " = " + ans);
