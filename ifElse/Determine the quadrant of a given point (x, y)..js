// Determine the quadrant of a given point (x, y).

const x = -10;
const y = 15;


if ((x > 0 && y > 0)) {
        console.log(`point (${x},${y}) is in Ist Quadrant`);
    } else if (x < 0 && y > 0) {
        console.log(`point (${x},${y}) is in IInd Quadrant`);
    } else if (x < 0 && y < 0) {
        console.log(` point (${x},${y}) is in IIIrd Quadrant`);
    } else if (x > 0 && y < 0) {
        console.log(`point (${x},${y}) is in IVth Quadrant`);
    }else if (x === 0 && y !== 0) {
        console.log(`point (${x},${y}) is on y-axis`);
    } else if (x !== 0 && y === 0) {
        console.log(`point (${x},${y}) is on x-axis`);
    } else if (x === 0 && y === 0) {
        console.log(`point (${x},${y}) is at origin`);
    } else {
        console.log("wrong input");
    }
    

// second method but not best
// let point = {
//              x: 10,
//              y: -10
//             };
// // point.x = 10;
// // point.y = -10;

// if ((point.x > 0 && point.y > 0)) {
//     console.log(`${point} is in Ist Quadrant`);
// } else if (point.x < 0 && point.y > 0) {
//     console.log(`${point} is in IInd Quadrant`);
// } else if (point.x < 0 && point.y < 0) {
//     console.log(`${point} is in IIIrd Quadrant`);
// } else if (point.x > 0 && point.y < 0) {
//     console.log(`${point} is in IVth Quadrant`);
// } else {
//     console.log("wrong input");
// }
// console.log(point);
