// Write a function to find the smallest prime number greater than a given number using a for loop.
function smallestPrime(num) {
   let isprime = true;
   let numberToCheck;
    for (numberToCheck = num + 1; numberToCheck < num * 2; numberToCheck++) {
        let i;
        for (i = 2; i < Math.floor(Math.sqrt(numberToCheck)); i++) {
            if (numberToCheck % i === 0) {
                isprime = false;
                break;
            } 
        }
        if (isprime) {
            return numberToCheck;
        }
        // if (i ===  Math.floor(Math.sqrt(numberToCheck))) {
        //     return numberToCheck;
        // }
    }
    return -1;// no prime no found in this range
   
}
let num = 25;
console.log(`Smallest Prime number greater than ${num} is ${smallestPrime(num)} `);