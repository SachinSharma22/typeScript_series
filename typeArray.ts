// const arr : string[] = [];
// arr.push("Sachin")
// arr.push(3) Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// ⚠ Error (TS2345)  | 

// The readonly keyword can prevent arrays from being changed.
// const arr1: readonly string[] = ["sachin"]
// arr1.push("someone") Property 'push' does not exist on type 'readonly string[]

// TypeScript can infer the type of an array if it has values.
const arr :string[] = ["sachin", "sharma", "mohit", "nidhi", "muskan"];
// arr.push(3) Argument of type 'number' is not assignable to parameter of type 'string'



