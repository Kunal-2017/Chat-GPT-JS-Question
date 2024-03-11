// Check if a number is a power of 2.

let num = 26;
let originalNum = num;

let i;
for (i = 1; num > 1; i++) {
   if (num % 2 !== 0) {
        break;
   }
    num = parseInt(num / 2);
}
if (num === 1) {
    console.log(`${originalNum} is  a power of 2`);
} else {
    console.log(`${originalNum} is not  a power of 2`);
}
