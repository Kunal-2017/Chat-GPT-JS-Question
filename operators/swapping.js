let a = Number(prompt("Enter first number"));  // convert to number
// a = Number(a);
let b = Number(prompt("Enter second number")) ;
// swapping using temp variables
// document.write(`Original value of a and b is ${a},${b} .<br>`);
// let c = a;
//     a = b;
//     b = c;
// document.write(`Swapping value of a and b is ${a},${b} .<br>`);

// swapping without using third variable

document.write(`Original value of a and b is ${a},${b} .<br>`);

a = a + b;
b = a - b;
a = a - b;

document.write(`Swapping value of a and b is ${a},${b} .<br>`);