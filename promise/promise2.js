// 2.	Promise Chaining: Chain two Promises: the first resolves with the value 'Hello', and the second one takes that value, appends ' World', and logs the result.
function createPromise() {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res("Hello");
        },2000);
    })
}
let pr = createPromise();
pr.
then((value) => {
    return value;
})
.then((value) => {
    console.log(`${value} World`);
})