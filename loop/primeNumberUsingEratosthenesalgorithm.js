// Write a program to find all prime numbers between 1 and 100 using the Sieve of Eratosthenes algorithm.
function sieveOfEratosthenesBasic(limit) {
    const primes = [];
    const isPrime = new Array(limit + 1).fill(true);

    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return primes;
}

// Example usage:
const limit = 99;
const primesBasic = sieveOfEratosthenesBasic(limit);
console.log("Method 1 (Basic):", primesBasic);
