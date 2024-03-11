// 4.	Promise All: Create three Promises that resolve with values 'A', 'B', and 'C' respectively. Use Promise.all to log an array of the resolved values when all Promises are fulfilled.
let pr1 = new Promise((res,rej) => {
    setTimeout(() => {
        res("A");
    },1000);
})
let pr2 = new Promise((res,rej) => {
    setTimeout(() => {
        res("B");
    },2000);
})
let pr3 = new Promise((res,rej) => {
    setTimeout(() => {
        res("C");
    },3000);
})
Promise.all([pr1,pr2,pr3]).then((value) => {
    console.log(value);
})