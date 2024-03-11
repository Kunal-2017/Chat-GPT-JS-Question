// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// first method

let t = Date.now();
function sleep(time) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(time);
        },time);
    });
}
sleep(100).then(() => {
    console.log(Date.now() - t);
})

// Second method

// function createPromise(duration) {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res(duration);
//         },duration);
//     });
// }
// async function sleep() {
//     let millis = 100;
//     let time1 =  await createPromise(millis);
//     console.log(time1);
// }
// sleep();