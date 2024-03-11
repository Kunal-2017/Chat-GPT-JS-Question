// 6.	Promise Error Handling: Create a function that returns a Promise. If a given parameter is a number, the Promise should resolve with the square of the number. If the parameter is not a number, the Promise should reject with an error message.
function createPromise() {
    return new Promise((res,rej) => {
        setTimeout(() =>{
            let x = prompt("Enter anything");
            if(!(isNaN(Number(x)))){
                res(x);
            } else {
                rej(x);
            }
                
        },2000);
    });
}
let x = createPromise() ;
x.then((value) => {
    console.log((`Square of ${value} is ${value * value}`));
},(value) => {
    console.log(`Given parameter ${value} is not a number`); 
});