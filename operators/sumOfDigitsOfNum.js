let num = Number(prompt("Enter a number "));
let newNum = num;
let rem;
let sum = 0;
 if (num > 0) {
    while (num > 0) {
        rem = num % 10;
        sum = sum + rem;
        num = parseInt(num / 10);
      }
    document.write(`Sum of digits of a number ${newNum} is ${sum}`);
 }
 else {
    document.write(`${newNum} is a negative number`);
 }

