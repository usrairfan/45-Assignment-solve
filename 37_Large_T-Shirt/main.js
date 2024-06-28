//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//Large Shirt
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Making s ".concat(size, " t-shirt with the message: \"").concat(text, "\""));
}
make_shirt(); // large and Message
make_shirt("Medium"); // default Message ,Medium size
make_shirt("Small", 'Dive into coding'); // custom Message Small size
