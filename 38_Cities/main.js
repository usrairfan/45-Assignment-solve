function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return " ".concat(nameOfCity, " is in ").concat(country);
}
;
//3 Cities
var city1 = describe_city('Karachi', 'Pakistan.');
var city2 = describe_city('Tornato', 'Canada.');
var city3 = describe_city('Masco', 'Russia.');
var city4 = describe_city('Brussels', 'Belgium.');
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
