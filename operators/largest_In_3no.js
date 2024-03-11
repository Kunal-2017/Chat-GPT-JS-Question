let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));

if ((a === b) && (b === c) && (a === c))
{
    document.write(`${a} ${b} ${c} are equals`);

}
else if (a > b) {
    if (a > c) {
        document.write(`${a} is the largest number than ${b}, ${c}`); 
    }
    else {
        document.write(`${c} is the largest number than ${b} ,${a}`);
    }
}
else if (b > c) {
    document.write(`${b} is the largest number than ${a} ,${c}`);
}
else {
    document.write(`${c} is the largest number than ${b}, ${a}`);
}