let numToCheck = 13;
let i;
for (i = 2; i <= Math.floor(Math.sqrt(numToCheck)); i++) {
    if (numToCheck % i === 0) {
        break;
    }
}
if (i > Math.floor(Math.sqrt(numToCheck))) {
    console.log(`${numToCheck} is a Prime number`);
} else {
    console.log(`${numToCheck} is not a Prime number`);
}