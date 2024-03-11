// Check if a number is a power of 3 using a function.
let numberTocheck = 243;
let originalNum = numberTocheck;
let count = 0;
while (numberTocheck > 1) {
    if (numberTocheck % 3 !== 0) {
        break;
    }
    numberTocheck = parseInt(numberTocheck / 3);
    count++;

}
if (numberTocheck === 1) {
    console.log(`${originalNum} is a  ${count} power of 3 `);
} else {
    console.log(`${originalNum} is not power of 3`);
}