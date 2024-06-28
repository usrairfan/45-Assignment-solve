function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Sandwich is ready!\n");
}
// Example calls to the function
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Butter", "Mayo", "Bread");
