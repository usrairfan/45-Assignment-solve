//43.Unchanged Magicians: Start with your work from Exercise 42.
 //Call the function make_great() with a copy of the array of magicians’ names.
 // Because the original array will be unchanged, return the new array and store it in a separate array.
 // Call show_magicians() with each array to show that you have one array of 
 //the original names and one array with the Great added to each magician’s name.

 let magician:string[] = ["Rickey Jay","Criss Angel","Mac King","Derren Brown"];
 function copyArray(arr:string[]){
    return[...arr]
 }

 function make_great (magicianarray:string[]){
     for(let i=0; i < magicianarray.length; i++){
       magicianarray[i] =  "The Great" +" "+ magicianarray[i] 
     }
 }
 
  function show_magician(magician:string[]){
     magician.forEach(magicians =>{
         console.log(magicians);
     });
 }
 let copymagicianeArray = copyArray(magician);
make_great( copymagicianeArray );

 console.log(`\n\nThis is my original Array`);
 show_magician(magician);

 console.log(`\n\nThis is my modified copy of the Array`);
 show_magician(copymagicianeArray);
 
 
 