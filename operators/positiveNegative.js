let num = Number(prompt("Enter a number to check positive or negative"));
if (num === 0) {
    document.write(`${num} is neither negative nor positive number`);
}
else if (num > 0) {
    document.write(`${num} is a positive number`);
}
else if (num < 0) {
    document.write(`${num} is a negative number`);
}
else {
    document.write("you typed a string which is wrong input");
}
