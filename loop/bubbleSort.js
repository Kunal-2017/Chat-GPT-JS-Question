// Write a function to sort an array in ascending order using the bubble sort algorithm and a for loop.

let arr = [-2,10,1,-3,20,5,2,7];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i -1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j]= arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);