// Use a while loop to reverse a string.
let str = "computer";
let i = 0;
let n = str.length;
let arr = Array(n);
while (i < n) {
    arr[i] = str[i];
    i++;
}
let reverseString = arr.reverse().join('');
console.log(reverseString);




// while (i < n / 2) {
//     let temp = str[i];// this solution is not possible because we can not assign string characters.
//     str[i] = str[n - i - 1];
//     str[n - i - 1] = temp;
//     i++;

// }
console.log(`Reverse of ${originalStr} is ${str}`);

// 2nd method without while loop
// let str = "computer";
// let reverseSting = str.split('').reverse().join('');
// if (str.length === 0) {
//     console.log("String is empty");
// } else {
//     console.log(`Reverse of ${str} is ${reverseSting}`);
// }

   
