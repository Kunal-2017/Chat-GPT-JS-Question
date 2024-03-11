let a = Number(prompt("Enter first number"));  // convert to number
// a = Number(a);
let b = Number(prompt("Enter second number")) ;
// document.write(typeof a  + " " + typeof b);  // checking datatypes of a,b

document.write(`Sum of ${a} and ${b} is ${a + b}. <br>`);
document.write(`Subtract of ${a} and ${b} is ${a - b}.<br>`);
document.write(`Product of ${a} and ${b} is ${a * b}.<br>`);
document.write(`Division of ${a} and ${b} is ${a / b}.<br>`);
document.write(`When ${a} is divided by ${b}, Remainder is ${a % b} `);