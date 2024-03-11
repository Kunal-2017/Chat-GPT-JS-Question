let numberToCheck = 25;
let isPerfectSquare;
for (let i = 2; i <= Math.floor(Math.sqrt(numberToCheck)); i++) {
    isPerfectSquare = false;
    if (numberToCheck / i === i) {
        
        isPerfectSquare = true;
        break;
    } 
}
if (isPerfectSquare) {
    console.log(`${numberToCheck} is a perfect square`);
} else {
    console.log(`${numberToCheck} is not a perfect square`);
}