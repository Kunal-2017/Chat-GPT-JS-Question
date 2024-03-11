// 1.	Basic Promise Creation: Create a simple Promise that resolves after a delay of 2 seconds and logs "Promise resolved" to the console.

function createPromise() {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res("Promise Resolved");
        },2000);
    })
}
let pr = createPromise();
pr.then((value) => {
    console.log(value);
})