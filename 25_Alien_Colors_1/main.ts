  // Write an if statement to test whether the alien’s color is green.    
  // If it is, print a message that the player just earned 5 points.
let Aliencolor:string = "Green";
if(Aliencolor === "Green"){
    console.log("Player Just Earned 5 points !");
}

// Write one version of this program that passes the if test and another that fails. 
//  (The version that fails will have no output.)
Aliencolor = "Yellow";
if(Aliencolor === "Green"){
    console.log("Player Just Earned 5 points !");
}