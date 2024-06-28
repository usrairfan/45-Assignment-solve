let guestlist:string[] = [` Mona`,`Naheed `,`Mussarat`,`Noushaba`,`Atra `];
let notArraived: string = `Atra`;
let itReplace:string = `Kiran`;
guestlist[4]= itReplace;
guestlist.unshift(`Rihana`,`Sania`,`Enjlijna`);
console.log(`\n Unfortunately we can not arrange a big table, Only two people allow.`);
while(guestlist.length>2){
    let remove_guest = guestlist.pop();
    console.log(`Sorry sir/Madam,${remove_guest} You are not invited in dinner.`)
}
for(let i = 0; i<guestlist.length; i++){
    console.log(`Respected Sir/Madam ` + guestlist[i] + `,\n Yes you are still invited tomorrow dinner\n\n Thank You \n`);

}
guestlist.splice(0,2)
console.log(guestlist);