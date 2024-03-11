// Implement a program to find the average of an array using a for loop.

const arr = [10,20,30,40,50,100];
let n = arr.length;
let sum = 0;
let avg;
for (let i = 0; i < n; i++) {
    sum = sum + arr[i];

}
avg = sum / n;
console.log(`Average of an Array [${arr}]is ${avg}`);