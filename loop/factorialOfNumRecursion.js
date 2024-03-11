// Write a function to calculate the factorial of a number using recursion and a for loop.

function factorial(num) {
    
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return  num * factorial(num - 1);
    }
    
   
    
   
}
let num = 5;
let result = factorial(num);
console.log(" Factorial of " + num  + " is " + result);