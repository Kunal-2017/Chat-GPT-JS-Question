// Implement a binary search algorithm using a while loop.

let arr = [1,3,4,6,10,23,45,67,110,130,147];
let searchingElement = 45;
let low = 0;
let high = arr.length - 1;
let mid;
let index = binarySearch(arr,searchingElement);
if (index >= 0) {
    // Element is present in array
    console.log(`${searchingElement} is found at ${index} position`);
} else {
    // Element is not present in array
    console.log(`${searchingElement} is not found in array`);
}

function binarySearch(arr,elm) {
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === elm) {
            // if element is found then return it index
            return mid;
        } else if (arr[mid] > elm) {
        //    right part array elements removed
            high = mid - 1;
        } else {
            //    left part array elements removed
            low = mid + 1;
        }
    
    }
    if (low > high) { // array is exhausted .Searching element is not found
        return -1 
    }

    
}

