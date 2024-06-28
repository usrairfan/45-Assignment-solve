function my_Album(Artistname, Album) {
    return { Artistname: Artistname, Album: Album };
}
var Album1 = my_Album("Ali Hayder", "Sandesa");
var Album2 = my_Album("Sjjad Ali", "Babia");
var Album3 = my_Album("Shahzad Roy", "kangna");
console.log(Album1);
console.log(Album2);
console.log(Album3);
function my_Album2(Artistname, Album, AlbumTrack) {
    return { Artistname: Artistname, Album: Album, AlbumTrack: AlbumTrack };
}
var Album4 = my_Album2("Ali Hayder", "Sandesa", 12);
var Album5 = my_Album2("Sjjad Ali", "Babia", 10);
var Album6 = my_Album2("Shahzad Roy", "kangna", 34);
console.log(Album4);
console.log(Album5);
console.log(Album6);
