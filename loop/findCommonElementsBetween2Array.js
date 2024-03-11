// Implement a program to find the common elements between two arrays using for loops.
let arr1 = [1,2,5,6,4,9];
let arr2 = [2,3,6,8];
let arr3 = [];
let n1 = arr1.length;
let n2 = arr2.length;
for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
        if (arr1[i] === arr2[j]) {
           arr3.push(arr1[i]);
            break;
        }
    }
}
console.log(arr3);
// second method
// let arr1 = [1,2,5,6,4,9];
// let arr2 = [2,3,6,8];
// let arr3 = [];
// let n1 = arr1.length;
// let n2 = arr2.length;
// let str1 = arr1.join('');
// let str2 = arr2.join('');
// let str3 = "";
// for (let i = 0; i < str2.length; i++) {
//     if (str1.includes(str2[i])) {
//         str3 = str3 + str2[i];
//     }
// }
// console.log(str3.split(''));