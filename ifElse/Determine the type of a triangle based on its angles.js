// Determine the type of a triangle based on its angles.
const x = 60; //angle 1
const y = 60; //angle 2
const z = 60; //angle 3

if (x + y + z === 180 ) {
    if ((x === y) && (y === z) && (x === z) ) {
        console.log("Eqilateral Triangle");
    } else if ((x !== y) && (y !== z) && (x !== z) ) {
        console.log("Scalene Triangle");
    } else if (((x === y) || (y === z) || (x === z)) && ((x === 90) || (y === 90)|| (z === 90))) {
        console.log(" Right Angle Issosceles Triangle");
    } else {
        console.log("Issosceles triangle");
    } 
     
} else {
    console.log("Wrong Input because Sum of triangle should be equal to 180");
}
