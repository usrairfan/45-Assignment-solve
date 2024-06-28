var currentUser = ["ArFain", "SaRa", "TaRiq", "AyeSha", "UsRa"];
var newUser = ["Malaika", "Shakir", "Shayyan", "Shanzey", "SaRa"];
newUser.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (currentUser.map(function (c_user) { return c_user.toLowerCase().includes(lowerCase); })) {
        console.log("The username ".concat(newUsername, " is not available. please write a diffrent name"));
    }
    else {
        console.log("The user name ".concat(newUsername, " is available."));
    }
});
