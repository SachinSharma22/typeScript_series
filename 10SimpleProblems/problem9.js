// 9. Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Extend the Car class to a ElectricCar class that has an additional property batteryLife.
// Override getCarInfo() to include battery life in the string.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // method to print data
    Car.prototype.getCarInfo = function () {
        console.log("Car is created by ".concat(this.make));
        console.log("Car model is ".concat(this.model));
        console.log("Car manufectured year is ".concat(this.year));
    };
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(make, model, year, batteryLife) {
        var _this = _super.call(this, make, model, year) || this; // ✅ Call parent constructor with arguments
        _this.batteryLife = batteryLife;
        return _this;
    }
    ElectricCar.prototype.getCarInfo = function () {
        _super.prototype.getCarInfo.call(this);
        console.log("Battery Life of car is ".concat(this.batteryLife));
    };
    return ElectricCar;
}(Car));
var m1 = new ElectricCar("TATA", "PUNCH", "2025", "100%");
m1.getCarInfo();
