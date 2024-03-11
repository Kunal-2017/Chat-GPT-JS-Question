// Use a while loop to find the factorial of a number.
let num = 5;
let newNum = num;
let fact = 1;
while (num > 1) {
    fact = fact * num;
    num--;
}
console.log(`Factorial of ${newNum} is ${fact}`);