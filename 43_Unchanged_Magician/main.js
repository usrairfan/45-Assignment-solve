//43.Unchanged Magicians: Start with your work from Exercise 42.
//Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of 
//the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Rickey Jay", "Criss Angel", "Mac King", "Derren Brown"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianarray) {
    for (var i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = "The Great" + " " + magicianarray[i];
    }
}
function show_magician(magician) {
    magician.forEach(function (magicians) {
        console.log(magicians);
    });
}
var copymagicianeArray = copyArray(magician);
make_great(copymagicianeArray);
console.log("\n\nThis is my original Array");
show_magician(magician);
console.log("\n\nThis is my modified copy of the Array");
show_magician(copymagicianeArray);
