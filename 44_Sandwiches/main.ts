function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Sandwich is ready!\n");
}

// Example calls to the function
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Butter", "Mayo", "Bread");