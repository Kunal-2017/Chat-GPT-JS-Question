// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

const promise1 = new Promise((res,rej) => {
    setTimeout(() => {
        res(2);
    },20);
});
const promise2 = new Promise((res,rej) => {
    setTimeout(() => {
        res(5);
    },30);
});
Promise.all([promise1,promise2]).then((value) => {
    let sum = 0;
    // for (let i = 0; i < value.length; i++) {
    //     sum = sum + value[i];
    // }
    
    value.forEach((result) => {
       sum = sum + result;
    })
    return(sum);
})
.then((value) => {
    console.log(value);
})