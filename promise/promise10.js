// 10.	Async/Await with Promises: Write an asynchronous function using async/await that consumes a Promise. If the Promise resolves successfully, log "Resolved", and if it rejects, log the error message.
function createPromise(x) {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            if (x > 10) {
                res("Promise Resolved");
            } else {
                rej("Promise Rejected");
            }   
            
        },2000);
    });
}
async function execute() {
    try {
        let y = prompt("enter the value of y");
        let value = await createPromise(y);
        console.log(value);
    } catch (error) {
        // Log the error message if the Promise rejects
        console.error(error);
    }
    
}
console.log("Start");
execute();
