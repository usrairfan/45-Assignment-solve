function describe_city(nameOfCity:string,country:string = "Pakistan"){
    return ` ${nameOfCity} is in ${country}`;
};
 //3 Cities
 let city1 = describe_city('Karachi','Pakistan.');
 let city2 = describe_city('Tornato','Canada.');
 let city3 = describe_city('Masco','Russia.');
 let city4 = describe_city('Brussels','Belgium.');

 console.log(city1);
 console.log(city2);
 console.log(city3);
 console.log(city4);
