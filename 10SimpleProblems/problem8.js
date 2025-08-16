// 8. Classes
// Create a class Car with properties make, model, and year.
// Add a method getCarInfo() that returns a string with the car details.
// Then create an object and call the method.
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
var m1 = new Car("TATA", "PUNCH", "2025");
m1.getCarInfo();
