"use strict";
//Uper Case
let person_Name = "Feema Tariq";
console.log("uppercase:", person_Name.toUpperCase());
//Lower Case
console.log("lowercase:", person_Name.toLowerCase());
// Title Case
console.log("titlecase:", person_Name.replace(/\bw/g, c => c.toUpperCase()));
