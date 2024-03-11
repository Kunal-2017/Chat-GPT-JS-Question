// Check if a number is within 10 units of 100 or 200.
// it means number should lies between 90 -110(inclusive) or 190-210(inclusive)
let num = 65;
if ((num > 90 && num <= 110 ) || (num > 190 && num <= 210)) {
    console.log(`${num} is within 10 units of 100 or 200`);
} else {
    console.log(`${num} is not within 10 units of 100 or 200`);
}