"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equiality
console.log("Equiality Test with srtings : ", "Man" === "Man");
// unequiality
console.log("Unequiality Test with srtings : ", "Man" != "Women");
// lower case function
console.log("Lower Case Function Test: ", "HELLO".toLowerCase() === "hello");
//• Numerical tests involving equality
console.log("Equiality Test with Number : ", 60 === 60);
//• Numerical tests involving unequality
console.log("Unequiality Test with number : ", 60 != 70);
//greater than test
console.log("Greater Then Test:", 10 > 5);
//Less Then test
console.log("Less Then Test:", 9 < 10);
//greater than or equal to
console.log("Greater Than or Equal to", 60 >= 60);
//less than or equal to
console.log('Less Then or Equal To:', 60 <= 70);
// • Tests using "and" 
console.log("And Operators Test: ", 70 === 70 && 10 > 9);
// Test using "or" operators
console.log("Or Operators Test: ", 70 === 70 || 10 < 9);
//• Test whether an item is in a array
var vegitable = ["Tommato", "Potato", "Carrot", "Brinjal", "Couliflower"];
console.log("Test \"Brinjal\" in the array: ", vegitable.includes("Brinjal"));
//• Test whether an item is not in a array
console.log("Test \"Cabbage\" is not in array: ", !vegitable.includes('Cabbage'));
