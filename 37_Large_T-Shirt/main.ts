//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//Large Shirt
function make_shirt(size:string = "Large",text:string = "I love TypeScript") {
    console.log(`Making s ${size} t-shirt with the message: "${text}"`);    
    }
    make_shirt();// large and Message
    make_shirt(`Medium`);// default Message ,Medium size
    make_shirt(`Small`,'Dive into coding');// custom Message Small size