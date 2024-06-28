//42.Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magician = ["Rickey Jay", "Criss Angel", "Mac King", "Derren Brown"];
function make_great(magicianarray) {
    for (var i = 0; i < magicianarray.length; i++) {
        magician[i] = "The Great" + " " + magicianarray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (magicians) {
        console.log(magicians);
    });
}
make_great(magician);
show_magicians(magician);
