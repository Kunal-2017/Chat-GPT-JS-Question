// 5.	Promise Race: Create two Promises, one that resolves after 3 seconds with 'Winner!' and another that resolves after 5 seconds with 'Second place!'. Use Promise.race to log the result of the first resolved Promise.
let pr1 = new Promise((res,rej) => {
    setTimeout(() => {
        res("Winner!");
    },3000);
})
let pr2 = new Promise((res,rej) => {
    setTimeout(() => {
        res("Second place!");
    },5000);
})
Promise.race([pr1,pr2]).then((value) => {
    console.log(value);
})