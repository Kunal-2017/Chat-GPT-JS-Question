// Check if a number is an Armstrong number.

let numberToCheck = 153;
let newNum = numberToCheck;
let x = newNum;
let sum = 0;
let count = 0;
let rem;

// to count number of digits
while (newNum > 0) {
  newNum = parseInt(newNum / 10);
  count++;
}
// calculate sum of all digits raised to power number of digit
while (x > 0) {
    rem = x % 10; 
    sum = sum + rem ** count;
    x = parseInt(x / 10);
}
if (numberToCheck === sum) {
    console.log(`${numberToCheck} is a Armstrong Number`);
} else {
    console.log(`${numberToCheck} is not a Armstrong Number`);
}


