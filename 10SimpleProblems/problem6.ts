// 6. Generics
// Write a generic function wrapInArray<T>(value: T): T[] that takes a value of any type and returns it wrapped inside an array.

function wrapInArray<T> (value:T) :T[] {
    return [value]
}

console.log(wrapInArray(34));
console.log(wrapInArray("sachin"));
console.log(wrapInArray(true));
console.log({id:23, name:"sachin sharma"})


// function wrapInArray<T> (value :T):void{
//     if(typeof value === 'number'){
//         console.log("T is a type of number")
//     }else if(typeof value === "string"){
//         console.log("T is a type of String")
//     }
// }
// wrapInArray(7)