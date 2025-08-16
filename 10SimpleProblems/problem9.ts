// 9. Inheritance

// Extend the Car class to a ElectricCar class that has an additional property batteryLife.
// Override getCarInfo() to include battery life in the string.

class Car{
    constructor(public make:string,public model:string,public year: string){}

    // method to print data
    getCarInfo():void {
        console.log(`Car is created by ${this.make}`)
        console.log(`Car model is ${this.model}`)
        console.log(`Car manufectured year is ${this.year}`)
    }
}

class ElectricCar extends Car {
   constructor(make: string, model: string, year: string, public batteryLife: string) {
        super(make, model, year); // ✅ Call parent constructor with arguments
    }

    getCarInfo(): void {
        super.getCarInfo()
        console.log(`Battery Life of car is ${this.batteryLife}`)
    }
}

const m1 = new ElectricCar("TATA","PUNCH","2025","100%")
m1.getCarInfo();