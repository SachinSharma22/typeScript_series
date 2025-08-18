// const data: {name:string, age:number, email: string} = {
//     name: "sachin",
//     age: 23,
//     email: "sachin@gmail.com"
// }

// console.log(data)

// Type Inference
// TypeScript can infer the types of properties based on their values.

// const car = {
//     name: "tata"
// }
// car.name = "amriat bharat"
// console.log(car.name)
// car.namev= 23

// Optional property

// let car : {name: string, model: number} = {
//     name: "volvo"
// }
// car.model = 2002

// let car : {name: string, model?: number} = {
//     name: "volvo"
// }
// car.model = 2002

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

let data : {[index: string] : number} = {}
data.sachin = 23
// data.sachin = "23"
