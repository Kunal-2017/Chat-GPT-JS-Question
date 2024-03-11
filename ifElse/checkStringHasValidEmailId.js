// Check if a string is a valid email address.
let str = "rajkunal1801@gmail.com"

if (str.includes("@") && (str.indexOf("@") > 1 && str.indexOf("@") < str.indexOf(".com") ) && str.includes(".com") && str.endsWith(".com")) {
    console.log(`${str} is a valid Email Id`);
} else {
    console.log(`${str} is not a valid Email Id`);
}