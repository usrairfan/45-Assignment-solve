let currentUser:string[] = ["ArFain","SaRa", "TaRiq", "AyeSha", "UsRa"];
let newUser: string[] = ["Malaika","Shakir","Shayyan","Shanzey","SaRa"];
newUser.forEach(newUsername => {
    let lowerCase:string = newUsername.toLowerCase();
    if(currentUser.map(c_user => c_user.toLowerCase().includes(lowerCase))){
        console.log(`The username ${newUsername} is not available. please write a diffrent name`);

    }else{
        console.log(`The user name ${newUsername} is available.`);
    }
    
});
 


