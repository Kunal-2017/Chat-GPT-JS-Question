// Check if a number is a perfect square.
let num = 16;
let x = Math.sqrt(num);

let y = Math.floor(x); // ceil function can also be used
if (num < 0) {
    console.log("Square Root of negative number is not possible");
} else if(x === y) {
    console.log(`${num} is a perfect square number`);
} else {
    console.log(`${num} is not a perfect square number`);
}
// other method 
function isPerfectSquare(number) {
    // Calculate the square root
    const squareRoot = Math.sqrt(number);

    // Check if the square root is an integer
    if (Number.isInteger(squareRoot)) {
        console.log(`${number} is a perfect square.`);
    } else {
        console.log(`${number} is not a perfect square.`);
    }
}

// Example usage:
isPerfectSquare(16);  // Output: 16 is a perfect square.
isPerfectSquare(25);  // Output: 25 is a perfect square.
isPerfectSquare(18);  // Output: 18 is not a perfect square.

 