function makeCar(manufacturer: string , modelname: string,...option: [string,any][]):object{
    let car = {manufacturer,modelname,...Object.fromEntries(option)};
    
    return car;
}
let makeMyCar = makeCar(`Toyota`,`Yaris`,[`color`,`White`],[`year`,2022]);

console.log(makeMyCar);
