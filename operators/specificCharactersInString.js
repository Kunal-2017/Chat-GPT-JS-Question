let str = prompt("Enter a string to check specific characters is or not");
// let isSpecialChar = true;


for (let i = 0; i < str.length; i++) {
  switch(str[i]) {
    case "\n" : 
      document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
      break;
    case "\t" :
        document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
        break;
    case "\\" :
        document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
        break;
    case "\b" :
        document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
        break;
    case '\"' :
        document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
        break;
    case "\r" :
    document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
    break;
    case "\f" :
    document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
    break;
    case "\'" :
    document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br> `);
    break;
  }
// other method
  // if ((str.charAt([i]) === "\n") || (str.charAt([i]) === "\t") || (str.charAt([i]) === "\r") || (str.charAt([i]) === "\f") || (str.charAt([i]) === "\\") || (str.charAt([i]) === "\'") || (str.charAt([i]) === "\b") || (str.charAt([i]) === '\"')) {
  //   document.write(`Specific characters ${str[i]} are found at ${i} position in ${str} <br>`);
  // }
}
