// 3.	Promise Rejection: Create a Promise that rejects after 1.5 seconds with an error message "Promise rejected" and handle the rejection with a catch block.
function createPromise() {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            rej("Promise Rejected");
        },1500);
    })
}
let pr = createPromise();
pr.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
})