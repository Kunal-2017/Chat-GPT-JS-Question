// Check if a string is a valid color code (hexadecimal).
let x = "#ffffff";
let regXcolorCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
if (regXcolorCode.test(x)) {
    console.log(`${x} is a valid color code`);
} else {
    console.log(`${x} is not a valid color code`);
}