var guestlist = [" Mona", "Naheed ", "Mussarat", "Noushaba", "Atra "];
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Respected Sir/Madam ` + guestlist[i] + `, \n We invited to you on dinner in tommarow.\n\n Thnak You \n`);
//}
var notArraived = "Atra";
var itReplace = "Kiran";
guestlist[4] = itReplace;
for (var i = 0; i < guestlist.length; i++) {
    console.log("Respected Sir/Madam " + guestlist[i] + ",\n We invited to you on dinner in tommarow.\n\n Thank You \n");
}
//console.log(`Madam. ${notArraived} will not coming tommarow dinner`);
guestlist.unshift("Rihana", "Sania", "Enjlijna");
for (var i = 0; i < guestlist.length; i++) {
    console.log("Respected Sir/Madam " + guestlist[i] + ",\n We invited to you on dinner in tommarow.We found big table so we decide to invite 3 more guest\n\n Thank You \n");
}
