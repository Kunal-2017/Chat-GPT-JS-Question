let num = Number(prompt("Enter a number to check prime or not"));

if (num === 2) {
    document.write(`${num} is a prime number`);
}
else {
    let i;
    for (i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            document.write(`${num} is divisible by first number ${i} <br>`);
            break;
        }
    }
    if (i > parseInt(Math.sqrt(num)) && (num !== 1) ) {
        document.write(`${num} is a Prime number`);
    }
    else {
        document.write(`${num} is not a prime number`);
    }
   
}