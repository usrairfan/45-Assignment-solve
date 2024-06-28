function my_Album(Artistname:string,Album:string){
    return{Artistname,Album}
}
let Album1 =my_Album("Ali Hayder","Sandesa");
let Album2 =my_Album("Sjjad Ali","Babia");
let Album3 =my_Album("Shahzad Roy","kangna");
console.log(Album1);
console.log(Album2);
console.log(Album3);



function my_Album2(Artistname:string,Album:string ,AlbumTrack:number){
    return{Artistname,Album,AlbumTrack}
}
let Album4 =my_Album2("Ali Hayder","Sandesa",12);
let Album5 =my_Album2("Sjjad Ali","Babia",10);
let Album6 =my_Album2("Shahzad Roy","kangna",34);
console.log(Album4);
console.log(Album5);
console.log(Album6);