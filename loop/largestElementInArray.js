// Write a function to find the largest element in an array using a for loop.
let arr = [10,23,-10,56,0,20];
let n = arr.length;
let largest = arr[0];
if (n === 0) {
    largest = undefined;
} else {
    for (let i =1 ;i < n; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
}

console.log(`Largest elememt in [${arr}] is ${largest}`);