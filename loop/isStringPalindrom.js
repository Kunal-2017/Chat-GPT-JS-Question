// Implement a program to check if a given string is a palindrome using a for loop.
let str = "radar";
let isPalindrom = true;
let i;
let n = str.length;

for (i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) {
        isPalindrom = false;
        break;
    }
}
if (isPalindrom === true && i === Math.floor(n / 2)) {
    console.log(`${str} is a palindrom`);
} else {
    console.log(`${str} is not a palindrom`);
}