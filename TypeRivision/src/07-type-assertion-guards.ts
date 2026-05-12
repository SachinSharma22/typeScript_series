// Type assertion
let someValue : unknown = "Hello, Everyone How are you";
let len : number = (someValue as string).length;
// or
let strLen : number = (<string>someValue).length;

// Type Guard
function processValue (value : string | number) : void {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }else {
        console.log(value.toFixed(2));
    }
}
// processValue("Sachin")
// processValue(22);

// instence of type Guard
class Dog3 {
    bark1() {
        console.log("Woof!")
    }
}
class Cat3 {
    meow1() {
        console.log("Meow!")
    }
}
function makeSounds (animal: Dog3 | Cat3) : void {
    if(animal instanceof Dog3) {
        animal.bark1();
    } else {
        animal.meow1();
    }
}


makeSounds(new Dog3);
makeSounds(new Cat3);