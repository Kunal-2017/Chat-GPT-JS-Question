// Print a pattern of stars in a pyramid shape using nested for loops.

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Add spaces before stars
        for (let j = height - i; j > 0; j--) {
            process.stdout.write(" ");
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            process.stdout.write("*");
        }

        // Move to the next line after each row
        console.log();
    }
}

// Example usage:
const pyramidHeight = 5;
printPyramid(pyramidHeight);
