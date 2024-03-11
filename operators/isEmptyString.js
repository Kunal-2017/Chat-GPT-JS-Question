let firstName = prompt("Enter your name");

if ( Boolean(firstName) === true) {
    document.write(`your name is ${firstName}`);
}
else {
    document.write("Empty string");
}