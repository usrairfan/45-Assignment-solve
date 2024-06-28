var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCar(manufacturer, modelname) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelname: modelname }, Object.fromEntries(option));
    return car;
}
var makeMyCar = makeCar("Toyota", "Yaris", ["color", "White"], ["year", 2022]);
console.log(makeMyCar);
