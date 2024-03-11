// print fibonnaci sequence upto 20 terms
let x = 0, y = 1,z;
console.log(x);
console.log(y);


for (let i = 2; i < 20; i++) {
    z = x + y;
    console.log(z);
    x = y;
    y = z;
    

}