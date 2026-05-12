// Type aliases

type Point = {
    x: number;
    y: number;
};

let point: Point = {x: 10, y: 20};

// type aliases for premitive

type ID = string | number;
let userID : ID = "ss001153";
let productID: ID = 123;

// type alias vs Interface

/**Interface can be extended but type aliases can not */
interface animal {
    name: string;
}

interface Dog extends animal {
    breed: string;
}

let myDog : Dog = {
    name : "lulla",
    breed: "German"
}

// Interfaces can be declared multiple times and they will merge
interface Animal{
    name: string;
}
interface Animal{
    age: number;
}
let Dog1 : Animal = {
    name: "lulla again",
    age: 25
}

// Use interfaces for object shapes
// Use type aliases for unions/intersections
interface User {
    name: string;
    age: number;
}

type ID1 = number | string
