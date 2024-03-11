// Display the first 10 Fibonacci numbers using a for loop.
let x = 0;
let y = 1;
let z;
console.log(x);//print first fibbonaci number
console.log(y);//print second fibbonaci number
// print fibbonaci numbers from third to tenth
for (let i = 3; i<= 10; i++) {
    z = x + y;
    console.log(z);
    x = y;
    y = z;

}
