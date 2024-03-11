let year = Number(prompt("Enter a year to check leap or not"));

if ((year % 100 === 0) && (year % 400 === 0)) {
    document.write(`${year} is a leap year`);
}
else if ((year % 100 !== 0) && year % 4 === 0) {
    document.write(`${year} is a leap year`);
} else {
    document.write(`${year} is not a leap year`);
}