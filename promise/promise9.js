// 9.	Promise Timeout: Write a function that returns a Promise. If the Promise does not resolve within 4 seconds, reject it with a timeout error.
function createPromise(time1) {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            
            if (time1 <= 4) {
                res("Promise Resolved");
            } else {
                rej("Timeout error");
            }
            
        },2000);
    })
}
let time = prompt("Enter the value of time");
let pr = createPromise(time);