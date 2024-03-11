// regular expression for credit card
let creditCardRegX = /^(?:\d[ -]*?){13,16}$/;

let isValidCreditCard = "1234567 890123456";
if (creditCardRegX.test(isValidCreditCard)) {
    console.log(`${isValidCreditCard} is a valid credit card number`);
} else {
    console.log(`${isValidCreditCard} is not a valid credit card number`);
}