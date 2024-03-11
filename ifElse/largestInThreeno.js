
// Determine the largest of three numbers.

let a = 40,b = 60,c = -30;
if (a > b) {
    if (a > c) {
       console.log(`${a} is largest than ${b} & ${c}`);
    } else {
        console.log(`${c} is largest than ${b} & ${a}`);
    }
} else {
    if (b > c) {
        console.log(`${b} is largest than ${a} & ${c}`);
    } else {
        console.log(`${c} is largest than ${b} & ${a}`);
    }
}