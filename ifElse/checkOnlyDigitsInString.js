// Check if a string contains only digits.

let str = "1234567890";
function onlyDigits(str1) {
    return [...str1].every((char) => {
        return !isNaN(char);
    })
}
if (onlyDigits(str)) {
   console.log(`${str} has only digits`);
} else {
    console.log(`${str} has not only digits`);
}