// Check if a number is a perfect cube using a function.
let numberToCheck = 27;
let y = Math.cbrt(numberToCheck);
if (y % 1 === 0) {
    console.log(`${numberToCheck} is a perfect cube number`);
} else {
    console.log(`${numberToCheck} is not a perfect cube number`);
}