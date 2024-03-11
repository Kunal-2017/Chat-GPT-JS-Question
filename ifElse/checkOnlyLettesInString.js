// Check if a string contains only letters.
let str = "jfhtfjvuglsefj";//only letters
let x = "_@$!#%^&*()-+=.,{}[]\|;:'0123456789/";
let i;
for (i = 0; i < x.length; i++) {
   if (str.includes(x[i])) {
           break;
   }
    
}
if (i === x.length) {
    console.log(`${str} has only letters`);
} else {
    console.log(`${str} has not only letters but also special characters or digits`);
}