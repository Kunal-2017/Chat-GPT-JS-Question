// Check if a number is a Fibonacci number.

let numberToCheck = 13;
if (numberToCheck < 0) {
    console.log("Negative number is not a fibbonaci number");
    throw new Error("Negative number encountered");
}
let x = 5 * (numberToCheck ** 2) + 4; // ckeckin fibonnaci propert
let y = 5 * (numberToCheck ** 2) - 4;// ckeckin fibonnaci propert

let isPerfectSq1= (Math.sqrt(x) % 1 === 0);//check perfect square
let isPerfectSq2= (Math.sqrt(y) % 1 === 0);
 
if (isPerfectSq1 || isPerfectSq2) {
    console.log(`${numberToCheck} is a fibbonaci number`);
} else {
    console.log(`${numberToCheck} is not a fibbonaci number`);
}

// second number
// const fibSequnce = [0,1,1,2,3,5,8,13,21,34];
// let fibNum = 6;
// let i;
// for (i = 0; i < fibSequnce.length; i++) {
//     if (fibSequnce[i] === fibNum) {
//             console.log(`${fibNum} is a fibbonaci no`);
//         break;
//     } 
// }
// if (i === fibSequnce.length) {
//     console.log(`${fibNum} is not a fibbonaci no`);
// }



