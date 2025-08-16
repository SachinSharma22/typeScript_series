// 8. Classes

// Create a class Car with properties make, model, and year.
// Add a method getCarInfo() that returns a string with the car details.
// Then create an object and call the method.

class Car{
    constructor(public make:string,public model:string,public year: string){}

    // method to print data
    getCarInfo():void {
        console.log(`Car is created by ${this.make}`)
        console.log(`Car model is ${this.model}`)
        console.log(`Car manufectured year is ${this.year}`)
    }
}

const m1 = new Car("TATA","PUNCH","2025");
m1.getCarInfo();
