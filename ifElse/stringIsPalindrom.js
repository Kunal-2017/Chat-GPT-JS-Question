// Check if a string is a palindrome.

// let str = "hello";
let str = "radar";
let n = str.length;
let arr = Array(n);
let newArr = Array(n);
let j = 0;

for (let i = 0; i < n; i++) {
    arr[i] = str[i];
}
for (let i = n-1; i >= 0; i--) {
    newArr[j] = str[i];
    j++;
}
// if (arr.join('') === newArr.join('')) {
//     console.log(`${str} is a palindrom`);
// } else {
//     console.log(`${str} is not a palindrom`);
// }
// or 
let k;
for (k = 0; k < n; k++) {
   if (arr[k] !== newArr[k]) {
      break;
   } 
} 
if (k === n) {
    console.log(`${str} is a palindrom`);
} else {
    console.log(`${str} is not a palindrom`);
}
 





// 2nd method

// let str = "rakjhar";
// let str = "radar";
// let n = str.length;
// let arr = Array(n);
// let newArr = Array(n); // to create an array of size n because reverse() method works on Array
// for (let i = 0; i < n; i++) {
//   arr[i] = str[i];
//   newArr[i] = str[i];
// }

// arr.reverse(); // reverse() method reverse the original Array

// // arr.reverse() === newArr .It is not possible to compare like this because reverse() method points to same Arrry.so we use join() method to compare the content of the array
// if (arr.join("") === newArr.join("")) {
//   console.log(`${newArr} is a palindrom`);
// } else {
//   console.log(`${newArr} is not a palindrom`);
// }


// 3rd method
// let str = "rakjhar";
// let n = str.length;

// let isPalindrome = true;

// for (let i = 0; i < Math.floor(n / 2); i++) {
//     if (str[i] !== str[n - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     console.log(`${str} is a palindrome.`);
// } else {
//     console.log(`${str} is not a palindrome.`);
// }

