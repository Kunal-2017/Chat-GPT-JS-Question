// Create a program that counts the number of vowels in a given string using a for loop.
let str = "Kunal";
let numberOfVowels = 0;
let vowels = [];
if (str.length === 0) {
    console.log("String is Empty");
} else {
    for (const elm of str) {
        if ("aeiouAEIOU".includes(elm)) {
            numberOfVowels++;
            vowels.push(elm);
    
        }
    }
}
console.log(`Number of Vowels in ${str} is ${numberOfVowels} and vowels are [${vowels}]`);

