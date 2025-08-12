let a: unknown = "sachin";
console.log((a as string).length)

const x : unknown = "saurabh"
console.log((<string> x).length)

const y = "hello"
// console.log(((x as unknown) as number).length)