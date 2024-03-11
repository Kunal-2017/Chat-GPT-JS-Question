for (let num = 1; num <=100; num++) {
   let isPrime = true;
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }

    }
    if (isPrime) {
        console.log(num);
    }
}