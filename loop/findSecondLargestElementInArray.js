// Implement a program to find the second largest element in an array using for loops.
let arr = [10,-10,20,40,60,5,1,19,70];
let n = arr.length;

for (let i = 0; i <= 1; i++) {
    //outer loop goes to 2nd pass to get second largest element in array
    for (let j = 0; j < n - i -1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j]= arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
console.log(`Second largest element in array is ${arr[n - 2]}`);