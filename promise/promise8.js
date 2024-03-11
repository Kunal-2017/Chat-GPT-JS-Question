// 8.	Conditional Promise Resolution: Create a function that takes a number as a parameter. If the number is even, the Promise should resolve with "Even", otherwise, it should reject with "Odd".
function createPromise(x) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            if (x % 2 === 0) {
                res("Even");
            } else {
                rej("Odd");
            }
            
        },2000);

    });
   
}
let pr = createPromise(10);
console.log(pr);
// pr.then((value) => {
//     console.log(`Promise Resolved with value ${value}`);
// },(value) => {
//     console.log(`Promise Rejected with value ${value}`);
// })

// this second method can also use.
// function createPromise(x) {
// if (x % 2 === 0) {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res("Even");
//         },2000);

//     });
// } else {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             rej("Odd");
//         },2000);
//      });
// }
// }