// 7.	Sequential Promises: Write a function that returns a Promise and takes an array of values. The Promise should resolve with the sum of the square of each number in the array, calculated sequentially.


let arr = [1,2,3];
// let arr = [1,"Ok",3]; // if there is any element  string or boolean value in array  then promise rejected


function createPromise(arr1) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr1.length; i++) {
                  if ( typeof arr[i] === "number") {
                     sum = sum + arr1[i] ** 2;
                 } else {
                    rej(arr[i]);
                    break;
                 }
            }
            res(sum);
        },2000);
    });
}
let x = createPromise(arr);
console.log(x);