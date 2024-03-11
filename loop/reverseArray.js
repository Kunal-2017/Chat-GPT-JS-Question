let arr = [1,2,3,4,5];
let n = arr.length;
for (let i = n - 1, j = 0; i >= n / 2, j <= n / 2; i--, j++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
console.log(arr);