// Check if a number is between a specific range.

const num = Number(prompt("Enter a number"));
const max = 100;
const min = 20;
if (num > min && num < max ) {
    console.log(`${num} is in the range ${min} to ${max}`);
} else {
    console.log(`${num} is not in the range ${min} to ${max}`);
}