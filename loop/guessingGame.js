// Create a program that simulates a guessing game using a do-while loop.
function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;

    do {
        guess = parseInt(prompt("Guess the number between 1 and 10:"));

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else {
            attempts++;

            if (guess === secretNumber) {
                alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
            } else {
                alert("Incorrect guess. Try again!");
            }
        }
    } while (guess !== secretNumber);
}

// Example usage:
guessingGame();



// let guessingNumber = 5;
// function guessTheNumber (min1,max1) {
//     return Math.floor(Math.random() * (max1 - min1) + min1);//guessing number generating betwwen min & max and also min is inclusive but not max
    
// }
// let max = 11;
// let min = 1;
// let result = guessTheNumber(min,max);
// console.log(result);
// while (result === guessingNumber) {
//     console.log("you guessed a right number .You have another chance to guess a number");
//     guessingNumber = prompt("Enter another number");
//     console.log(guessingNumber);
//     result = guessTheNumber(min,max);
// }
// if (result !== guessingNumber) {
//     console.log("you guess the wrong number");
// }