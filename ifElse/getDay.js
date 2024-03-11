// Determine the day of the week based on a given date.

let x = new Date("2020-10-28");//Month is 1 based indexing(28 Oct 2020)
// let x = new Date(2020, 10, 28)//Month is 0 based indexing(28 Nov 2020)
let day = x.getDay();

switch(day) {
    case 0 :
            console.log("Sunday");
             break;
    case 1: 
             console.log("Monday");
             break;    
    case 2: 
             console.log("Tuesday");
             break;
    case 3: 
             console.log("Wednesday");
             break;          


    case 4:  
            console.log("Thrusday");
            break;          

    case 5: 
            console.log("Friday");
            break;         

    case 6: 
            console.log("Saturday");
            break;
    default : 
             console.log("wrong Input");         



}