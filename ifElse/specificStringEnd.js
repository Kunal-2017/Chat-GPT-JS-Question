// Check if a string ends with a specific substring.

let str = "Hello World";
let specificString = "World";
if (str.endsWith(specificString)) {
    console.log(`${specificString} is the end part of ${str}`);
} else {
    console.log(`${specificString} is not the end part of ${str}`);
}