var guestlist = [" Mona", "Naheed ", "Mussarat", "Noushaba", "Atra "];
var notArraived = "Atra";
var itReplace = "Kiran";
guestlist[4] = itReplace;
guestlist.unshift("Rihana", "Sania", "Enjlijna");
console.log("\n Unfortunately we can not arrange a big table, Only two people allow.");
while (guestlist.length > 2) {
    var remove_guest = guestlist.pop();
    console.log("Sorry sir/Madam,".concat(remove_guest, " You are not invited in dinner."));
}
for (var i = 0; i < guestlist.length; i++) {
    console.log("Respected Sir/Madam " + guestlist[i] + ",\n Yes you are still invited tomorrow dinner\n\n Thank You \n");
}
guestlist.splice(0, 2);
console.log(guestlist);
